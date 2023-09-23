import mongoose, { type Document, Schema, type Model } from 'mongoose'

interface IRace extends Document {
  name: string
  speed: number
  size: string
  // ... other race-specific fields ...
}

const raceSchema = new Schema<IRace>({
  name: String,
  speed: Number,
  size: String
  // ... other race-specific fields ...
})

const Race: Model<IRace> = mongoose.model<IRace>('Race', raceSchema)

export default Race
