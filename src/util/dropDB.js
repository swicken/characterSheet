const { mongoose } = require('mongoose');
const connectDB = require('../db');
const models = require('../models');



const dropCollections = async () => {
    await connectDB();
    for (const collection in mongoose.connection.collections) {
        try {
            await mongoose.connection.collections[collection].drop();
            console.log(`Dropped ${collection} collection`);
        } catch (error) {
            console.log(`Error dropping ${collection} collection:`, error);
        }
    }
    mongoose.connection.close();
};

dropCollections();