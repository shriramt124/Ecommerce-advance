import express from "express";
import { login, register, updateProfile } from "../controller/userController.js";
const userRouter = express.Router();
import { uploader } from "../utils/multer.js";
import User from "../models/User.js";
import { isAuthenticated } from './../middlewares/authMiddleware.js';
userRouter.post("/register", register)
    .post("/login", login)
userRouter.get("/currentUser",isAuthenticated,async (req,res)=>{
    try {
        const userId = req.user._id
        const userFound = await User.findById(userId);
        if(!userFound){
            return res.status(404).json({
                status:false,
                message:"user not found"
            })
        }
        return res.status(200).json({
            status:true,
            data:userFound
        })
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:error.message
        })
    }
})

userRouter.post("/update-profile", isAuthenticated, uploader.single("image"), updateProfile )

export default userRouter;
