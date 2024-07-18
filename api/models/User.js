import mongoose, { mongo, Schema } from "mongoose";
import validator from "validator";


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        minLength: [4, "username can not less than 4"],
        maxLength: [10, "username can not more than 10"],

    }, 
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        trim: true,
        lowerCase: true,
        validator: [validator.isEmail, "Please enter a valid email address"]


    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minLength: [6, "password can not less than 6"],
        validate: [validator.isStrongPassword, "password is not strong"]

    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        default:"member"
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    dob: {
        type: Date,
    },
    photo: {
        type: String
    }

})

userSchema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth()
        && toDate.getDate() < dob.getDate())
    ) {
        age--;
    }

    return age;

})
const User = mongoose.model('User', userSchema);
export default User;
