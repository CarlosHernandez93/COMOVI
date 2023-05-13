import { useState } from "react";
import NavBar from "../components/NavBar";
import Select from "react-select"
import CreateUser from "../components/CreateUser";
import DeleteUser from "../components/DeleteUser";
import SearchUser from "../components/SearchUser";
import UpdateUser from "../components/UpdateUser";

function UserManagement(){
    const [selectedOption, setSelectedOption] = useState(null);
    const [component, setComponent] = useState(null);
    
    const options = [
        { id: 1, label: 'Buscar' },
        { id: 2, label: 'Crear' },
        { id: 3, label: 'Eliminar' },
        { id: 4, label: 'Actualizar' }
    ]
 
    const handleChange = (selected) =>{
        setSelectedOption(selected)

        if(selected.id === 1){
            setComponent(<SearchUser/>)
        }
        else if(selected.id === 2){
            setComponent(<CreateUser/>)
        }
        else if(selected.id === 3){
            setComponent(<DeleteUser/>)
        }
        else{
            setComponent(<UpdateUser/>)
        }
    }

    return(
        <div className="">
            <NavBar/>
            <div className="h-screen flex flex-col items-center mt-14 ">
                <div className="w-[40%]">
                    <p className="text-xl mb-3">Accion a realizar:</p>
                    <Select 
                        className="text-xl mb-14"
                        defaultValue={options[0]}
                        options={options}
                        onChange={handleChange}
                        value={selectedOption}
                    />
                </div>
                {component}
            </div>
        </div>
    )
}

export default UserManagement