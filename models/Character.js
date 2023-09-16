const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
        required: true
    },
    race: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Race',
        required: true
    },
    alignment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Alignment'
    },
    level: {
        type: Number,
        default: 1
    },
    background: String,
    experiencePoints: {
        type: Number,
        default: 0
    },
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
    spells: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spell'
    }],
    equipment: [{
        name: String,
        type: String,
        weight: Number
    }],
    gold: Number,
    backstory: String,
    featsAndTraits: [String],
    languages: [String]
    // ... Additional fields, as needed.
});

module.exports = mongoose.model('Character', characterSchema);
