import { Router } from 'express'
import { isAuthorized } from '../middleware/authorization.js'
const router = Router()
router.get("/", isAuthorized, )
export default router