import express from 'express';
import cors from 'cors';
import connectToDatabase from './db.js';
import auth from './api/routes/authentication.js';
import vendor from './api/routes/vendor.js';
import cert from './api/routes/certificate.js';
import exam from './api/routes/exam.js';
import dashboardRoutes from './api/dashboard_routes/index.js';
import { isAuthorized, isAdminister } from './api/middleware/authorization.js';

// create an express application
const app = express();

const port = process.env.PORT || 8888;

// set white list networks
const whiteList_network = () => {
  if (process.env.NODE_ENV !== 'production') {
    return [`${process.env.CLIENT_DEV}`, `${process.env.SERVER_DEV}`];
  }
  return ['http://www.dumpssolutions.com', 'http://dumpssolutions.com'];
};

const corsOption = {
  origin: (origin, callback) => {
    // I don't know why? origin is undefine here.
    console.log('***Origin of request ' + origin);
    if (whiteList_network().indexOf(origin) !== -1 || !origin) {
      console.log('accepted origin');
      callback(null, true);
    } else {
      console.log('Origin error' + '500');
      callback(new Error('Not allowed'));
    }
  },
};

// middleware
app.use(cors(corsOption));
app.use(
  express.json({
    extended: false,
  }),
);

connectToDatabase(); // database connection

// routes use
app.use('/api/v2/auth', auth);
app.use('/api/v2/vendor', vendor);
app.use('/api/v2/cert', cert);
app.use('/api/v2/exam', exam);
// dashboard routes
app.use('/dashboard/v2', [isAuthorized, isAdminister], dashboardRoutes);

// invalid route handler
app.use('*', (req, res) => res.json('Invalid Api Address').status(404));

// start server
app.listen(port, () => console.log(`server listening on ${port}`));
