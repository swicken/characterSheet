const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: String,
    hitDice: String,
    primaryAbility: String,
    // ... other class-specific fields ...
});

module.exports = mongoose.model('Class', classSchema);
