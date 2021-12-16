import express from "express"
import cors from "cors"
import connectToDatabase from "./db.js"

// routes
import auth from "./api/routes/authentication.js"
import vendor from "./api/routes/vendor.js"
import cert from "./api/routes/certificate.js"
import exam from "./api/routes/exam.js"
import user from "./api/dashboard/user.js"

// auth middleware
import { isAuthorized, isAdmin } from "./api/middleware/authorization.js"

// create an express application
const app = express()

const port = process.env.PORT || 8888

connectToDatabase() // connect to database

// middleware
app.use(cors())
app.use(
  express.json({
    extended: false,
  }),
)

// routes use
app.use("/api/v2/auth", auth)
app.use("/api/v2/vendor", vendor)
app.use("/api/v2/cert", cert)
app.use("/api/v2/exam", exam)
app.use("/dashboard/v2", [isAuthorized, isAdmin], user)

// invalid route handler
app.use("*", (req, res) => res.json("Invalid Api Address").status(404))

// start server
app.listen(port, () => console.log(`Server started on ${port}`))
