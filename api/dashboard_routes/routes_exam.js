import { Router } from 'express';
import { ExamCode, ExamName, Price, Question } from '../../helper/validator.js';
import { createExam } from '../controller/exam_controller.js';

const router = Router();

router.get('/', [ExamCode, ExamName, Price, Question], createExam);

export default router;
