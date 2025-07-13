import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected Syccessfully!");
  } catch (error) {
    console.error("error in connectiong to database", error);
    process.exit(1);
  }
};
