import express from "express";
import { login, register } from "../controller/userController.js";
const userRouter = express.Router();


userRouter.post("/register", register)
    .post("/login", login)


export default userRouter;
