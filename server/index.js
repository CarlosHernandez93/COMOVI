import express from "express"
import cors from "cors"
import userRoutes from "./routes/user.routes.js"
import "./models/users.model.js"
import { sequelize } from "./database/db.config.js"
import passport from 'passport'
import cookieSession from "cookie-session"
import passportSetups from './strategy/google.js'

async function main(){
    try {
        await sequelize.sync({alter: true})
        const app = express()
        const PORT = process.env.PORT || 4000

        app.use(
            cookieSession({name:"session", keys:["openreplay"], maxAge: 24 * 60 * 60 * 100,})
        );

        app.use(
            cors({
            origin: "http://localhost:5173",
            methods: "GET,POST,PUT,DELETE",
            credentials: true,
            })
        )

        app.use(express.json())
        app.use(userRoutes)
        app.use(passport.initialize())
        app.use(passport.session())
        app.listen(PORT)
        console.log(`Escuchando en el puerto ${PORT}`)
    } catch (error) {
        console.log(error)
    }
}

main()