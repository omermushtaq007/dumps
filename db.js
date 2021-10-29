import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export default async function connectToDatabase() {
  return mongoose.connect(process.env.MONGO_DB_URI, (err) => {
    if (err) throw err;
    console.log('Connected');
  });
}
