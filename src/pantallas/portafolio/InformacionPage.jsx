import { ContactamePage } from "./ContactamePage"

export const InformacionPage = () => {
    return (
        <>
            <main>
                <div className="container">
                    {/* Acerca de */}
                    <div className="row acerca-de align-items-center px-lg-4 mb-5" id="acerca-de">
                        <div className="col-lg-5 col foto text-center">
                            <img src="img/perfil.jpg" alt="" className="rounded-circle mb-3 foto" />
                        </div>
                        
                        <div className="col-lg-7 col-12 info">
                            <h2 className="titulo text-center text-lg-start">Acerca de</h2>
                            <p className="resumen">¡Hola! Yo soy <b>Perla Maldonado.</b></p>
                            <p className="resumen">Soy especialista en proteger tus finanzas personales, con más de 6 años de experiencia ayudando a personas como tú  a construir un retiro espectacular y a cumplir sus metas financieras para que su “Yo” del futuro, se sienta orgulloso.</p>
                            <p className="resumen">Apasionada por el aprendizaje continuo y comprometida con brindar soluciones personalizadas para cada cliente.</p>
                            <p className="resumen">Viajar es una de mis mayores inspiraciones, lo que me permite entender diversas perspectivas y enriquecer mi enfoque en la asesoría financiera.</p>
                        </div>
                    </div>

                    {/* Graficas UDI y Dolar */}
                    {/* <div className="row acerca-de align-items-center mb-5 flex justify-content-between" id="graficas">
                        <div className="col-12 col-lg-6 px-lg-2 px-3 mb-4 mb-lg-0">
                            <GraficaUDIPage />
                        </div>
                        <div className="col-12 col-lg-6 px-lg-2 px-3 mb-4 mb-lg-0">
                            <GraficaDolarPage />
                        </div>
                    </div> */}
                    
                    {/* Contactame */}
                    <ContactamePage />
                </div>
            </main>
        </>
    )
}
