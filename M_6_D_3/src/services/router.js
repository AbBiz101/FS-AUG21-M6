import express from 'express';
import routerProduct from './Product.js';
import routerReview from './Review.js';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import Tables from '../db/models/index.js';

const { Product, Review } = Tables;
const cloudinaryStorage = new CloudinaryStorage({
	cloudinary,
	params: {
		folder: 'Amazon stor',
	},
});

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

router.put(
	'/:id/cover',
	multer({ storage: cloudinaryStorage }).single('image'),
	async (req, res, next) => {
		try {
			const productUpdate = await Product.update(req.file.path, {
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
	},
);

export default router;
