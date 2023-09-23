import mongoose from 'mongoose'
import path, { dirname } from 'path'
import fs from 'fs'
import connectDB from '../db'
import models from '../models'
import { fileURLToPath } from 'url'

const dirName = dirname(fileURLToPath(import.meta.url))

const initDataPath = path.join(dirName, 'initialData')

const initializeData = async (): Promise<void> => {
  try {
    await connectDB()
    console.log('Connected to DB')
    for (const modelName in models) {
      const Model = models[modelName]

      if (Model.prototype instanceof mongoose.Model) {
        // Check if there's initial data for this model
        const dataFilePath = path.join(initDataPath, `${modelName}.json`)
        console.debug(`Looking for data file at ${dataFilePath}`)

        if (fs.existsSync(dataFilePath)) {
          const initialData = await import(dataFilePath)
          console.log(`Found initial data for ${modelName}`)

          // If the collection is empty, seed the data
          const count = await Model.countDocuments()
          if (count === 0) {
            await Model.insertMany(initialData)
            console.log(`${modelName} initialized.`)
          } else {
            console.log(`${modelName} already has data.`)
          }
        } else {
          console.log(`No data file found for ${modelName}`)
        }
      } else {
        console.log(`${modelName} is not an instance of mongoose.Model`)
      }
    }
  } catch (error) {
    console.error('Error initializing data', error)
  } finally {
    await mongoose.connection.close().catch(console.error)
    console.log('Connection closed')
  }
}

await initializeData().catch(console.error)
