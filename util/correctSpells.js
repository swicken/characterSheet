const fs = require('fs');
const path = require('path');

// Path to your JSON file
const jsonFilePath = path.join(__dirname, 'initialData/Spells.json');

// Read JSON from file
const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// Modify each object
data.forEach(spell => {
    if (spell.duration && spell.duration.includes('Concentration')) {
        spell.concentration = true;
    } else {
        spell.concentration = false;
    }
});

// Write the updated data back to the file
fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));

console.log('JSON updated successfully!');
