import * as fs from 'fs';
import * as path from 'path';

const modelsDir = path.join(__dirname, '..', 'models');
const routesDir = path.join(__dirname, '..', 'routes');
const indexFile = path.join(modelsDir, 'index.ts');

const addModel = (modelName: string) => {
    // Create a basic model file
    const modelContent = `import mongoose from 'mongoose';

const ${modelName}Schema = new mongoose.Schema({
    // Define schema fields here
});

export default mongoose.model('${modelName}', ${modelName}Schema);
`;

    fs.writeFileSync(path.join(modelsDir, `${modelName}.ts`), modelContent);

    const importLine = `import ${modelName} from './${modelName}';`;

    const lines = fs.readFileSync(indexFile, 'utf8').split('\n');
    const importEndLine = lines.findIndex(line => line.includes('// Imports End'));

    // Insert import at the appropriate location
    lines.splice(importEndLine, 0, importLine);
    
    const modelsExportLineIndex = lines.findIndex(line => line.includes('export const models: Models = {'));
    let modelExportInserted = false;
    for(let i = modelsExportLineIndex + 1; i < lines.length; i++) {
        if(lines[i].trim() === '};') {
            lines.splice(i, 0, `    ${modelName},`);
            modelExportInserted = true;
            break;
        }
    }

    if(!modelExportInserted) {
        console.error('Failed to insert model into export object. Please add manually.');
    }

    fs.writeFileSync(indexFile, lines.join('\n'));

    console.log(`${modelName} model added successfully!`);

    // Create a new routes file
    const routesContent = `
import express from 'express';
import ${modelName} from '../models/${modelName}';

const router = express.Router();

// GET all route
router.get('/${modelName.toLowerCase()}', (req, res) => {
    // TODO: Implement the GET all logic
});

// GET by ID route
router.get('/${modelName.toLowerCase()}/:id', (req, res) => {
    // TODO: Implement the GET by ID logic
});

// POST route
router.post('/${modelName.toLowerCase()}', (req, res) => {
    // TODO: Implement the POST logic
});

// PUT route
router.put('/${modelName.toLowerCase()}/:id', (req, res) => {
    // TODO: Implement the PUT logic
});

// DELETE route
router.delete('/${modelName.toLowerCase()}/:id', (req, res) => {
    // TODO: Implement the DELETE logic
});

export default router;
`;

    fs.writeFileSync(path.join(routesDir, `${modelName.toLowerCase()}.ts`), routesContent);

    console.log(`${modelName} routes added successfully!`);
};

const modelName = process.argv[2];
if (modelName) {
    addModel(modelName);
} else {
    console.error('Please provide a model name.');
}
