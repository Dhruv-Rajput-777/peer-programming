import express, { application } from "express";
import path from "path";
const __dirname = path.resolve();
const router = express.Router();

import { createRoom } from "../controllers/room.js";

router.get("/createRoom", createRoom);

export default router;
