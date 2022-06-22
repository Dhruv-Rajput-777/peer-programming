import express, { application } from "express";
import path from "path";
const __dirname = path.resolve();
const router = express.Router();

import { scrapeQuestion } from "../controllers/question.js";
import { getWhiteboardRoom } from "../controllers/whiteboard.js";

router.post("/getQuestionSource", scrapeQuestion);

router.get("/getQuestion/:questionSource", (req, res) => {
  const path = __dirname + "/questions/" + req.params.questionSource;
  return res.sendFile(path);
});

router.get("/getWhiteboardRoom", getWhiteboardRoom);

export default router;
