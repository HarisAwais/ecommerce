// cartItem.interface.ts
import mongoose from 'mongoose';

export interface CartItem {
  product: mongoose.Types.ObjectId;
  quantity: number;
}
  
export interface UserDocument extends Document {
    _id:string;
    name: string;
    email: string;
    password: string; 
    session: string | null;
    cart: CartItem[];
  }
  export interface UserData{
    _id:string;
    name: string;
    email: string;
    password: string;
    session: string | null;
  }

  
  export interface sessionString {
    _id:string;
    session: string | null;
  }

  export interface JwtPayload {
    _id: string;
    session:string
  }