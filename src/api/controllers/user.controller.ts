import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import  * as UserModel  from '../models/user.model';


const addUser = async(req:Request, res:Response) => {
  try {

    const userFound = await UserModel.getUserByEmail(req.body.email);
    
    if (userFound.status === "SUCCESS") {
      return res.status(409).json({
        message: "EMAIL ALREADY EXISTS",
      });
    }
   
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
   
    const userData = {
      ...req.body,
      password: hashedPassword,
    };

    const saveUser = await UserModel.saveUser(userData);

    if (saveUser.status === "SUCCESS") {
      return res.json({message:"User added successfully"});
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

export default addUser