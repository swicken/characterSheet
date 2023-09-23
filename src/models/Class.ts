import mongoose, { type Document, Schema, type Model } from 'mongoose'

interface IClass extends Document {
  name: string
  hitDice: string
  primaryAbility: string
  // ... other class-specific fields ...
}

const classSchema = new Schema<IClass>({
  name: String,
  hitDice: String,
  primaryAbility: String
  // ... other class-specific fields ...
})

const Class: Model<IClass> = mongoose.model<IClass>('Class', classSchema)

export default Class
