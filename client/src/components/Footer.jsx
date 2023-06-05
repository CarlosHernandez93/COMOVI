function Footer(){
    return(
        <footer className="bg-slate-200 py-12">
            <div className="flex justify-around mb-12">
                <div>
                    <h3 className="font-bold mb-1">Integrantes</h3>
                    <ul>
                        <li className="mb-2">Juan Sebastian Bejarano</li>
                        <li className="mb-2">Juan Pablo Ramirez</li>
                        <li className="mb-2">Sebastia David Duque</li>
                        <li className="mb-2">Carlos Augusto Hernandez</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-1">Contactos</h3>
                    <p className="mb-2">Direccion: Calle 5 # 62-00 Barrio Pampalinda</p>
                    <p className="mb-2">Telefono: PBX: (+57 602) 518 3000</p>
                </div>
                <div>
                    <h3 className="font-bold mb-1">Redes Sociales</h3>
                    <ul>
                        <li className="mb-2">
                            <a href="https://www.facebook.com/usantiagodecali/?locale=es_LA">Facebook</a>
                        </li>
                        <li className="mb-2">
                            <a href="https://www.instagram.com/usantiagodecali/?hl=es">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-center">© 2023 COMOVI. Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer