import { Request, Response } from 'express';
import OrderModel from '../schemas/order.sceham';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, productId, shippingAddress } = req.body;

    const newOrder = new OrderModel({
      userId,
      productId,
      shippingAddress,
    });
    const createdOrder = await newOrder.save();
    if (createdOrder) {
      return res.status(201).json({ message: 'Order created successfully', data: createdOrder });
    } else {
      res.status(500).json({ error: 'Sorry Something went wrong' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'OOPS! Sorry Something went wrong' });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const products = await OrderModel.find({ userId });

    if (products) {
      return res.status(200).json({ data: products });
    } else {
      return res.status(404).json({
        message: 'No Product Found',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'OOPS! Sorry Something went wrong' });
  }
};
export { createOrder, getAllProduct };

//question jb wo product ka order create kry ga to hum ne quantity b deni
//we already define the already type so what we need define interface
