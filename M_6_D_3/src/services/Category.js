import Tables from '../db/models/index.js';

const { Product, Category } = Tables;

const getAllCategory = async (req, res, next) => {
	try {
		const category = await Category.findAll({ include: Product });
		res.send(category);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const createCategory = async (req, res, next) => {
	try {
		const newcategory = await Category.create(req.body);
		res.send(newcategory);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const getCategoryById = async (req, res, next) => {
	try {
		const category = await Category.findByPk(req.params.id);
		res.send(category);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const updateCategory = async (req, res, next) => {
	try {
		const categoryUpdate = await Category.update(req.body, {
			where: {
				id: req.params.id,
			},
			returning: true,
		});
		res.send(categoryUpdate);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const deleteCategory = async (req, res, next) => {
	try {
		const category = await Category.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.send({ category });
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const routerCategory = {
	getAllCategory,
	createCategory,
	getCategoryById,
	updateCategory,
	deleteCategory,
};

export default routerCategory;
