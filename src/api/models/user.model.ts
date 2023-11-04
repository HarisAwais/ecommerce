import { MyData, UserData } from '../interface/user.interface';
import userSchema from '../schemas/user.schema';

const getUserByEmail = async (email: string) => {
  try {
    const user = await userSchema
      .findOne({ email })
      .lean()
      .exec();
    if (user) {
      return {
        status: 'SUCCESS',
        data: user,
      };
    } else {
      return {
        status: 'FAILED',
      };
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      status: 'OOPS! Sorry, something went wrong',
      error: message,
    };
  }
};

const saveUser = async (
  userData: UserData
): Promise<{ status: string; data?: MyData; error?: string }> => {
  try {
    const user = new userSchema({
      ...userData,
    });

    const savedUser = await user.save();

    if (savedUser) {
      const data: MyData = {
        _id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        password: savedUser.password,
      };

      return {
        status: 'SUCCESS',
        data: data,
      };
    } else {
      return {
        status: 'FAILED',
      };
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      status: 'OOPS! Sorry, something went wrong',
      error: message,
    };
  }
};

export { getUserByEmail, saveUser };
