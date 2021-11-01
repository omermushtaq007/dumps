import User from '../../model/User.js';
import gravatar from 'gravatar';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

// helper
async function passwordEncryption(password) {
  let salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
}

// controller
export async function register(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) res.json(errors).status(400);

  try {
    const { firstName, lastName, email, password } = req.body;
    let user = await User.findOne({ email: email });
    // Check User Existence
    if (user) res.json({ message: 'User already exist' }).status(409);

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

    user.password = await passwordEncryption(password);

    await user.save(); // user create
    const payload = {
      user: {
        id: user.id,
      },
    };

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
    console.error(e.message);
    throw new Error(e);
  }
}

export async function login(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) res.json(errors).status(400);

  try {
    // User Login
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    // Check User Existence
    if (!user) res.json({ message: 'invalid credentials' }).status(401);

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) res.json({ message: 'invalid credentials' }).status(400);
    const payload = {
      user: {
        id: user.id,
      },
    };
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
    console.error(e.message);
    throw new Error(res.json({ status: 500 }));
  }
}
