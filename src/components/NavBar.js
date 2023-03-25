import React from "react";
import LogoUSC from "../assets/LogoUSC.png"

function NavBar(){
    return(
        <header className="bg-[#172072] flex items-center px-5 py-2.5">
            <img className="h-[100px] mr-3.5" src={LogoUSC} alt="Logo USC"></img>
            <h1 className="text-white text-2xl font-semibold">CONVOCATORIA DE MONITORIA VIRTUAL</h1>
            <div className="grow text-right">
                <a className="text-[#172072] bg-white mr-7 p-2 rounded hover:bg-[#dcdcdc] font-medium" href="#">Iniciar Sesion</a>
                <a className="text-[#172072] bg-white p-2 rounded hover:bg-[#dcdcdc] font-medium" href="#">Registrar</a>
            </div>
        </header>
    );
}

export default NavBar;