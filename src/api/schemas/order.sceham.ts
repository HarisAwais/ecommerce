import mongoose, { Schema } from 'mongoose';
import { IOrder } from '../interfaces/order.interface';

const orderSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productId: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    },
  ],
  total: {
    type: Number,
    default: 0,
  },
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
});
const OrderModel = mongoose.model<IOrder>('Order', orderSchema);
export default OrderModel;
