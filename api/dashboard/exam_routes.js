import { Router } from 'express'

const router = Router()

router.get('/exams/', async (req, res) => {
  res.send('Exam routes')
})

export default router
