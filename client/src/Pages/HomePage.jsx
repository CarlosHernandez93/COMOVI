import NavBar from "../components/NavBar";
import "../styles/HomePage.css"

function HomePage(){
    return(
        <>
            <NavBar/>
            <main className="h-72 px-24 pt-10">
                <h2 className="mb-[4%] text-center text-3xl font-semibold">PROGRAMAS DE INGENIERÍA</h2>
                <div className="grid grid-cols-3 grid-rows-2 gap-6">
                <a className="bg-bio img-carrera" href="#">
                    <div className="overlay"></div>
                    <span className="text">BIOINGENIERÍA</span>
                </a>
                <a className="bg-comercial img-carrera" href="#">
                    <div className="overlay"></div>
                    <span className="text">INGENIERÍA COMERCIAL</span>
                </a>
                <a className="bg-sistemas img-carrera" href="#">
                    <div className="overlay"></div>
                    <span className="text">INGENIERÍA DE SISTEMAS</span>
                </a>
                <a className="bg-electronica img-carrera" href="#">
                    <div className="overlay"></div>
                    <span className="text">INGENIERÍA ELECTRÓNICA</span>
                </a>
                <a className="bg-energias img-carrera" href="#">
                    <div className="overlay"></div>
                    <span className="text">INGENIERÍA EN ENERGÍAS</span>
                </a>
                <a className="bg-industrial img-carrera" href="#">
                    <div className="overlay"></div>
                    <span className="text">INGENIERÍA INDUSTRIAL</span>
                </a>
                </div>
            </main>
        </>
    );
}

export default HomePage;