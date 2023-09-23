import * as fs from 'fs'
import * as path from 'path'

const modelsDir = path.join(__dirname, '..', 'models')
const routesDir = path.join(__dirname, '..', 'routes')

const addModel = (modelName: string): void => {
  // Read model template and replace placeholder
  const modelTemplatePath = path.join(__dirname, 'modelTemplate.ts')
  let modelContent = fs.readFileSync(modelTemplatePath, 'utf8')
  modelContent = modelContent.replace(/{modelName}/g, modelName)

  fs.writeFileSync(path.join(modelsDir, `${modelName}.ts`), modelContent)
  console.log(`${modelName} model added successfully!`)

  // Read route template and replace placeholders
  const routeTemplatePath = path.join(__dirname, 'routeTemplate.ts')
  let routeContent = fs.readFileSync(routeTemplatePath, 'utf8')
  routeContent = routeContent
    .replace(/{modelName}/g, modelName)
    .replace(/{modelNameLowerCase}/g, modelName.toLowerCase())

  fs.writeFileSync(path.join(routesDir, `${modelName.toLowerCase()}.ts`), routeContent)
  console.log(`${modelName} routes added successfully!`)
}

const modelName = process.argv[2]
if (modelName.length > 0) {
  addModel(modelName)
} else {
  console.error('Please provide a model name.')
}
