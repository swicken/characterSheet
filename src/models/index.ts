import fs from 'fs'
import path, { dirname } from 'path'
import { type Model } from 'mongoose'
import { fileURLToPath } from 'url'

// Define an interface with a string index signature
type Models = Record<string, Model<any>>

const models: Models = {}

const dirName = dirname(fileURLToPath(import.meta.url))

// Read all files in the current directory
const files = fs.readdirSync(dirName)

for (const file of files) {
  if (file !== 'index.ts' && path.extname(file) === '.ts') {
    const modelName = path.basename(file, '.ts')
    models[modelName] = (await import(`./${file}`)).default
  }
}

export default models
