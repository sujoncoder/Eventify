import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DB = await mongoose.connect(process.env.MONGODB_URI);
    if (DB) {
      console.log("Database connect successfull 😎");
    }
  } catch (error) {
    console.log("Database connection failed ⚠");
  }
};

export default connectDB;
