import jwt from "jsonwebtoken";
import User from './../models/User.js';

export const isAuthenticated = async (req, res, next) => {
    //get the token from authorization header 
    const token = req.header('Authorization')?.replace('Bearer ', '');
    try {
        if (!token) return res.status(401).json({
            status: false,
            message: "Access Token is required"
        })

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user) return res.status(401).json({
            status: false,
            message: "Invalid Token"
        })
        req.user = user;
        next();


    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({
                status: false,
                message: "access token is  expired",
                code: "AccessTokenExpired"
            })
        }
        else if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                staus: false,
                message: "access token is  invalid",
                code: "AccessTokenInvalid"
            })
        }

        return res.status(401).json({
            status: false,
            message: error.message
        })
    }
}


export const isAuthorized = (roles = []) => {
    return async (req, res, next) => {
        try {
            if (!req.user) {
                if (!req.user) {
                    return res.status(401).json({
                        status: false,
                        message: "User not authenticated"
                    });
                }

            }
            //get the userid from req.user saved in the above as req.user = user
            const userId = req.user._id;
            //find the user
            const user = await User.findById(userId);
            //check if the user has the required role
            if (!user || !roles.includes(user.role)) {
                return res.status(401).json({
                    status: false,
                    message: "Unauthorized"
                })
            }
            next();

        }

        catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message,
                stack: error.message
            })

        }
    }
}
