import express from "express";
import authRoute from "./routes/auth.routes.js"
import userRoute from "./routes/user.routes.js"
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth",authRoute)

app.use("/api/v1/users", userRoute)

app.get("/", (req, res) => {
    res.send("API is running");
});
export {app};
