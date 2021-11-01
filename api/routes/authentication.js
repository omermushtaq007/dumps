import express from 'express';
import { register, login } from '../controller/auth-controller.js';
import {
  FirstName,
  LastName,
  Email,
  Password,
} from '../../helper/validator.js';
const router = express.Router();

router.post(
  '/register',
  // Validation
  [FirstName, LastName, Email, Password],
  register, // Controller
);

router.post(
  '/login',
  // Validation
  [Email, Password],
  login, // Controller
);

export default router;
