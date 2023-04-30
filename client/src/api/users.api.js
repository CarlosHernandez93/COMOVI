import axios from "axios"

export const createUser = async (user) =>{
     await axios.post("http://localhost:4000/user/create", user)
}

export const searchUser = async (id) =>{
    const response = await axios.get(`http://localhost:4000/user/${id}`)
    return response.data
}

export const login = async (user) =>{
    await axios.post("http://localhost:4000/create", user)
}