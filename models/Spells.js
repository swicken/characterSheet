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
    higherLevel: String, // Higher level description, if any,
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
        raw: String, // This is the raw value of the components field, e.g., "V, S, M (a tiny strip of white cloth)"
        material: Boolean,
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
        enum: ['bard', 'cleric', 'druid', 'paladin', 'ranger', 'sorcerer', 'warlock', 'wizard']
    }],
    sourceBook: String, // Source book where the spell is found, e.g., "Player's Handbook"
    page: Number // Page number in the source book
});

module.exports = mongoose.model('Spells', SpellsSchema);
