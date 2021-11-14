import {Router} from 'express';
import { Certificate } from '../../helper/validator.js';

import {findCertification, createCertification} from '../controller/cert.controller.js'
import { isAuthorized } from '../middleware/authorization.js';

const router = Router();

// certificate routes
router.get('/', findCertification);
// router.get('/:id', findSingleCertificate);
// router.put('/:id',isAuthorized, [Certificate], updateCertification);
// router.delete('/:id',isAuthorized, deleteCertification);
router.post("/:id", isAuthorized, [Certificate], createCertification);

export default router;