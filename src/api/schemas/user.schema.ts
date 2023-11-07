// user.model.ts
import mongoose from 'mongoose';
import { CartItem,UserDocument } from '../interfaces/user.interface';

const CartItem = {
  product: mongoose.Types.ObjectId,
  quantity: Number
}
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  session: {
    type: String,
    default: null,
  },
  cart: [CartItem],
});


const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
