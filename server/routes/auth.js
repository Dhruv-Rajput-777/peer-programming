import express from "express";
const router = express.Router();

import { loginUser, signupUser} from "../controllers/auth.js";

router.post("/login", loginUser);

router.post("/signup", signupUser);

export default router;
