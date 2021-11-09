import StriveBlogPostModel from './schema.js';

const getAllBlogs = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};

const createBlog = async (req, res, next) => {
	try {
		const newBlog = new StriveBlogPostModel(req.body);
		const { _id } = await newBlog.save();
		res.status(200).send('new post created');
	} catch (error) {
		next(error);
	}
};

const getBlogById = async (req, res, next) => {
	try {
		const id = req.params.id;
		const user = await StriveBlogPostModel.findById(id);
		if (user) {
			res.send(user);
		}
	} catch (error) {
		next(error);
	}
};

const updateBlog = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};

const deleteBlog = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};

const endpointFunction = {
	getAllBlogs,
	createBlog,
	getBlogById,
	updateBlog,
	deleteBlog,
};

export default endpointFunction;
