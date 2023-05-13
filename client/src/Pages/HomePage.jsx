import NavBar from "../components/NavBar";
import "../styles/HomePage.css"
import Footer from "../components/Footer"

function HomePage(){
    return(
        <>
            <NavBar/>
            <main className=" px-24 py-10">
                <h2 className="mb-[4%] text-center text-3xl font-semibold">PROGRAMAS DE INGENIERÍA</h2>
                <div className="grid grid-cols-3 grid-rows-2 gap-6">
                    <a className="bg-bio img-carrera rounded-2xl overflow-hidden" href="#">
                        <div className="overlay"></div>
                        <span className="text">BIOINGENIERÍA</span>
                    </a>
                    <a className="bg-comercial img-carrera rounded-2xl overflow-hidden" href="#">
                        <div className="overlay"></div>
                        <span className="text">INGENIERÍA COMERCIAL</span>
                    </a>
                    <a className="bg-sistemas img-carrera rounded-2xl overflow-hidden" href="#">
                        <div className="overlay"></div>
                        <span className="text">INGENIERÍA DE SISTEMAS</span>
                    </a>
                    <a className="bg-electronica img-carrera rounded-2xl overflow-hidden" href="#">
                        <div className="overlay"></div>
                        <span className="text">INGENIERÍA ELECTRÓNICA</span>
                    </a>
                    <a className="bg-energias img-carrera rounded-2xl overflow-hidden" href="#">
                        <div className="overlay"></div>
                        <span className="text">INGENIERÍA EN ENERGÍAS</span>
                    </a>
                    <a className="bg-industrial img-carrera rounded-2xl overflow-hidden" href="#">
                        <div className="overlay"></div>
                        <span className="text">INGENIERÍA INDUSTRIAL</span>
                    </a>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default HomePage;