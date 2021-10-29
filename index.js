import express from 'express';
import cors from 'cors';
import connectToDatabase from './db.js';
const app = express(); // entire app
const port = process.env.PORT || 8888;
connectToDatabase();
// cors middleware init
app.use(cors());
app.use(
  express.json({
    extended: false,
  }),
);
app.use('/api/v2/test', (req, res) => res.json('hally hally mall dia'));
// invalid req or api handler.
app.use('*', (req, res) => res.json('Invalid Api Address').status(404));

app.listen(port, () => console.log(`Server started on ${port}`));
