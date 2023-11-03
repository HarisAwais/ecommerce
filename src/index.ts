import dotenv from "dotenv"
dotenv.config();

import express,{Request,Response} from "express"
import userRouter from "./api/routes/user.route";
import connectDB from "./api/config/connectDb";

const PORT = 5000 || process.env.PORT

const app = express();
app.use(express.json());

app.get("/",(req:Request,res:Response)=>{
  res.json("Hello How are you")
})

connectDB()
app.use(userRouter)

app.listen(PORT,()=>{
  console.log(`Server is running on Pot ${PORT}` )
})

