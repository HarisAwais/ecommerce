import express from 'express';
import * as userController from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.post('/register', userController.addUser);
userRouter.post('/login', userController.loginUser);
userRouter.post('/cart/:userId', userController.addProducttoCart);
userRouter.get('/get-item', userController.getAllCartProduct);
userRouter.delete('/remove-cart/:itemId', userController.removeProductFromCart);
export default userRouter;
