import mongoose from 'mongoose'
import connectDB from '../db'

const dropCollections = async (): Promise<void> => {
  await connectDB()

  console.log('Connected to Database:', mongoose.connection.db.databaseName)

  const collections = await mongoose.connection.db.listCollections().toArray()
  const collectionNames = collections.map(c => c.name)

  console.log('Collections:', collectionNames) // Log the collections

  if (collectionNames.length === 0) {
    console.log('No collections found in the database.')
    await mongoose.connection.close().catch(console.error)
    return
  }

  for (const collectionName of collectionNames) {
    try {
      await mongoose.connection.db.dropCollection(collectionName)
      console.log(`Dropped ${collectionName} collection`)
    } catch (error) {
      console.error(`Error dropping ${collectionName} collection:`, error)
    }
  }

  await mongoose.connection.close().catch(console.error)
}

await dropCollections().catch(console.error)
