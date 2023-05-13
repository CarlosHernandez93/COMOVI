import { useState } from "react";
import {Form, Formik} from "formik"
import { searchUser, } from "../api/users.api";
import {Toaster, toast} from 'react-hot-toast'

function SearchUser(){
    const [data, setData] = useState({});

    return(
        <div className="w-[40%] border-[1px] border-neutral-500 rounded p-[2em]">
            <Formik
                    initialValues={{
                        id:"",    
                    }}
                    onSubmit={async (values, actions) => {
                            try {
                                const response = await searchUser(values.id)
                                console.log(response)
                                setData(response)
                                actions.resetForm()
                                toast.success('Busqueda Exitosa')
                            } catch (error) {
                                console.log(error)
                            }
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
                <hr className="mb-5"/>
                <div>
                    <div className="flex mb-5">
                        <p className="mr-3">Identifiacion:</p>
                        <span>{data.id}</span>
                    </div>
                    <div className="flex mb-5">
                        <p className="mr-3">Nombre:</p>
                        <span>{data.nombre}</span>
                    </div>
                    <div className="flex mb-5">
                        <p className="mr-3">Correo:</p>
                        <span>{data.correo}</span>
                    </div>
                    <div className="flex mb-5">
                        <p className="mr-3">Rol:</p>
                        <span>{data.cargo}</span>
                    </div>
                    <div className="flex mb-5">
                        <p className="mr-3">Carrera:</p>
                        <span>{data.carrera}</span>
                    </div>
                </div>
                <Toaster
                    position="bottom-center"
                />
        </div>
    )
}

export default SearchUser