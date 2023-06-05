import { Router } from "express"
import {createUser, deleteUser, loginFailed, loginSuccessful, loginUser, searchUser, updateUser} from "../controllers/user.controllers.js"
import passport from "passport"

const router = Router()
const CLIENT_URL = 'http://localhost:5173'

router.post('/user/login', loginUser)
router.post('/user/create', createUser)
router.get('/user/:id', searchUser)
router.delete('/user/:id', deleteUser)
router.put('/user/:id', updateUser)
router.get('/google', passport.authenticate('google', {scope: ['profile']}))
router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: `${CLIENT_URL}/monitorias`,
    failureRedirect: '/login/failed'
}))
router.get('/login/failed', loginFailed)
router.get('/login/success' , loginSuccessful)

export default router