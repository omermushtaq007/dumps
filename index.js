import express from 'express'
import cors from 'cors'
import connectToDatabase from './db.js'
import auth from './api/routes/authentication.js'
import vendor from './api/routes/vendor.js'
import cert from './api/routes/certificate.js'
import exam from './api/routes/exam.js'
import user_dashboard from './api/dashboard/user_routes.js'
import exam_dashboard from './api/dashboard/exam_routes.js'
import { isAuthorized, isAdminister } from './api/middleware/authorization.js'

// create an express application
const app = express()

const port = process.env.PORT || 8888

connectToDatabase() // database connection

// middleware
app.use(cors())
app.use(
  express.json({
    extended: false,
  }),
)

// routes use
app.use('/api/v2/auth', auth)
app.use('/api/v2/vendor', vendor)
app.use('/api/v2/cert', cert)
app.use('/api/v2/exam', exam)
// dashboard routes
app.use('/dashboard/v2', [isAuthorized, isAdminister], user_dashboard, exam_dashboard)

// invalid route handler (404) with error message
app.use('*', (req, res) => res.json('Invalid Api Address').status(404))

// start server
app.listen(port, () => console.log(`server listening on ${port}`))
