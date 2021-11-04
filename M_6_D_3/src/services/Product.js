import Tables from '../db/models/index.js';

const { Product, Review, User } = Tables;

const getAllProduct = async (req, res, next) => {
	try {
		const product = await Product.findAll({
			include: { model: Review, include: User  },
		});
		res.send(product);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const createProduct = async (req, res, next) => {
	try {
		const newProduct = await Product.create(req.body);
		res.send(newProduct);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const getProductById = async (req, res, next) => {
	try {
		const product = await Product.findByPk(req.params.id);
		res.send(product);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const updateProduct = async (req, res, next) => {
	try {
		const productUpdate = await Product.update(req.body, {
			where: {
				id: req.params.id,
			},
			returning: true,
		});
		res.send(productUpdate);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const deleteProduct = async (req, res, next) => {
	try {
		const product = await Product.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.send({ product });
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const routerProduct = {
	getAllProduct,
	createProduct,
	getProductById,
	updateProduct,
	deleteProduct,
};

export default routerProduct;
