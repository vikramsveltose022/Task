import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    title: {
        type: String
    },
    desc: {
        type: String
    }
}, { timestamps: true })

export const User = new mongoose.model("blog", UserSchema)