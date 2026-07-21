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
                            <p className="resumen">Hola, soy <b>Perla Maldonado.</b></p>
                            <p className="resumen">Soy mamá, esposa, emprendedora y una apasionada del aprendizaje. Me encanta viajar, descubrir nuevos lugares, disfrutar de la música y asistir a conciertos. Creo que cada experiencia nos enseña algo y nos ayuda a crecer.</p>
                            <p className="resumen">Desde hace ocho años acompaño a personas y familias a organizar sus finanzas, proteger su patrimonio, invertir con estrategia y planear un retiro con propósito.</p>
                            <p className="resumen">Estudié Administración y Finanzas y actualmente curso la certificación internacional FSCP (Financial Services Certified Professional®️) de The American College of Financial Services, porque estoy convencida de que aprender constantemente es la mejor forma de brindar una asesoría de alto nivel.</p>
                            <p className="resumen">Mi filosofía es muy sencilla: las finanzas son para todos. No importa cuánto ganes, sino las decisiones que tomas con tu dinero.</p>
                            <p className="resumen">Mi compromiso es ayudarte a construir una relación sana con tus finanzas para que puedas disfrutar el presente mientras construyes el futuro que deseas.</p>
                            <p className="resumen">Porque el dinero, por sí solo, no cambia tu vida. Las decisiones que tomas con él, sí.</p>
                            <div className="d-flex justify-content-center">
                                <a className="boton-seccion"href="acerca">Ver más...</a>
                            </div>
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
