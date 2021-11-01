import express from 'express';
import cors from 'cors';
import connectToDatabase from './db.js';

import auth from './api/routes/authentication.js';
import vendor from './api/routes/vendor.js';

const app = express(); // entire app
const port = process.env.PORT || 8888;

connectToDatabase(); // database

// cors middleware init
app.use(cors());
app.use(
  express.json({
    extended: false,
  }),
);

app.use('/api/v2/auth', auth); // auth init
app.use('api/v2/vendor', vendor); // vendor init

// invalid req or api handler.
app.use('*', (req, res) => res.json('Invalid Api Address').status(404));

app.listen(port, () => console.log(`Server started on ${port}`));
