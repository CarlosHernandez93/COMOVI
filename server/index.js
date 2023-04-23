import express from "express"
import indexRoutes from "./routes/index.routes.js"
import userRoutes from "./routes/user.routes.js"

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(indexRoutes)
app.use(userRoutes)

app.listen(PORT)
console.log(`Escuchando en el puerto ${PORT}`)