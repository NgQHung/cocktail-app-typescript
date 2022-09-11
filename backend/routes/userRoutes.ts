import express, { Response, Request, NextFunction } from "express";
import { loginUser, signupUser } from "../controllers/userController";
import requireAuth from "../middleware/requireAuth";
import User from "../models/userModel";

const router = express.Router();

// router.use(requireAuth)

router.post("/signup", signupUser);
router.post("/login", loginUser);

export default router;
