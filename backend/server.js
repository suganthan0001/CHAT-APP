import path from "path";
import express from 'express';
import dotenv from 'dotenv';
import messageRoutes from "./routes/message.routes.js";
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import connectToDB from "./db/connectToMongoDB.js";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";
import { app,server } from './socket/socket.js';

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 5000;

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend","dist","index.html"))
})
app.get("/", (req,res)  => {
    res.send("SERVER is READY");
})


server.listen(port, async () => {
    console.log(`Server is listening on port ${port}`);
    await connectToDB();
})