import mongoose, { ConnectOptions } from 'mongoose';

mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
      throw new Error('MONGO_URL environment variable is not set');
    }

    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Add other connection options here if needed
    } as ConnectOptions);
    console.log('DB Connected Successfully');
  }catch (error) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)
    return {
      status: "OOPS! Sorry Something went wrong",
      error: message,
    };
  }
};

export default connectDB;
