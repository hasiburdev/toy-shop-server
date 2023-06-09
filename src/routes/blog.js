const Router = require("express").Router;
const {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
} = require("../controllers/blog");

const blogRouter = Router();

blogRouter.get("/", getAllBlogs);
blogRouter.get("/:slug", getBlogBySlug);
blogRouter.post("/", createBlog);

module.exports = blogRouter;
