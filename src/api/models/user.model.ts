import userSchema from "../schemas/user.schema";

interface UserData {
  name: string;
  email: string;
  password: string;
}

const getUserByEmail = async (email: string) => {
  try {
    const user = await userSchema.findOne({ email: email }).lean().exec();
    if (user) {
      return {
        status: "SUCCESS",
        data: user,
      };
    } else {
      return {
        status: "FAILED",
      };
    }
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    return {
      status: "OOPS! Sorry Something went wrong",
      error: message,
    };
  }
};

const saveUser = async (userData: UserData): Promise<{ status: string; data?: any; error?: string }> => {
  try {
    const user = new userSchema({
      ...userData,
    });

    const savedUser = await user.save();

    if (savedUser) {
      return {
        status: "SUCCESS",
        data: savedUser,
      };
    } else {
      return {
        status: "FAILED",
      };
    }
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    return {
      status: "OOPS! Sorry Something went wrong",
      error: message,
    };
  }
};

export { getUserByEmail, saveUser };
