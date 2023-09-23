import connectDB from './db.js'
import app from './app.js'
import dotenv from 'dotenv'

dotenv.config()

const startServer = async (): Promise<void> => {
  await connectDB()
  const PORT: number = Number(process.env.PORT) ?? 5000
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
  })
}

// If you want to start the server when this file is run, then add the following:
try {
  await startServer()
} catch (error) {
  console.error('Error starting server:', error)
}
