import { Router } from 'express'

// controllers
import { findExams } from '../controller/exam_controller.js'

const router = Router()

// exam routes
router.get('/:id', findExams)

export default router
