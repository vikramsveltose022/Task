import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    contactNo: {
        type: String
    },
    password: {
        type: String
    }
}, { timestamps: true })

export const User = new mongoose.model("user", UserSchema)