import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Event } from "../models/event.model.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create", verifyJWT, upload.single("image"), async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const localPath = req.file?.path;

    const cloudinaryResponse = await uploadOnCloudinary(localPath);

    if (!cloudinaryResponse?.url) {
      return res.status(500).json({ message: "Cloudinary upload failed" });
    }

    const newEvent = new Event({
      title,
      description,
      date,
      image: cloudinaryResponse.url,
      createdBy: req.user.id, // Assuming JWT adds user.id
    });

    await newEvent.save();

    res.status(201).json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
