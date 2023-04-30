import {Form, Formik} from "formik"
import { createUser } from "../api/users.api";
import {Toaster, toast} from 'react-hot-toast'

function CreateUser(){

    return(
        <div className="w-[40%] border-[1px] border-neutral-500 rounded p-[2em]">
            <Formik
                    initialValues={{
                        id:"",
                        nombre:"",
                        password:"",
                        correo:"",
                        cargo:'Estudiante',
                        carrera:""
                    }}
                    onSubmit={async (values, actions) => {
                            try {
                                const response = await createUser(values)
                                console.log(response)
                                actions.resetForm()
                                toast.success('El usuario se guardo exitosamente')
                            } catch (error) {
                                console.log(error)
                            }
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
                <Toaster
                    position="bottom-center"
                />
        </div>
    )
}

export default CreateUser