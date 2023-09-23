import mongoose, { type Document, Schema, type Model, type Types } from 'mongoose'

interface IStat {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}

interface IHitPoints {
  total: number
  current: number
  temporary: number
}

interface IEquipment {
  name: string
  type: string
  weight: number
}

interface ICharacter extends Document {
  name: string
  class: Types.ObjectId
  race: Types.ObjectId
  alignment: Types.ObjectId
  level: number
  background: string
  experiencePoints: number
  stats: IStat
  hitPoints: IHitPoints
  proficiencies: {
    weapons: string[]
    armor: string[]
    skills: string[]
    savingThrows: string[]
    tools: string[]
  }
  spells: Types.ObjectId[]
  equipment: IEquipment[]
  gold: number
  backstory: string
  featsAndTraits: string[]
  languages: string[]
  // ... Additional fields, as needed.
}

const characterSchema = new Schema<ICharacter>({
  name: { type: String, required: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  race: { type: mongoose.Schema.Types.ObjectId, ref: 'Race', required: true },
  alignment: { type: mongoose.Schema.Types.ObjectId, ref: 'Alignment' },
  level: { type: Number, default: 1 },
  background: String,
  experiencePoints: { type: Number, default: 0 },
  stats: {
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number
  },
  hitPoints: {
    total: Number,
    current: Number,
    temporary: Number
  },
  proficiencies: {
    weapons: [String],
    armor: [String],
    skills: [String],
    savingThrows: [String],
    tools: [String]
  },
  spells: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Spell' }],
  equipment: [{ name: String, type: String, weight: Number }],
  gold: Number,
  backstory: String,
  featsAndTraits: [String],
  languages: [String]
  // ... Additional fields, as needed.
})

const Character: Model<ICharacter> = mongoose.model<ICharacter>('Character', characterSchema)

export default Character
