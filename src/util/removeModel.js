const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, '..', 'models');
const routesDir = path.join(__dirname, '..', 'routes');
const indexFile = path.join(modelsDir, 'index.js');

const removeModel = (modelName) => {
    // Remove the model file
    try {
        fs.unlinkSync(path.join(modelsDir, `${modelName}.js`));
    } catch (err) {
        console.warn(`Failed to remove ${modelName}.js. It might not exist.`);
    }

    let lines = fs.readFileSync(indexFile, 'utf8').split('\n');

    lines = lines.filter(line => {
        if (line.includes(`require('./${modelName}')`)) {
            console.log(`Removing import line: ${line}`);
            return false; // Filter this line out
        }
        if (line.trim() === `${modelName},`) {
            console.log(`Removing export line: ${line}`);
            return false; // Filter this line out
        }
        return true; // Keep this line
    });

    fs.writeFileSync(indexFile, lines.join('\n'));

    // Optionally, remove the route file associated with the model
    try {
        fs.unlinkSync(path.join(routesDir, `${modelName.toLowerCase()}.js`));
    } catch (err) {
        console.warn(`Failed to remove ${modelName.toLowerCase()}.js route file. It might not exist.`);
    }

    console.log(`${modelName} model removed successfully!`);
};



const modelName = process.argv[2];
if (modelName) {
    removeModel(modelName);
} else {
    console.error('Please provide a model name.');
}
