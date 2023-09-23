import mongoose, { type Document, Schema, type Model } from 'mongoose'

interface ISpell extends Document {
  name: string
  description: string[]
  level: number
  higherLevel?: string
  school: string
  castingTime: string
  range: string
  components: {
    verbal?: boolean
    somatic?: boolean
    raw: string
    material?: boolean | string
  }
  duration: string
  concentration?: boolean
  ritual?: boolean
  classes: string[]
  sourceBook?: string
  page?: number
}

const SpellsSchema = new Schema<ISpell>({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: [String],
    required: true
  },
  level: {
    type: Number,
    required: true,
    min: 0,
    max: 9
  },
  higherLevel: String,
  school: {
    type: String,
    required: true,
    enum: ['abjuration', 'conjuration', 'divination', 'enchantment', 'evocation', 'illusion', 'necromancy', 'transmutation']
  },
  castingTime: {
    type: String,
    required: true
  },
  range: {
    type: String,
    required: true
  },
  components: {
    verbal: Boolean,
    somatic: Boolean,
    raw: String,
    material: Schema.Types.Mixed
  },
  duration: {
    type: String,
    required: true
  },
  concentration: {
    type: Boolean,
    default: false
  },
  ritual: {
    type: Boolean,
    default: false
  },
  classes: [{
    type: String,
    enum: ['bard', 'cleric', 'druid', 'paladin', 'ranger', 'sorcerer', 'warlock', 'wizard']
  }],
  sourceBook: String,
  page: Number
})

const Spell: Model<ISpell> = mongoose.model<ISpell>('Spell', SpellsSchema)

export default Spell
