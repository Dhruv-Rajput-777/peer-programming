import express from "express";
import path from "path";
const __dirname = path.resolve();
const router = express.Router();

import { createRoom, getRoomDetails } from "../controllers/room.js";

router.get("/createRoom", createRoom);

router.get("/getRoomDetails/:roomId", getRoomDetails);

export default router;
