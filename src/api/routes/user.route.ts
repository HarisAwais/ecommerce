import express from "express";
import * as userController from "../controllers/user.controller";


const userRouter = express.Router();

userRouter.post("/register",userController.addUser)
userRouter.post("/login",userController.loginUser)
export default userRouter;
