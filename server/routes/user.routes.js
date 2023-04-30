import { Router } from "express"
import {createUser, deleteUser, loginUser, searchUser, updateUser} from "../controllers/user.controllers.js"

const router = Router()

router.post('/user/login', loginUser)
router.post('/user/create', createUser)
router.get('/user/:id', searchUser)
router.delete('/user/:id', deleteUser)
router.put('/user/:id', updateUser)

export default router