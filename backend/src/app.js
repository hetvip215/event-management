import express from "express";
import authRoute from "./routes/auth.routes.js"
import userRoute from "./routes/user.routes.js"
import eventRoutes from "./routes/event.routes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json());

app.use("/api/v1/auth",authRoute)

app.use("/api/v1/users", userRoute)

app.use("/api/v1/events", eventRoutes);

app.get("/", (req, res) => {
    res.send("API is running");
});
export {app};
