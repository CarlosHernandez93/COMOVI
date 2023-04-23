import {pool} from "../db.js"

export const getUserById = (req, res) =>{
    res.send('obteniendo un usuario')
}

export const createUser = async (req, res) =>{
    try {
        const {id, nombre, password, correo, cargo, carrera} = req.body
        const result = await pool.query(
            'INSERT INTO usuarios(id, nombre, contraseña, correo, cargo, carrera) VALUES (?, ?, ?, ?, ?, ?)',
            [
                id,
                nombre,
                password,
                correo,
                cargo,
                carrera
            ])
        console.log(result)
        res.json({
            id,
            nombre,
            password,
            correo,
            cargo,
            carrera
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
} 
