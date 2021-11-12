import commentsModel from '../comments/schema.js';
import createHttpError from 'http-errors';
import blogPostsModel from './schema.js';
import q2m from 'query-to-mongo';

const getAllBlogs = async (req, res, next) => {
	try {
		const querys = q2m(req.query);
		const total = await blogPostsModel.countDocuments(querys.criteria);
		const allBlogs = await blogPostsModel
			.find(querys.criteria)
			.limit(querys.options.limit)
			.skip(querys.options.skip)
			.sort(querys.options.sort)
			.populate({ path: 'comments', select: 'username comments' });
		res.send({
			link: querys.links('/blogpost/blog', total),
			pageTotal: Math.ceil(total / querys.options.limit),
			total,
			allBlogs,
		});
	} catch (error) {
		next(error);
	}
};

const createBlog = async (req, res, next) => {
	try {
		const newBlog = new blogPostsModel(req.body);
		const { _id } = await newBlog.save();
		res.status(200).send(_id);
	} catch (error) {
		next(error);
	}
};

const getBlogById = async (req, res, next) => {
	try {
		const id = req.params.id;
		const user = await blogPostsModel.findById(id);
		if (user) {
			res.send(user);
		}
	} catch (error) {
		next(error);
	}
};

const updateBlog = async (req, res, next) => {
	try {
		const id = req.params.id;
		const updateBlog = await blogPostsModel.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (updateBlog) {
			res.send(updateBlog);
		} else {
			next(createHttpError(404, `Post with id ${id} not found!`));
		}
	} catch (error) {
		next(error);
	}
};

const deleteBlog = async (req, res, next) => {
	try {
		const id = req.params.id;
		const deletepost = await blogPostsModel.findByIdAndDelete(id);
		if (deletepost) {
			res.status(200).send();
		} else {
			next(createHttpError(404, `Post with id ${id} not found!`));
		}
	} catch (error) {
		next(error);
	}
};

const commentPost = async (req, res, next) => {
	try {
		const comment = await commentsModel.findById(req.body._id);
		if (comment) {
			const newcomment = {
				...comment.toObject(),
				commentedAt: new Date(),
			};

			const blogupdate = await blogPostsModel.findByIdAndUpdate(
				req.params.blogId,
				{ $push: { comments: newcomment } },
				{ new: true },
			);

			if (blogupdate) {
				res.send(blogupdate);
			} else {
				next(
					createHttpError(404, `Post with id ${req.params.blogId} not found!`),
				);
			}
		} else {
			next(
				createHttpError(404, `Post with id ${req.params.blogId} not found!`),
			);
		}
	} catch (error) {
		next(error);
	}
};

const commentGetAll = async (req, res, next) => {
	try {
		const post = await blogPostsModel.findById(req.params.blogId);
		if (post) {
			res.send(post.comments);
		} else {
			next(
				createHttpError(404, `Post with id ${req.params.blogId} not found!`),
			);
		}
	} catch (error) {
		next(error);
	}
};

const commentGetByID = async (req, res, next) => {
	try {
		const post = await blogPostsModel.findById(req.params.blogId);
		if (post) {
			const comment = post.comments.find(
				(comment) => comment._id.toString() === req.params.commentid,
			);

			if (comment) {
				res.send(comment);
			} else {
				next(
					createHttpError(
						404,
						`comment with id ${req.params.commentid} not found!`,
					),
				);
			}
		} else {
			next(
				createHttpError(404, `Post with id ${req.params.blogId} not found!`),
			);
		}
	} catch (error) {
		next(error);
	}
};

const commentEdit = async (req, res, next) => {
	try {
		const id = req.params.id;
		const updatecomment = await commentsModel.findByIdAndUpdate(
			id,
			req.params.commentid,
			{
				new: true,
			},
		);
		if (updatecomment) {
			res.send(updatecomment);
		} else {
			next(
				createHttpError(404, `Post with id ${req.params.blogId} not found!`),
			);
		}
	} catch (error) {
		next(error);
	}
};

const commentDelete = async (req, res, next) => {
	try {
		const post = await blogPostsModel.findByIdAndUpdate(
			req.params.blogId,
			{ $pull: { comments: { _id: req.params.commentedAt } } },
			{ new: true },
		);
		if (post) {
			res.send(post);
		} else {
			next(
				createHttpError(404, `Post with id ${req.params.blogId} not found!`),
			);
		}
	} catch (error) {
		next(error);
	}
};

const postendpoint = {
	getAllBlogs,
	createBlog,
	getBlogById,
	updateBlog,
	deleteBlog,
	commentPost,
	commentGetAll,
	commentGetByID,
	commentEdit,
	commentDelete,
};

export default postendpoint;
