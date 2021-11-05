import User from '../../model/User.js';
import gravatar from 'gravatar';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

// password hashing
async function passwordEncryption(password) {
  let salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
}

// create function for user register
export async function register(req, res) {
  // check if there is any error in the validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) res.json(errors).status(400);

  try {
    const { firstName, lastName, email, password } = req.body; // destructuring the request body
    // check if the user already exists
    let user = await User.findOne({ email: email });
    if (user) res.json({ message: 'User already exist' }).status(409);
    
    // create avatar for the user
    let avatar = gravatar.url(email, {
      s: '200',
      d: 'mm',
      r: 'pg',
    });

    user = new User({
      firstName,
      lastName,
      email,
      avatar,
      password,
    });

    // password hashing
    user.password = await passwordEncryption(password);

    await user.save(); // create a new user
    // payload for the token
    const payload = {
      user: {
        id: user.id,
      },
    };
    // sign the token
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token }).status(200);
      },
    );
  } catch (e) {
    // if there is an error
    console.error(e.message);
    throw new Error(e);
  }
}

// Create function for user login
export async function login(req, res) {
  // Validate the request
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) res.json(errors).status(400); // If there is an error, return the error

  try {
    const { email, password } = req.body; // Get the email and password from the request
    // Check if the user exist
    let user = await User.findOne({ email: email });
    if (!user) res.json({ message: 'invalid credentials' }).status(401);

    // Check if the password is correct
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) res.json({ message: 'invalid credentials' }).status(400);
    
    // Create the payload for the JWT
    const payload = {
      user: {
        id: user.id,
      },
    };
    // Sign the token
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token }).status(200);
      },
    );
  } catch (e) {
    // If there is an error
    console.error(e.message);
    throw new Error(res.json({ status: 500 }));
  }
}
