import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const routes: Record<string, any> = {}
const dirName = dirname(fileURLToPath(import.meta.url))

// Synchronously read all files in the current directory
const files = fs.readdirSync(dirName)

for (const file of files) {
  if (file === 'index.ts' || path.extname(file) !== '.ts') continue

  const routeName = path.basename(file, '.ts')
  routes[routeName] = (await import(`./${file}`)).default
}

// BEGIN: be15d9bcejpp
export default routes
