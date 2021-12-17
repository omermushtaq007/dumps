import { Router } from "express"
import { getAllUsers } from "../controller/users_controller.js"

const router = Router()

// get all users for admin
router.get("/users/", getAllUsers);
export default router
