
export const PiePage = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row redes-sociales justify-content-center ms-1 me-1">
                        <div className="col-4 col-lg-2 text-center">
                            <a href="tel:5530411016" className="d-inline-flex align-items-center justify-content-center p-3" id="llamar">
                                <img src="./img/logoTelefono.png" alt="Llamar" className="ico-contacto" />
                            </a>
                            <p className="ico-texto p-3" htmlFor="llmar">Teléfono</p>
                        </div>
                        <div className="col-4 col-lg-2 text-center">
                            <a href="https://api.whatsapp.com/send/?phone=5215530411016" className="d-inline-flex align-items-center justify-content-center p-3" id="whatsapp">
                                <img src="./img/logoWhatsapp.png" alt="Whatsapp" className="ico-contacto" />
                            </a>
                            <p className="ico-texto p-3 " htmlFor="whatsapp">Whatsapp</p>
                        </div>
                            
                        <div className="col-4 col-lg-2 text-center">
                            <a href="mailto:asesoria.perlamaldonado@gmail.com" className="d-inline-flex align-items-center justify-content-center p-3" id="email">
                                <img src="./img/logoEmail.png" alt="Correo electrónico" className="ico-contacto" />
                            </a>
                            <p className="ico-texto p-3" htmlFor="email">e-Mail</p>
                        </div>

                        <div className="col-4 col-lg-2 text-center">
                            <a href="https://www.instagram.com/yoamoahorrar?igsh=aWRyamRqaTNxYjBv" className="d-inline-flex align-items-center justify-content-center p-3" id="instagram">
                                <img src="./img/logoInstagram.png" alt="Instagram" className="ico-contacto" />
                            </a>
                            <p className="ico-texto p-3" htmlFor="instagram">Instagram</p>
                        </div>

                        <div className="col-4 col-lg-2 text-center">
                            <a href="https://www.facebook.com/share/v7myf8hLWtnJAWTE/?mibextid=LQQJ4d" className="d-inline-flex align-items-center justify-content-center p-3" id="facebook">
                                <img src="./img/logoFacebook.png" alt="Facebook" className="ico-contacto" />
                            </a>
                            <p className="ico-texto p-3" htmlFor="facebook">Facebook</p>
                        </div>

                        <div className="col-4 col-lg-2 text-center">
                            <a href="https://g.co/kgs/1Tn6ZRr" className="d-inline-flex align-items-center justify-content-center p-3" id="ubicacion">
                                <img src="./img/logoMaps.png" alt="Ubicación" className="ico-contacto" />
                            </a>
                            <p className="ico-texto p-3" htmlFor="ubicacion">Ubicación</p>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center py-3 align-items-center">
                        <img src="./img/solo-logo.png" alt="Perla Maldonado" className="logo-footer"/>
                        <br />
                        <span className="fw-lighter">2025</span>
                    </div>
                </div>
            </footer>
        </>
    )
}
