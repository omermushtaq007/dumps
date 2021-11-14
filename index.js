import express from 'express';
import cors from 'cors';
import connectToDatabase from './db.js';

// routes
import auth from './api/routes/authentication.js';
import vendor from './api/routes/vendor.js';
import cert from './api/routes/certificate.js'
// create an express application
const app = express(); 

const port = process.env.PORT || 8888;

connectToDatabase(); // connect to database

// middleware
app.use(cors());
app.use(
  express.json({
    extended: false,
  }),
);

// routes use
app.use('/api/v2/auth', auth);
app.use('/api/v2/vendor', vendor);
app.use('/api/v2/cert', cert);

// invalid route handler
app.use('*', (req, res) => res.json('Invalid Api Address').status(404));

// start server
app.listen(port, () => console.log(`Server started on ${port}`));
