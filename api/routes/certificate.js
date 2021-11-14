import {Router} from 'express';
import { Certificate } from '../../helper/validator.js';

import {findCertification, createCertification, findCertificate, deleteCertificate, updateCertificate} from '../controller/cert.controller.js'
import { isAuthorized } from '../middleware/authorization.js';

const router = Router();

// certificate routes
router.get('/:id', findCertification);
router.get('/slug/:id', findCertificate);
router.put('/slug/:id',isAuthorized, [Certificate], updateCertificate);
router.delete('/:id',isAuthorized, deleteCertificate);
router.post("/:id", isAuthorized, [Certificate], createCertification);

export default router;