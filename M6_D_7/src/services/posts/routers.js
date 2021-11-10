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
			.sort(querys.options.sort);
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
		const comment = await commentsModel.findById(req.body.commentid, {
			_id: 0,
		});
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

/*
usersRouter.post('/:userId/purchaseHistory', async (req, res, next) => {
	try {
		const purchasedBook = await BookModel.findById(req.body.bookId, { _id: 0 });
		if (purchasedBook) {
			const bookToInsert = {
				...purchasedBook.toObject(),
				purchaseDate: new Date(),
			};

			const updatedUser = await UserModel.findByIdAndUpdate(
				req.params.userId, // WHO we want to modify
				{ $push: { purchaseHistory: bookToInsert } },
				// HOW we want to modify the specified user
				{ new: true }, // OPTIONS
			);
			if (updatedUser) {
				res.send(updatedUser);
			} else {
				next(
					createHttpError(404, `User with id ${req.params.userId} not found!`),
				);
			}
		} else {
			next(createHttpError(404, `Book with id ${req.body.bookId} not found!`));
		}
	} catch (error) {
		next(error);
	}
});
*/
const postendpoint = {
	getAllBlogs,
	createBlog,
	getBlogById,
	updateBlog,
	deleteBlog,
};

export default postendpoint;
