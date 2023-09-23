import mongoose, { Document, Schema, Model } from 'mongoose';

interface IClass extends Document {
  name: string;
  hitDice: string;
  primaryAbility: string;
  // ... other class-specific fields ...
}

const classSchema: Schema<IClass> = new Schema({
  name: String,
  hitDice: String,
  primaryAbility: String,
  // ... other class-specific fields ...
});

const Class: Model<IClass> = mongoose.model<IClass>('Class', classSchema);

export default Class;
