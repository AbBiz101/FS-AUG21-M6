import express from 'express';
import postendpoint from './routers.js';

const {
	createBlog,
	updateBlog,
	deleteBlog,
	commentEdit,
	getAllBlogs,
	getBlogById,
	commentPost,
	commentGetAll,
	commentDelete,
	commentGetByID,
} = postendpoint;

const blogRouter = express.Router();

blogRouter.route('/blog').post(createBlog).get(getAllBlogs);

blogRouter
	.route('/blog/:id')
	.put(updateBlog)
	.get(getBlogById)
	.delete(deleteBlog);

export default blogRouter;

blogRouter.route('/:blogId/comment').post(commentPost).get(commentGetAll);

// blogRouter
// 	.route('/:blogId/comment/:commentid')
// 	.get(commentGetByID)
// 	.put(commentEdit)
// 	.delete(commentDelete);
