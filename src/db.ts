import mongoose, { Mongoose } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Extract properties from .env
const DB_HOST: string = process.env.DB_HOST!;
const DB_USER: string = process.env.DB_USER!;
const DB_PASS: string = process.env.DB_PASS!;

const mongoURI: string = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/characterSheet?authSource=admin`;

let db: Mongoose | null = null;

const connectDB = async (): Promise<Mongoose | null> => {
  if (!db) {
    try {
      db = await mongoose.connect(mongoURI, {});
      console.log('DB connected');
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
      process.exit(1); // Exit with failure
    }
  }
  return db;
};

export default connectDB;
