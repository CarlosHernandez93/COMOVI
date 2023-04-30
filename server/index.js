import express from "express"
import cors from "cors"
import userRoutes from "./routes/user.routes.js"
import "./models/users.model.js"
import { sequelize } from "./database/db.config.js"

async function main(){
    try {
        await sequelize.sync({alter: true})
        const app = express()
        const PORT = process.env.PORT || 4000

        app.use(cors({
            origin: "http://localhost:5173"
        }))
        app.use(express.json())
        app.use(userRoutes)

        app.listen(PORT)
        console.log(`Escuchando en el puerto ${PORT}`)
    } catch (error) {
        console.log(error)
    }
}

main()