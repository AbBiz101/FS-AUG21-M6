import { Router } from 'express';
import productHandler from './ProductsHandler';

const amazonProduct = Router();

amazonProduct.get('/', productHandler.getAllProducts);
amazonProduct.post('/', productHandler.createProduct);
amazonProduct
	.route('/:id')
	.get(productHandler.getProductsbyID)
	.put(productHandler.updateProduct)
	.delete(productHandler.deleteProduct);

export default amazonProduct;
