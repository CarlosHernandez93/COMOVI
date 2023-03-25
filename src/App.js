import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <NavBar/>
      <main className="h-[70%] px-24 pt-12">
        <h2 className="mb-[3%] text-center text-3xl font-semibold">PROGRAMAS DE INGENIERÍA</h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-6 h-full">
          <a className="bg-bio relative block w-300 h-200 bg-cover bg-center hover:opacity-75 transition-opacity" href="#">
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity z-10">BIOINGENIERÍA</span>
          </a>
          <a className="bg-comercial bg-cover bg-top relative block w-300 h-200 hover:opacity-75 transition-opacity" href="#">
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity z-10">INGENIERÍA COMERCIAL</span>
          </a>
          <a className="bg-sistemas bg-cover bg-center relative block w-300 h-200 hover:opacity-75 transition-opacity" href="#">
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity z-10">INGENIERÍA DE SISTEMAS</span>
          </a>
          <a className="bg-electronica bg-cover bg-center relative block w-300 h-200 hover:opacity-75 transition-opacity" href="#">
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity z-10">INGENIERÍA ELECTRÓNICA</span>
          </a>
          <a className="bg-energias bg-cover bg-center relative block w-300 h-200 hover:opacity-75 transition-opacity" href="#">
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity z-10">INGENIERÍA EN ENERGÍAS</span>
          </a>
          <a className="bg-industrial bg-cover bg-center relative block w-300 h-200 hover:opacity-75 transition-opacity" href="#">
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity z-10">INGENIERÍA INDUSTRIAL</span>
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
