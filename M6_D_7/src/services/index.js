import express from 'express';
import endpointFunction from './routers.js';

const { getAllBlogs, createBlog, getBlogById, updateBlog, deleteBlog } =
	endpointFunction;

const blogRouter = express.Router();

blogRouter.route('/blog').post(createBlog).get(getAllBlogs);

blogRouter
	.route('/blog/:id')
	.put(updateBlog)
	.get(getBlogById)
    .delete(deleteBlog);
    
export default blogRouter;
