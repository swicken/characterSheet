import * as fs from 'fs'
import * as path from 'path'

const modelsDir = path.join(__dirname, '..', 'models')
const routesDir = path.join(__dirname, '..', 'routes')
const indexFile = path.join(modelsDir, 'index.ts')

const removeModel = (modelName: string): void => {
  // Remove the model file
  try {
    fs.unlinkSync(path.join(modelsDir, `${modelName}.ts`))
  } catch (err) {
    console.warn(`Failed to remove ${modelName}.ts. It might not exist.`)
  }

  let lines = fs.readFileSync(indexFile, 'utf8').split('\n')

  lines = lines.filter((line: string) => {
    if (line.includes(`import ${modelName} from './${modelName}';`)) {
      console.log(`Removing import line: ${line}`)
      return false // Filter this line out
    }
    if (line.trim() === `${modelName},`) {
      console.log(`Removing export line: ${line}`)
      return false // Filter this line out
    }
    return true // Keep this line
  })

  fs.writeFileSync(indexFile, lines.join('\n'))

  // Optionally, remove the route file associated with the model
  try {
    fs.unlinkSync(path.join(routesDir, `${modelName.toLowerCase()}.ts`))
  } catch (err) {
    console.warn(`Failed to remove ${modelName.toLowerCase()}.ts route file. It might not exist.`)
  }

  console.log(`${modelName} model removed successfully!`)
}

const modelName = process.argv[2]
if (modelName.length > 0) {
  removeModel(modelName)
} else {
  console.error('Please provide a model name.')
}
