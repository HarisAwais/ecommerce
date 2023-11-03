import express from "express";
import addUser from "../controllers/user.controller";


const userRouter = express.Router();

userRouter.post("/register",addUser)

export default userRouter;
