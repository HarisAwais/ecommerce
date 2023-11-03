import * as mongoose from 'mongoose';
import { User } from '../interfaces/user.interface';

const user = new mongoose.Schema({
    name:String,
    email: String,
    password: String,
  });

  const userSchema = mongoose.model<User & mongoose.Document>('User', user);

  export default userSchema;