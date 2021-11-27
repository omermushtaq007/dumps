import { Router } from 'express'

// controllers
import { findExams } from '../controller/exam-controller'

// middleware
import { isAuthorized } from '../middleware/authorization'

const router = Router()

// exam routes
router.get('/', findExams)

export default router
