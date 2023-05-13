import {Form, Formik} from "formik"
import { deleteUser } from "../api/users.api";
import {Toaster, toast} from 'react-hot-toast'

function DeleteUser(){
    return(
        <div className="w-[40%] border-[1px] border-neutral-500 rounded p-[2em]">
            <Formik
                    initialValues={{
                        id:"",    
                    }}
                    onSubmit={async (values, actions) => {
                            try {
                                const response = await deleteUser(values.id)
                                console.log(response)
                                actions.resetForm()
                                toast.success('Usuario eliminado')
                            } catch (error) {
                                console.log(error)
                            }
                        }
                    }
                >
                    {({handleChange, handleSubmit, values}) => (
                        <Form onSubmit={handleSubmit} className="w-[100%] flex flex-col mb-5">
                            <input 
                                type="number"
                                name='id'
                                placeholder="Identificacion"
                                onChange={handleChange}
                                className="border-[1px] border-neutral-500 rounded mb-5 text-xl p-[.2em]"
                                value={values.id}
                            />
                            <button 
                                className="bg-[#172072] text-white font-medium p-[.5em] rounded" 
                                type="submit"
                            >Buscar</button>
                        </Form>
                    )}
                </Formik>
                <Toaster
                    position="bottom-center"
                />
        </div>
    )
}

export default DeleteUser