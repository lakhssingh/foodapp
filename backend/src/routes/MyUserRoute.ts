import express from "express";
import MyUserController from "../controllers/MyUserController";

const router = express();

// /api/my.user
router.post("/", MyUserController.createCurrentUser);

export default router;
