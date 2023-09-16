const mongoose = require('mongoose');
const connectDB = require('../db');
const path = require('path');
const fs = require('fs');

const models = require('../models');

const initDataPath = path.join(__dirname, 'initialData');

const initializeData = async () => {
    await connectDB();

    for (let modelName in models) {
        const Model = models[modelName];

        // Check if there's initial data for this model
        const dataFilePath = path.join(initDataPath, `${modelName}.json`);
        if (fs.existsSync(dataFilePath)) {
            const initialData = require(dataFilePath);

            // If the collection is empty, seed the data
            const count = await Model.countDocuments();
            if (count === 0) {
                await Model.insertMany(initialData);
                console.log(`${modelName} initialized.`);
            } else {
                console.log(`${modelName} already has data.`);
            }
        }
    }

    mongoose.connection.close();
};

initializeData();
