import { Event } from "../models/event.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const createEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }
    //console.log("Uploaded file:", req.file);
    const cloudinaryResult = await uploadOnCloudinary(req.file.path);

    if (!cloudinaryResult) {
      return res.status(500).json({ message: "Cloudinary upload failed" });
    }

    const newEvent = await Event.create({
      title,
      description,
      date,
      image: cloudinaryResult.secure_url,
      createdBy: req.user.id,
    });

    res.status(201).json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    //console.error("Create Event Error:", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};
