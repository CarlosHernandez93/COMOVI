import LogoUSC from "../assets/LogoUSC2.png"

const google = () => {
    window.open("http://localhost:4000/google", "_self");
}

function LoginPage(){
    return(
        <div className="h-screen flex bg-fondo-azul1 bg-cover justify-center items-center">
            <div className="h-[85%] w-[30%] bg-white rounded-2xl flex flex-col items-center py-10">
                <img src={LogoUSC} alt="LogoUSC" className="w-56 h-56 mb-10"/>
                <input type="tex" placeholder="Nombre de usuario" className=" border-[1px] border-neutral-500 rounded p-[.5em] w-[80%] mb-7"/>
                <input type="password" placeholder="Contraseña" className=" border-[1px] border-neutral-500 rounded p-[.5em] w-[80%] mb-10"/>
                <button className="w-[80%] h-[45px] bg-[#172072] text-white font-medium p-[.5em] rounded-2xl mb-7">Iniciar Sesion</button>
                <button className="inline-flex bg-[#4285f4] p-[.5em] items-center justify-center w-[80%] rounded-2xl text-white font-medium h-[45px]" onClick={google}>
                    <div className="bg-white flex content-center items-center p-1 mr-2">
                        <svg className="w-6 h-6" width="256" height="262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
                            <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"> 
                            </path>
                        </svg>
                    </div>
                    Registrate con Google
                </button>
            </div>
        </div>
    );
}

export default LoginPage;