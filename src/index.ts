import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import userRouter from './api/routes/user.route';
import connectDB from './api/config/connectDb';
import orderRouter from './api/routes/order.route';
import productRouter from './api/routes/product.route';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

const PORT = 5000 || process.env.PORT;

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req: Request, res: Response) => {
  res.json('Hello How are you');
});

connectDB();
app.use(userRouter);
app.use(orderRouter);
app.use(productRouter);
app.listen(PORT, () => {
  console.log(`Server is running on Pot ${PORT}`);
});
