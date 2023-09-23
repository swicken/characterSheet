import express, { type Express } from 'express'
import bodyParser from 'body-parser'
import routes from './routes/index.js'

const app: Express = express()
// Middleware
app.use(bodyParser.json())

// Dynamically use imported routes
for (const [routeName, router] of Object.entries(routes)) {
  console.debug('Adding route: ' + routeName)
  app.use(`/${routeName}`, router)
}

export default app
