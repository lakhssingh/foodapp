import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";

const router = express();

// /api/my.user
router.post("/", jwtCheck, MyUserController.createCurrentUser);

export default router;
