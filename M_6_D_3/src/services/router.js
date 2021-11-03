import express from 'express';
import routerProduct from './Product.js';
import routerReview from './Review.js';

const router = express.Router();

const {
	getAllReview,
	createReview,
	getReviewById,
	updateReview,
	deleteReview,
} = routerReview;
const {
	getAllProduct,
	createProduct,
	getProductById,
	updateProduct,
	deleteProduct,
} = routerProduct;

router
	.route('/')
	.post(createReview)
	.get(getAllReview)
	.get(getAllProduct)
	.post(createProduct);

router
	.route('/:id')
	.put(updateReview)
	.put(updateProduct)
	.get(getReviewById)
	.get(getProductById)
	.delete(deleteReview)
	.delete(deleteProduct);

export default router;
