import { Link } from "react-router-dom";

function MonitoriaPage(){
    return(
        <>
            <div>
                <p>Investigación/Extensión</p>
                <p>
                    <span>Cupos</span>
                    <span>5</span>
                </p>
                <Link className="text-[#172072] bg-white mr-7 p-2 rounded hover:bg-[#dcdcdc] font-medium" to="/login">Iniciar Sesion</Link>
            </div>
            <div>
                <p>Docencia</p>
                <p>
                    <span>Cupos</span>
                    <span>5</span>
                </p>
                <Link className="text-[#172072] bg-white mr-7 p-2 rounded hover:bg-[#dcdcdc] font-medium" to="/login">Iniciar Sesion</Link>
            </div>
            <div>
                <p>Gestión Academica</p>
                <p>
                    <span>Cupos</span>
                    <span>5</span>
                    <Link className="text-[#172072] bg-white mr-7 p-2 rounded hover:bg-[#dcdcdc] font-medium" to="/login">Iniciar Sesion</Link>
                </p>
            </div>
        </>
    )
}

export default MonitoriaPage