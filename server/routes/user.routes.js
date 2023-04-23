import { Router } from "express"
import {createUser, getUserById} from "../controllers/user.controllers.js"

const router = Router()

router.post('/create', createUser)
router.get('/user/:id', getUserById)

export default router