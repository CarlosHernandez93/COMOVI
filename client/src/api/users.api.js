import axios from "axios"

export const createUser = async (user) =>{
     await axios.post("http://localhost:4000/create", user)
}