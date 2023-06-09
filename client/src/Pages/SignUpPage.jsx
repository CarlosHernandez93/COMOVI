import LogoUSC from "../assets/LogoUSC2.png"
import {Form, Formik} from "formik"
import { createUser } from "../api/users.api";
import { redirect } from 'react-router-dom'

function SignUpPage(){

    const sendUser = async (values) => {
        try {
            const response = await createUser(values)
            console.log(response)
            redirect('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="flex bg-fondo-azul1 bg-cover justify-center items-center py-12">
            <div className=" w-[35%] bg-white rounded-md flex flex-col items-center py-5">
                <img src={LogoUSC} alt="LogoUSC" className="w-56 h-56 mb-9"/>
                <Formik
                    initialValues={{
                        id:"",
                        nombre:"",
                        password:"",
                        correo:"",
                        cargo:"",
                        carrera:""
                    }}
                    onSubmit={sendUser}
                >
                    {({handleChange, handleSubmit, values}) =>(
                    <Form onSubmit={handleSubmit} className="w-[100%] flex flex-col items-center">
                        <input 
                            type="number"
                            name="id" 
                            placeholder="Identificacion" 
                            className=" border-[1px] border-neutral-500 rounded p-[.5em] w-[80%] mb-5" 
                            onChange={handleChange}
                            value={values.id}
                        />
                        <input 
                            type="tex"
                            name="nombre" 
                            placeholder="Nombre de usuario" 
                            className=" border-[1px] border-neutral-500 rounded p-[.5em] w-[80%] mb-5" 
                            onChange={handleChange}
                            value={values.nombre}
                        />
                        <input 
                            type="password"
                            name="password" 
                            placeholder="Contraseña" 
                            className=" border-[1px] border-neutral-500 rounded p-[.5em] w-[80%] mb-5" 
                            onChange={handleChange}
                            value={values.password}
                        />
                        <input 
                            type="email"
                            name="correo" 
                            placeholder="Correo Electronico" 
                            className=" border-[1px] border-neutral-500 rounded p-[.5em] w-[80%] mb-5" 
                            onChange={handleChange}
                            value={values.correo}
                        />
                        <input 
                            type="text"
                            name="cargo" 
                            placeholder="Cargo" 
                            className=" border-[1px] border-neutral-500 rounded p-[.5em] w-[80%] mb-5" 
                            onChange={handleChange}
                            value={values.cargo}
                        />
                        <input 
                            type="text"
                            name="carrera" 
                            placeholder="Carrera" 
                            className=" border-[1px] border-neutral-500 rounded p-[.5em] w-[80%] mb-5" 
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
            </div>
        </div>
    );
}

export default SignUpPage