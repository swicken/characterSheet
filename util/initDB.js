const mongoose = require('mongoose');
const connectDB = require('../db');

const Class = require('../models/Class');
const Race = require('../models/Race');
const Alignment = require('../models/Alignment');

// Default data
const classes = [
    { name: 'Warrior', hitDice: 'd10', primaryAbility: 'Strength' },
    // ... other classes
];

const races = [
    { name: 'Elf', speed: 30, size: 'Medium' },
    // ... other races
];

const alignments = [
    { name: 'Neutral Good', description: 'Does the best that a good person can do.' },
    // ... other alignments
];

// Initialize data
const initializeData = async () => {
    await connectDB();
    // Check if data exists
    const classCount = await Class.countDocuments();
    const raceCount = await Race.countDocuments();
    const alignmentCount = await Alignment.countDocuments();

    // If no data, initialize
    if (classCount === 0) {
        await Class.insertMany(classes);
        console.log('Classes initialized.');
    }

    if (raceCount === 0) {
        await Race.insertMany(races);
        console.log('Races initialized.');
    }

    if (alignmentCount === 0) {
        await Alignment.insertMany(alignments);
        console.log('Alignments initialized.');
    }

    mongoose.connection.close();
};

initializeData();
