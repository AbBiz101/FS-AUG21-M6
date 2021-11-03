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

router.route('/review').post(createReview).get(getAllReview);

router.route('/product').get(getAllProduct).post(createProduct);

router
	.route('/review/:id')
	.put(updateReview)
	.get(getReviewById)
	.delete(deleteReview);

router
	.route('/product/:id')
	.put(updateProduct)
	.get(getProductById)
	.delete(deleteProduct);

export default router;
