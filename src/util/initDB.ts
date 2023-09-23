import mongoose from 'mongoose';
import path from 'path';
import fs from 'fs';
import connectDB from '../db';
import { models } from '../models';

const initDataPath = path.join(__dirname, 'initialData');

const initializeData = async (): Promise<void> => {
  await connectDB();

  for (let modelName in models) {
    const Model = models[modelName];

    if (Model instanceof mongoose.Model) {
      // Check if there's initial data for this model
      const dataFilePath = path.join(initDataPath, `${modelName}.json`);
      if (fs.existsSync(dataFilePath)) {
        const initialData = await import(dataFilePath);

        // If the collection is empty, seed the data
        const count = await Model.countDocuments();
        if (count === 0) {
          await Model.insertMany(initialData.default || initialData);
          console.log(`${modelName} initialized.`);
        } else {
          console.log(`${modelName} already has data.`);
        }
      }
    }
  }

  mongoose.connection.close();
};

initializeData();
