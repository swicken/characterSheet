const mongoose = require('mongoose');

const SpellsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: [String], // Description can be an array of strings for paragraphs.
        required: true
    },
    level: {
        type: Number,
        required: true,
        min: 0, // 0 for cantrips
        max: 9  // 9 for ninth level spells
    },
    school: {
        type: String,
        required: true,
        enum: ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation']
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
        material: String // This can be the description of the material components or null if none.
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
        enum: ['Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Sorcerer', 'Warlock', 'Wizard']
    }],
    sourceBook: String, // Source book where the spell is found, e.g., "Player's Handbook"
    page: Number // Page number in the source book
});

module.exports = mongoose.model('Spells', SpellsSchema);
