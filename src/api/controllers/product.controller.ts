import { Request, Response } from 'express';
import productModel from '../schemas/product.schema';

const createProduct = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const addProduct = new productModel(req.body);
    const createProduct = await addProduct.save();
    if (createProduct) {
      return res.status(400).json({ message: 'Product Added Successfully', data: createProduct });
    } else {
      return res.status(422).json({ error: 'OOPS! Sorry Something went wrong' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'OOPS! Sorry Something went wrong' });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const getProduct = await productModel.find();
    if (getProduct) {
      return res.status(200).json({ data: getProduct });
    } else {
      return res.status(422).json({ error: 'OOPS! Sorry Something went wrong' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'OOPS! Sorry Something went wrong' });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;

    const deleteProduct = await productModel
      .findByIdAndDelete({ _id: productId })
      .lean()
      .exec();
    if (deleteProduct) {
      return res.status(200).json({ message: 'Product deleted successfully' });
    } else {
      return res.status(422).json({ error: 'OOPS! Sorry Something went wrong' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'OOPS! Sorry Something went wrong' });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const updateData = req.body;

    const updateProduct = await productModel
      .findOneAndUpdate({ _id: productId }, { $set: updateData }, { new: true })
      .lean()
      .exec();
    if (updateProduct) {
      return res.status(200).json({ message: 'Product updated successfully' });
    } else {
      return res.status(422).json({ error: 'OOPS! Sorry Something went wrong' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'OOPS! Sorry Something went wrong' });
  }
};

export { createProduct, getAllProduct, deleteProduct, updateProduct };
