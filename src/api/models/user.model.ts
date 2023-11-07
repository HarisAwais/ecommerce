import { UserData, UserDocument, sessionString } from '../interfaces/user.interface';
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
): Promise<{ status: string; data?: UserData; error?: string }> => {
  try {
    const user = new userSchema({
      ...userData,
    });

    const savedUser = await user.save();

    if (savedUser) {
      const data:UserData  = {
        _id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        password: savedUser.password,
        session:null
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

const setSessionString = async (
  _id: string,
  session: string | null = null
):Promise <{ status: string; data?: sessionString; error?: string }> => {
  try {
    const updatedUser = await userSchema.findByIdAndUpdate(
      _id,
      { session },
      { new: true }
    );

    if (!updatedUser) {
      return {
        status: 'FAILED',
        error: 'User not found',
      };
    }

    return {
      status: 'SUCCESS',
      data: updatedUser,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      status: 'FAILED',
      error: message,
    };
  }
};

const findUserById = async (_id:string): Promise<{ status: string; data?: UserDocument; error?: string }> => {
  try {
    const user = await userSchema.findById(_id).lean().exec();
    if (user) {
      return {
        status: "SUCCESS",
        data: user 
      };
    } else {
      return {
        status: "FAILED",
      };
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      status: 'FAILED',
      error: message,
    };
  }
};

export { getUserByEmail, saveUser,setSessionString,findUserById };
