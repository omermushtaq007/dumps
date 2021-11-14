import { check } from 'express-validator';

const FirstName = [
  check('firstName')
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage('this is required fields'),
];

const LastName = [
  check('lastName')
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage('this is required fields'),
];

const Email = [
  check('email')
    .isEmail()
    .withMessage('Invalid email address')
    .notEmpty()
    .withMessage('this is required field'),
];

const Password = [
  check('password')
    .isLength({ min: 8, max: 32 })
    .withMessage('must be at least 8 to 32 chars long')
    .matches(/^[A-Za-z0-9 .,'!&]+$/)
    .withMessage('must contain a number'),
];

const Slug = [
  check('slug')
    .notEmpty()
    .withMessage('this is required fields')
    .isLength({ min: 2, max: 40 })
    .withMessage('must be at least 2 to 40 chars long')
]

const Certificate = [
  check('certificate')
  .notEmpty()
  .withMessage('this is required fields')
  .isLength({ min: 2, max: 40 })
  .withMessage('must be at least 2 to 40 chars long')
]

export { FirstName, LastName, Email, Password, Slug, Certificate };
