import { Router } from 'express'
import { ExamCode, ExamName, Price, Question } from '../../helper/validator.js'

// controllers
import { findExams, createExam } from '../controller/exam-controller.js'

// middleware
import { isAuthorized } from '../middleware/authorization.js'

const router = Router()

// exam routes
router.get('/:id', findExams)
router.post(
  '/',
  isAuthorized,
  [ExamCode, ExamName, Price, Question],
  createExam,
)

export default router
