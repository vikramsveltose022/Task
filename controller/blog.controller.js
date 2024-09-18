import { Blog } from "../model/blog.model.js";

export const saveBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body)
        return blog ? res.status(200).json({ message: "blog saved successfull", status: true }) : res.status(400).json({ message: "something went wrong", status: false })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', error, status: false });
    }
}
export const viewBlog = async (req, res, next) => {
    try {
        const blog = await Blog.find().sort({ sortorder: -1 })
        return (blog.length > 0) ? res.status(200).json({ Blog: blog, status: true }) : res.status(404).json({ message: "Not Found", status: false })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Internal Server Error", status: false })
    }
}
export const viewBlogById = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id)
        return blog ? res.status(200).json({ Blog: blog, status: true }) : res.status(400).json({ message: "something went wrong", status: false })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error", status: false })
    }
}
export const deleteBlog = async (req, res, next) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id)
        if (!blog) {
            return res.status(404).json({ message: "Not Found", status: false })
        }
        return res.status(200).json({ message: "delete successfull", status: true })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error", status: false })
    }
}
export const updatedblog = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id)
        if (!blog) {
            return res.status(404).json({ message: "Not Found", status: false })
        }
        const updatedData = req.body;
        await Blog.findByIdAndUpdate(req.params.id, updatedData, { new: true })
        return res.status(200).json({ message: "updated successfull", status: true })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error", status: false })
    }
}