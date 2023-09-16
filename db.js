const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
// Extract properties from .env
const { DB_HOST, DB_USER, DB_PASS } = process.env;

const mongoURI = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/characterSheet?authSource=admin`;

let db = null;

const connectDB = async () => {
  if (!db) {
    try {
      db = await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('DB connected');
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
      process.exit(1); // Exit with failure
    }
  }
  return db;
};

module.exports = connectDB;
