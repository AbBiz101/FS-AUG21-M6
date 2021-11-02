import { Router } from 'express';
import productHandler from './ProductsHandler.js';

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
