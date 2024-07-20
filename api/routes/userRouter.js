import express from "express";
import { login, register, updateProfile } from "../controller/userController.js";
const userRouter = express.Router();
import { uploader } from "../utils/multer.js";
import User from "../models/User.js";
import { isAuthenticated } from './../middlewares/authMiddleware.js';
userRouter.post("/register", register)
    .post("/login", login)


userRouter.post("/update-profile", isAuthenticated, uploader.single("image"), updateProfile )

export default userRouter;
