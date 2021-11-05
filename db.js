import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export default async function connectToDatabase() {
  // Connect to MongoDB
  return mongoose.connect(process.env.MONGO_DB_URI, (err) => {
    if (err) throw err; // Check for errors and log if connection succeeded
    console.log('connection succeeded!');
  });
}
