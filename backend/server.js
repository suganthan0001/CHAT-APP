import express from 'express';
import dotenv from 'dotenv';
import messageRoutes from "./routes/message.routes.js";
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import connectToDB from "./db/connectToMongoDB.js";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";
import { app,server } from './socket/socket.js';

app.use(express.json());
app.use(cookieParser());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 5000;

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


app.get("/", (req,res)  => {
    res.send("SERVER is READY");
})


server.listen(port, async () => {
    console.log(`Server is listening on port ${port}`);
    await connectToDB();
})