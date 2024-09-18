import express from "express";
import { deleteBlog, saveBlog, updatedblog, viewBlog, viewBlogById } from "../controller/blog.controller.js";
import { tokenVerification } from "../middleware/tokenVerification.js";
const router = express.Router()

router.post("/save-blog", tokenVerification, saveBlog);
router.get("/view-blog/:database", tokenVerification, viewBlog)
router.get("/view-blog-by-id/:id", tokenVerification, viewBlogById);
router.delete("/delete-blog/:id", tokenVerification, deleteBlog)
router.put("/update-blog/:id", tokenVerification, updatedblog)

export default router;