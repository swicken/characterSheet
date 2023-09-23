import mongoose from 'mongoose';

const {modelName}Schema = new mongoose.Schema({
    // Define schema fields here
});

export default mongoose.model('{modelName}', {modelName}Schema);
