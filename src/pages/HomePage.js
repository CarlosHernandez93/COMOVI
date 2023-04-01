import React from "react";
import NavBar from "../components/NavBar";
import "../styles/HomePage.css"

function HomePage(){
    return(
        <>
            <NavBar/>
            <main className="h-72 px-24 pt-10">
                <h2 className="mb-[4%] text-center text-3xl font-semibold">PROGRAMAS DE INGENIERÍA</h2>
                <div className="grid grid-cols-3 grid-rows-2 gap-6">
                <a class="bg-bio img-carrera" href="#">
                    <div class="overlay"></div>
                    <span class="text">BIOINGENIERÍA</span>
                </a>
                <a class="bg-comercial img-carrera" href="#">
                    <div class="overlay"></div>
                    <span class="text">INGENIERÍA COMERCIAL</span>
                </a>
                <a class="bg-sistemas img-carrera" href="#">
                    <div class="overlay"></div>
                    <span class="text">INGENIERÍA DE SISTEMAS</span>
                </a>
                <a class="bg-electronica img-carrera" href="#">
                    <div class="overlay"></div>
                    <span class="text">INGENIERÍA ELECTRÓNICA</span>
                </a>
                <a class="bg-energias img-carrera" href="#">
                    <div class="overlay"></div>
                    <span class="text">INGENIERÍA EN ENERGÍAS</span>
                </a>
                <a class="bg-industrial img-carrera" href="#">
                    <div class="overlay"></div>
                    <span class="text">INGENIERÍA INDUSTRIAL</span>
                </a>
                </div>
            </main>
        </>
    );
}

export default HomePage;