import express from 'express';
import * as orderController from '../controllers/order.controller';

const orderRouter = express.Router();

orderRouter.post('/create-order', orderController.createOrder);

orderRouter.get('/all-order/:userId', orderController.getAllProduct);

export default orderRouter;
