import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import * as UserModel from '../models/user.model';

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
      return res.status(500).json({
        message: 'SORRY: Something went wrong',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'SORRY: Something went wrong',
    });
  }
};

// const loginUser = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const userFound = await UserModel.getUserByEmail(email);

//     if (userFound.status !== 'SUCCESS') {
//       return res.json({
//         message: 'Invalid User',
//       });
//     }

//     if (userFound.data && typeof userFound.data.password === 'string') {
//       const isMatch = await bcrypt.compare(password, userFound.data.password);

//       if (isMatch) {
//         const signedToken = await signToken(is)

//         return res.json({ message: 'Login Successfully' });
//       } else {
//         return res.json({ message: 'OOPS! Something went wrong' });
//       }
//     } else {
//       res.json({
//         message: 'Invalid User',
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       message: 'SORRY: Something went wrong',
//     });
//   }
// };

export { addUser };
