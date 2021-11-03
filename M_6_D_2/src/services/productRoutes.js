import { Router } from 'express';
import productHandler from './ProductsHandler.js';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import pool from '../db/pool.js';

const cloudinaryStorage = new CloudinaryStorage({
	cloudinary,
	params: {
		folder: 'Amazon Products',
	},
});

const amazonProduct = Router();

amazonProduct
	.route('/')
	.get(productHandler.getAllProducts)
	.post(productHandler.createProduct);

amazonProduct
	.route('/:id')
	.get(productHandler.getProductsbyID)
	.put(productHandler.updateProduct)
	.delete(productHandler.deleteProduct);

amazonProduct.put(
	'/:id/cover',
	multer({ storage: cloudinaryStorage }).single('product'),
	async (req, res, next) => {
		try {
			const { image_url } = req.body;
			const data = await pool.query(
				'UPDATE product SET image_url = $1 WHERE id=$2 RETURNING',
				[req.file.path, req.params.id],
			);
			console.log(req.file.path)
			res.status(204).send('Product imgae added to database.');
		} catch (error) {
			res.status(400).send(error.message);
		}
	},
);

export default amazonProduct;

/*
Define all the routers wi need in this file.
To make it cleaner wen can define the 2nd param as a function in other file and import it here. 
getAllProducts= (req,res,next)..... bla bla stuff will be defined in other file.

let's say we have   abc.get('/table/product/tv',(req,res.....))  abc.put('/table/product/tv',(req,res.....)) 
abc.put('/table/product/handy',(req,res.....)) abc.post('/table/product/toy',(req,res.....)) 
we can take the common part from the rout and use nested route as follow

abc.route('/table/product/tv')
.get( (req,res.....))
.put((req,res.....))

or

abc.route('/table/product')
						.get('/tv', (req,res.....))
						.put('/tv', (req,res.....))
						.put('/handy', (req,res.....))
						.post('/toy', (req,res.....))


*/
