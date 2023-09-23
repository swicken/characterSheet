import mongoose, { type Document, type Model, Schema } from 'mongoose'

interface IAlignment extends Document {
  name: string
  description: string
}

const alignmentSchema = new Schema<IAlignment>({
  name: { type: String, required: true },
  description: String
})

const Alignment: Model<IAlignment> = mongoose.model('Alignment', alignmentSchema)

export default Alignment
