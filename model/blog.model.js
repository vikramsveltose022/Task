import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    userId: {
        type: String
    },
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
    content: {
        type: String
    }
}, { timestamps: true })

export const Blog = new mongoose.model("blog", BlogSchema)