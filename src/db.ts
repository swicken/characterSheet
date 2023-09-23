import mongoose, { type Mongoose } from 'mongoose'

// Extract properties from .env
const DB_HOST: string = process.env.DB_HOST ?? 'localhost'
const DB_USER: string = process.env.DB_USER ?? 'admin'
const DB_PASS: string = process.env.DB_PASS ?? 'admin'

const mongoURI: string = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/characterSheet?authSource=admin`

let db: Mongoose | null = null

const connectDB = async (): Promise<Mongoose | null> => {
  if (db == null) {
    try {
      db = await mongoose.connect(mongoURI, {})
      console.log('DB connected')
    } catch (error) {
      console.error('Failed to connect to MongoDB', error)
      process.exit(1) // Exit with failure
    }
  }
  return db
}

export default connectDB
