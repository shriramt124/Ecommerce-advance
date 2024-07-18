import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({
                status: false,
                message: "Please fill all fields"
            })
        }
        //check if user email or username is already existing 
        const existingUser = await User.findOne(email ? { email } : { username });
        if (existingUser) {
            return res.status(400).json({
                status: false,
                message: "User already exists Please Login again"

            })
        }



        //hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create the user
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            role: role ?? "member"
        })
       
        return res.status(200).json({
            status: true,
            message: "User created SuccessFully",
            data: user
        })

      

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
        })
    }
}


export const login = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if ((!username && !email) || !password) {
            return res.status(400).json({
                status: false,
                message: "Please fill all fields"
            })
        }
        //check if user email or username is already existing
        const existingUser = await User.findOne(email ? { email } : { username });
        if (!existingUser) {
            return res.status(400).json({
                status: false,
                message: "User does not exist"
            })
        }
        //check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                status: false,
                message: "Invalid Credentials"
            })
        }
        //if all checks are passed, return user token
        const token = jwt.sign({ userId: existingUser._id, role: existingUser.role },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        )
       return res.status(200).json({
            status: true,
            message: "User logged in successfully",
            data: existingUser,
            token
        })


    } catch (error) {
    return res.status(500).json({
        status:false,
        message: error.message
    })
    }
}

 

