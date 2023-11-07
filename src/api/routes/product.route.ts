import express from 'express';
import * as productController from '../controllers/product.controller';

const productRouter = express.Router();

productRouter.post('/create-product', productController.createProduct);

productRouter.get('/all-product', productController.getAllProduct);

productRouter.delete('/delete-product/:productId', productController.deleteProduct);

productRouter.put('/update-product/:productId', productController.updateProduct);

export default productRouter;
