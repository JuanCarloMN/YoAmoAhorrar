
export const PiePage = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row redes-sociales justify-content-center me-3">
                        <div className="col-4 col-lg-2 text-center">
                            <a href="tel:5530411016" className="d-inline-flex align-items-center justify-content-center p-3" id="llamar">
                                <img src="./img/logoTelefono.png" alt="Llamar" className="ico-contacto" />
                            </a>
                            <label className="ico-contacto" htmlFor="llmar">Teléfono</label>
                        </div>
                        <div className="col-4 col-lg-2 text-center">
                            <a href="https://api.whatsapp.com/send/?phone=5215530411016" className="d-inline-flex align-items-center justify-content-center p-3" id="whatsapp">
                                <img src="./img/logoWhatsapp.png" alt="Whatsapp" className="ico-contacto" />
                            </a>
                            <label className="ico-contacto " htmlFor="whatsapp">Whatsapp</label>
                        </div>
                            
                        <div className="col-4 col-lg-2 text-center">
                            <a href="mailto:asesoria.perlamaldonado@gmail.com" className="d-inline-flex align-items-center justify-content-center p-3" id="email">
                                <img src="./img/logoEmail.png" alt="Correo electrónico" className="ico-contacto" />
                            </a>
                            <label className="ico-contacto" htmlFor="email">eMail</label>
                        </div>

                        <div className="col-4 col-lg-2 text-center">
                            <a href="https://www.instagram.com/yoamoahorrar?igsh=aWRyamRqaTNxYjBv" className="d-inline-flex align-items-center justify-content-center p-3" id="instagram">
                                <img src="./img/logoInstagram.png" alt="Instagram" className="ico-contacto" />
                            </a>
                            <label className="ico-contacto" htmlFor="instagram">Instagram</label>
                        </div>

                        <div className="col-4 col-lg-2 text-center">
                            <a href="https://www.facebook.com/share/v7myf8hLWtnJAWTE/?mibextid=LQQJ4d" className="d-inline-flex align-items-center justify-content-center p-3" id="facebook">
                                <img src="./img/logoFacebook.png" alt="Facebook" className="ico-contacto" />
                            </a>
                            <label className="ico-contacto" htmlFor="facebook">Facebook</label>
                        </div>

                        <div className="col-4 col-lg-2 text-center">
                            <a href="https://g.co/kgs/1Tn6ZRr" className="d-inline-flex align-items-center justify-content-center p-3" id="ubicacion">
                                <img src="./img/logoMaps.png" alt="Ubicación" className="ico-contacto" />
                            </a>
                            <label className="ico-contacto" htmlFor="ubicacion">Ubicación</label>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

