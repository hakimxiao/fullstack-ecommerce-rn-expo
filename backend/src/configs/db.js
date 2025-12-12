import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(ENV.DB_URL);
    console.log(`🚀 Connected to mongoDB: ${connection.connection.host}`);
  } catch (error) {
    console.error("📉 MongoDB Connection Error: ", error);
    process.exit(1);
  }
};
