import { usersTable } from "../models/users.model.js"

export const createUser = async (req, res) =>{
    try {
        const {id, nombre, password, correo, cargo, carrera} = req.body
        const result = await usersTable.create({
            id: id,
            nombre: nombre,
            contraseña: password,
            correo: correo,
            cargo: cargo,
            carrera: carrera
        })
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

export const loginUser = async (req, res) =>{
    try {
        const {id, password} = req.body
        const result = await usersTable.findOne({
            where:{
                id: id,
                contraseña: password
            }
        })
        if(result===null){
            console.log("No se encontro un usuario")
        }else{
            console.log(result)
            res.json({
                id,
                password
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const deleteUser = async (req, res) =>{
    try {
        const {id} = req.params
        const result = await usersTable.destroy({
            where:{
                id
            }
        })
        console.log(result)
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const searchUser = async(req, res) =>{
    try {
        const {id} = req.params
        const result = await usersTable.findByPk(id)
        res.json(result)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const updateUser = async(req, res) =>{
    try {
        const {id} = req.params
        const {nombre, password, correo, cargo, carrera} = req.body
        const result = await usersTable.findByPk(id)
        result.nombre = nombre
        result.contraseña = password
        result.correo = correo
        result.cargo = cargo
        result.carrera = carrera
        await result.save()
        res.json(result)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}