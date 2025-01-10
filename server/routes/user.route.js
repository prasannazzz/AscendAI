import express from "express";
import { getUser, loginUser, registerUser } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", authMiddleware, getUser);


export default router;
