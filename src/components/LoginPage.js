import React from "react";
import LogoUSC from "../assets/LogoUSC2.png"

function LoginPage(){
    return(
        <div className="h-full flex bg-fondo-azul1 bg-cover justify-center items-center">
            <div className="h-[85%] w-[35%] bg-white rounded-md flex flex-col items-center py-5">
                <img src={LogoUSC} alt="LogoUSC" className="w-56 h-56 mb-9"/>
                <input type="tex" placeholder="Nombre de usuario" className=" border-[1px] border-neutral-500 rounded p-[.5em] w-[80%] mb-5"/>
                <input type="tex" placeholder="Contraseña" className=" border-[1px] border-neutral-500 rounded p-[.5em] w-[80%] mb-5"/>
                <button className="w-[80%] bg-[#172072] text-white font-medium p-[.5em] rounded">Iniciar Sesion</button>
            </div>
        </div>
    );
}

export default LoginPage;