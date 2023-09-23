import mongoose, { Document, Model, Schema } from 'mongoose';

interface IAlignment extends Document {
    name: string;
    description: string;
}

const alignmentSchema: Schema = new mongoose.Schema({
    name: String,
    description: String
});

const Alignment: Model<IAlignment> = mongoose.model('Alignment', alignmentSchema);

export default Alignment;
