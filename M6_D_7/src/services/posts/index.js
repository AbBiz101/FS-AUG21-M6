import express from 'express';
import postendpoint from './routers.js';

const { getAllBlogs, createBlog, getBlogById, updateBlog, deleteBlog } =
	postendpoint;

const blogRouter = express.Router();

blogRouter.route('/blog').post(createBlog).get(getAllBlogs);

blogRouter
	.route('/blog/:id')
	.put(updateBlog)
	.get(getBlogById)
	.delete(deleteBlog);

export default blogRouter;

blogRouter.post('/:blogId/comment', async (req, res, next) => {
	try {
		
	} catch (error) {
		next(error);
	}
});
