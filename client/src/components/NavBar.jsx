
import LogoUSC from "../assets/LogoUSC.png"

import { Link } from "react-router-dom";

function NavBar(){
    return(
        <header className="bg-[#172072] flex items-center px-5 py-2.5 w-[100%]">
            <img className="h-[100px] mr-3.5" src={LogoUSC} alt="Logo USC"></img>
            <h1 className="text-white text-2xl font-semibold">CONVOCATORIA DE MONITORIA VIRTUAL</h1>
            <div className="grow text-right">
                <Link className="text-[#172072] bg-white mr-7 p-2 rounded hover:bg-[#dcdcdc] font-medium" to="/login">Iniciar Sesion</Link>
                <Link className="text-[#172072] bg-white p-2 rounded hover:bg-[#dcdcdc] font-medium" to="/register">Registrar</Link>
                {/* <Link className="text-[#172072] bg-white p-2 rounded hover:bg-[#dcdcdc] font-medium" to="/users">Usuarios</Link> */}
            </div>
        </header>
    );
}

export default NavBar;