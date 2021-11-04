import Tables from '../db/models/index.js';

const { Product, Review } = Tables;

const getAllReview = async (req, res, next) => {
	try {
		const review = await Review.findAll({ include: Product });
		res.send(review);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const createReview = async (req, res, next) => {
	try {
		const newReview = await Review.create(req.body);
		res.send(newReview);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const getReviewById = async (req, res, next) => {
	try {
		const product = await Review.findByPk(req.params.id);
		res.send(product);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const updateReview = async (req, res, next) => {
	try {
		const reviewUpdate = await Review.update(req.body, {
			where: {
				id: req.params.id,
			},
			returning: true,
		});
		res.send('reviewUpdate');
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const deleteReview = async (req, res, next) => {
	try {
		const review = await Review.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.send({ review });
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

const routerReview = {
	getAllReview,
	createReview,
	getReviewById,
	updateReview,
	deleteReview,
};

export default routerReview;
