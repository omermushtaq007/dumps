import express from 'express';
import { register, login } from '../controller/auth-controller.js';
import {
  FirstName,
  LastName,
  Email,
  Password,
} from '../../helper/validator.js';

const router = express.Router();

// @route   POST api/v2/auth/register
router.post(
  '/register',
  // Validate the user input
  [FirstName, LastName, Email, Password],
  register, // Call controller
);

// @route   POST api/v2/auth/login
router.post(
  '/login',
  // Validate the user input
  [Email, Password],
  login, // Call controller
);

export default router;
