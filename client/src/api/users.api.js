import axios from "axios"

export const createUser = async (user) =>{
     await axios.post("http://localhost:4000/user/create", user)
}

export const searchUser = async (id) =>{
    const response = await axios.get(`http://localhost:4000/user/${id}`)
    return response.data
}

export const deleteUser = async (id) =>{
    await axios.delete(`http://localhost:4000/user/${id}`)
}

export const updateUser = async (id, user) =>{
    await axios.put(`http://localhost:4000/user/${id}`, user)
}

export const login = async (user) =>{
    await axios.post("http://localhost:4000/create", user)
}
