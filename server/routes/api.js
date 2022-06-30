import express, { application } from "express";
import path from "path";
import { getMessages } from "../controllers/dashboard.js";
const __dirname = path.resolve();
const router = express.Router();

import { scrapeQuestion } from "../controllers/question.js";

router.post("/getQuestionSource", scrapeQuestion);

router.get("/getQuestion/:questionSource", (req, res) => {
  const path = __dirname + "/questions/" + req.params.questionSource;
  return res.sendFile(path);
});

router.get("/messages", getMessages);

export default router;
