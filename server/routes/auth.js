import express from "express";
const router = express.Router();

import { loginUser, signupUser, getUserId } from "../controllers/auth.js";

router.post("/login", loginUser);

router.post("/signup", signupUser);

router.get("/user", getUserId);

export default router;
