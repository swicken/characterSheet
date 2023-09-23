import express from 'express'

const router = express.Router()

// GET all route
router.get('/{modelNameLowerCase}', (req, res) => {
  // TODO: Implement the GET all logic
})

// GET by ID route
router.get('/{modelNameLowerCase}/:id', (req, res) => {
  // TODO: Implement the GET by ID logic
})

// POST route
router.post('/{modelNameLowerCase}', (req, res) => {
  // TODO: Implement the POST logic
})

// PUT route
router.put('/{modelNameLowerCase}/:id', (req, res) => {
  // TODO: Implement the PUT logic
})

// DELETE route
router.delete('/{modelNameLowerCase}/:id', (req, res) => {
  // TODO: Implement the DELETE logic
})

export default router
