import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import mongoose from "mongoose";
import { createServer } from "http";
import { Server } from "socket.io";

import authRoute from "./routes/auth.js";
import apiRoute from "./routes/api.js";
import roomRoute from "./routes/room.js";

const clientURL = process.env.CLIENT_URL;

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: true });

import socket from "./controllers/socket.js";
socket(io);

app.use(
  cors({
    origin: clientURL,
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);
app.use("/api", apiRoute);
app.use("/room", roomRoute);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

server.listen(process.env.PORT || 8000, () => {
  console.log("Server is running");
});
