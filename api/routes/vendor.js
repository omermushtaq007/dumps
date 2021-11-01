import express from 'express';
import { saveVendor } from '../controller/vendor-controller.js';
const router = express();

router.post('/', saveVendor);

export default router;