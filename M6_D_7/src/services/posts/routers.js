import blogPostsModel from './schema.js';
import createHttpError from 'http-errors';

const getAllBlogs = async (req, res, next) => {
	try {
		const allBlogs = await blogPostsModel.find();
		res.send(allBlogs);
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
		
	} catch (error) {
		next(error);
	}
}





const postendpoint = {
	getAllBlogs,
	createBlog,
	getBlogById,
	updateBlog,
	deleteBlog,
};

export default postendpoint;
