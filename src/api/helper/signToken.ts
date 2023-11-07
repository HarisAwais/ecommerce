import jwt from 'jsonwebtoken'
import { sessionString } from '../interfaces/user.interface';

const JWT_SECRET = 'your_secret_key';

export const signToken = (user: sessionString): string => {
  const tokenData = {
    _id: user._id,
    // session:user.session
  };

  const expiresIn = '7d';

  const signedToken = jwt.sign(tokenData, JWT_SECRET, { expiresIn });
  return signedToken;
};
