const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
    name: String,
    speed: Number,
    size: String,
    // ... other race-specific fields ...
});

module.exports = mongoose.model('Race', raceSchema);
