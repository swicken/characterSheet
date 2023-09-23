import express, { type Request, type Response, type Router } from 'express'

const router: Router = express.Router()

// GET all route
router.get('/spells', (req: Request, res: Response) => {
  // TODO: Implement the GET all logic
})

// GET by ID route
router.get('/spells/:id', (req: Request, res: Response) => {
  // TODO: Implement the GET by ID logic
})

// POST route
router.post('/spells', (req: Request, res: Response) => {
  // TODO: Implement the POST logic
})

// PUT route
router.put('/spells/:id', (req: Request, res: Response) => {
  // TODO: Implement the PUT logic
})

// DELETE route
router.delete('/spells/:id', (req: Request, res: Response) => {
  // TODO: Implement the DELETE logic
})

export default router
