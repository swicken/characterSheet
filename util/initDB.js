const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Class = require('../models/Class');
const Race = require('../models/Race');
const Alignment = require('../models/Alignment');

dotenv.config();

const { DB_HOST, DB_USER, DB_PASS } = process.env;

const mongoURI = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/characterSheet?authSource=admin`;
console.log(mongoURI);

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB', err));

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
