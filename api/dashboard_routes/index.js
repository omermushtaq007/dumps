// This is route for the dashboard:
import { Router } from 'express';

import user from "./routes_user.js";
import exam from "./routes_exam.js";

const router = Router();

router.use('/users', user);
router.use('/exams', exam);

export default router;
