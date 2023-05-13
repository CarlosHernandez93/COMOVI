import {Form, Formik} from "formik"
import { searchUser, updateUser } from "../api/users.api";
import {Toaster, toast} from 'react-hot-toast'
import { useState } from "react";

function UpdateUser(){
    const [data, setData] = useState(null);

    const obtenerPersona = async (id, actions) =>{
        try{
            const response = await searchUser(id)
            console.log(response)
            setData(response)
            actions.resetForm()
            toast.success('Busqueda Exitosa')
        }
        catch(error){
            console.log(error)
        }
    }

    const actualizarPersona = async(id, values) =>{
        try {
            const response = await updateUser(id, values)
            console.log(response)
            setData(null)
            toast.success('El usuario se guardo exitosamente')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="w-[40%] border-[1px] border-neutral-500 rounded p-[2em]">
            <Formik
                    initialValues={{
                        id:"",    
                    }}
                    onSubmit={async (values, actions) => {         
                            obtenerPersona(values.id, actions)
                        }
                    }
                >
                    {({handleChange, handleSubmit, values}) => (
                        <Form onSubmit={handleSubmit} className="w-[100%] flex mb-5">
                            <input 
                                type="number"
                                name='id'
                                placeholder="Identificacion"
                                onChange={handleChange}
                                className="border-[1px] border-neutral-500 rounded mr-5 grow-[2]"
                                value={values.id}
                            />
                            <button 
                                className="bg-[#172072] text-white font-medium p-[.5em] rounded grow-[1]" 
                                type="submit"
                            >Buscar</button>
                        </Form>
                    )}
            </Formik>
            {data && (
                <Formik
                initialValues={{
                    id: data.id,
                    nombre: data.nombre,
                    password: data.contraseña,
                    correo: data.correo,
                    cargo: data.cargo,
                    carrera: data.carrera
                }}
                onSubmit={async (values) => {
                        actualizarPersona(values.id, values)
                    }
                }
                >
                    {({handleChange, handleSubmit, values}) =>(
                    <Form onSubmit={handleSubmit} className="w-[100%] flex flex-col items-center">
                        <input 
                            type="number"
                            name="id" 
                            placeholder="Identificacion" 
                            className=" border-[1px] border-neutral-500 rounded p-[.5em] mb-5 w-[100%]" 
                            onChange={handleChange}
                            value={values.id}
                            disabled={true}
                        />
                        <input 
                            type="tex"
                            name="nombre" 
                            placeholder="Nombre de usuario" 
                            className=" border-[1px] border-neutral-500 rounded p-[.5em] mb-5 w-[100%]" 
                            onChange={handleChange}
                            value={values.nombre}
                        />
                        <input 
                            type="password"
                            name="password" 
                            placeholder="Contraseña" 
                            className=" border-[1px] border-neutral-500 rounded p-[.5em] mb-5 w-[100%]" 
                            onChange={handleChange}
                            value={values.password}
                        />
                        <input 
                            type="email"
                            name="correo" 
                            placeholder="Correo Electronico" 
                            className=" border-[1px] border-neutral-500 rounded p-[.5em] mb-5 w-[100%]" 
                            onChange={handleChange}
                            value={values.correo}
                        />
                        <input 
                            type="text"
                            name="carrera" 
                            placeholder="Carrera" 
                            className=" border-[1px] border-neutral-500 rounded p-[.5em] mb-5 w-[100%]" 
                            value={values.cargo}
                            disabled={true}
                        />
                        <input 
                            type="text"
                            name="carrera" 
                            placeholder="Carrera" 
                            className=" border-[1px] border-neutral-500 rounded p-[.5em] mb-5 w-[100%]" 
                            onChange={handleChange}
                            value={values.carrera}
                        />
                        <button 
                            className="w-[80%] bg-[#172072] text-white font-medium p-[.5em] rounded" 
                            type="submit"
                        >Registrarse</button>
                    </Form>
                    )}
                </Formik>
            )}

            <Toaster
                position="bottom-center"
            />
        </div>
    )
}

export default UpdateUser