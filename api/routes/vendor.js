import { Router } from 'express'
import { Slug } from '../../helper/validator.js'
// controllers
import {
  createVendor,
  deleteVendor,
  findVendors,
  updateVendor,
  findSingleVendor,
} from '../controller/vendor-controller.js'
// middleware
import { isAuthorized } from '../middleware/authorization.js'
const router = Router()

// vendor routes
router.get('/', findVendors)
router.post('/', isAuthorized, [Slug], createVendor)
router.get('/:id', findSingleVendor)
router.put('/:id', isAuthorized, [Slug], updateVendor)
router.delete('/:id', isAuthorized, deleteVendor)

export default router
