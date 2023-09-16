const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, '..', 'models');
const indexFile = path.join(modelsDir, 'index.js');

const addModel = (modelName) => {
    // Create a basic model file
    const modelContent = `const mongoose = require('mongoose');

const ${modelName}Schema = new mongoose.Schema({
    // Define schema fields here
});

module.exports = mongoose.model('${modelName}', ${modelName}Schema);
`;

    fs.writeFileSync(path.join(modelsDir, `${modelName}.js`), modelContent);

    const importLine = `const ${modelName} = require('./${modelName}');`;
    const exportLine = `    ${modelName},`;

    const lines = fs.readFileSync(indexFile, 'utf8').split('\n');
    const importStartLine = lines.findIndex(line => line.includes('// IMPORTS START')) + 1;
    const exportStartLine = lines.findIndex(line => line.includes('module.exports = {')) + 2;

    // Insert at the appropriate locations
    lines.splice(importStartLine, 0, importLine);
    lines.splice(exportStartLine, 0, exportLine);

    fs.writeFileSync(indexFile, lines.join('\n'));

    console.log(`${modelName} model added successfully!`);
};


const modelName = process.argv[2];
if (modelName) {
    addModel(modelName);
} else {
    console.error('Please provide a model name.');
}
