import LogoUSC from "../assets/LogoUSC2.png"
import {Form, Formik} from "formik"
import { createUser } from "../api/users.api";

function SignUpPage(){
    return(
        <div className="h-screen flex bg-fondo-azul1 bg-cover justify-center items-center">
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
                    onSubmit={async (values, actions) => {
                        try {
                            const response = await createUser(values)
                            console.log(response)
                            actions.resetForm()
                        } catch (error) {
                            console.log(error)
                        }
                    }}
                >
                    {({handleChange, handleSubmit, values}) =>(
                    <Form onSubmit={handleSubmit}>
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