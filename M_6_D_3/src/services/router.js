import multer from 'multer';
import express from 'express';
import routerUser from './User.js';
import routerReview from './Review.js';
import routerProduct from './Product.js';
import Tables from '../db/models/index.js';
import routerCategory from './Category.js';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

const { Product } = Tables;

const cloudinaryStorage = new CloudinaryStorage({
	cloudinary,
	params: {
		folder: 'New-Amazon ',
	},
});

const router = express.Router();

const { getAllUser, createUser, getUserById, updateUser, deleteUser } =
	routerUser;

const {
	getAllCategory,
	createCategory,
	getCategoryById,
	updateCategory,
	deleteCategory,
} = routerCategory;

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

router.route('/user').post(createUser).get(getAllUser);
router.route('/review').post(createReview).get(getAllReview);
router.route('/product').post(createProduct).get(getAllProduct);
router.route('/category').post(createCategory).get(getAllCategory);
router.route('/user/:id').put(updateUser).get(getUserById).delete(deleteUser);

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

router
	.route('/category/:id')
	.put(updateCategory)
	.get(getCategoryById)
	.delete(deleteCategory);

router.put(
	'/:id/cover',
	multer({ storage: cloudinaryStorage }).single('image'),
	async (req, res, next) => {
		try {
			const productUpdate = await Product.update(req.file.path, {
				image: req.file.path,
				where: {
					id: req.params.id,
				},
				returning: true,
			});
			res.send('ok');
		} catch (error) {
			console.log(error);
			res.status(400).send(error.message);
		}
	},
);

export default router;
