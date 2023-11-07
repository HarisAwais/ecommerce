import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import * as UserModel from '../models/user.model';
import { generateSession } from '../helper/generateSession';
import { signToken } from '../helper/signToken';
import userSchema from '../schemas/user.schema';

const addUser = async (req: Request, res: Response) => {
  try {
    const userFound = await UserModel.getUserByEmail(req.body.email);

    if (userFound.status === 'SUCCESS') {
      return res.status(409).json({
        message: 'EMAIL ALREADY EXISTS',
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const userData = {
      ...req.body,
      password: hashedPassword,
    };

    const saveUser = await UserModel.saveUser(userData);

    if (saveUser.status === 'SUCCESS') {
      return res.json({ message: 'User added successfully' });
    } else {
      return res.status(400).json({
        message: 'Bad Request',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'SORRY: Something went wrong',
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userFound = await UserModel.getUserByEmail(email);

    if (userFound.status === 'FAILED') {
      return res.status(409).json({
        message: 'Invalid User',
      });
    }

    const storedPassword = userFound.data!.password;

    const isMatch = await bcrypt.compare(password, storedPassword);

    if (isMatch) {
      const sessionString = generateSession();

      const updatedUser = await UserModel.setSessionString(userFound.data!._id, sessionString);
      if (updatedUser.status === 'SUCCESS' && updatedUser.data) {
        const signedToken = await signToken(updatedUser.data);

        return res.status(200).json({
          message: 'Login Successfully',
          token: signedToken,
        });
      } else {
        return res.status(500).json({
          message: 'OOPS! Something went wrong',
          error: updatedUser.error,
        });
      }
    } else {
      return res.status(401).json({
        message: 'Invalid Password',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'SORRY: Something went wrong',
    });
  }
};

const addProducttoCart = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const { product, quantity } = req.body;

    const addCart: any = await userSchema.findByIdAndUpdate(
      userId,
      {
        $push: { cart: { product, quantity } },
      },
      { new: true }
    );
    if (addCart) {
      return res.status(201).json({ status: 'SUCCESS', data: addCart.cart });
    } else {
      return res.status(400).json({ error: 'Bad request, invalid product data' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'SORRY: Something went wrong',
    });
  }
};

const getAllCartProduct = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const user = await userSchema.findById(userId);

    if (!user) {
      return res.status(404).send({
        message: 'User Not Exist!',
      });
    }

    if (user) {
      return res.json({
        data: user.cart,
      });
    } else {
      return res.status(404).json({ message: 'No Product found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'SORRY: Something went wrong',
    });
  }
};

const removeProductFromCart = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;

    const itemId = req.params.itemId;

    const updatedUser = await userSchema.findByIdAndUpdate(
      userId,
      {
        $pull: { cart: { _id: itemId } },
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    return res.status(200).json({ message: 'Cart item deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'SORRY: Something went wrong',
    });
  }
};

export { addUser, loginUser, addProducttoCart, getAllCartProduct, removeProductFromCart };
