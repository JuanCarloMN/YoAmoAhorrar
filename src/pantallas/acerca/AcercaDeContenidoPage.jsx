
export const AcercaDeContenidoPage = () => {
    return (
        <div className="container">
            {/* Acerca de */}
            <div className="row acerca-de d-flex align-items-center px-lg-4 mb-5" id="acerca-de">
                <div className="col-lg-5 col foto text-center">
                    <img src="img/perfil.jpg" alt="" className="rounded-circle mb-3 foto" />
                </div>
                
                <div className="col-lg-7 col-12 info">
                    <p className="resumen">¡Hola! Yo soy <b>Perla Maldonado.</b></p>
                    <p className="resumen">Soy especialista en proteger tus finanzas personales, con más de 6 años de experiencia ayudando a personas como tú  a construir un retiro espectacular y a cumplir sus metas financieras para que su “Yo” del futuro, se sienta orgulloso.</p>
                    <p className="resumen">Apasionada por el aprendizaje continuo y comprometida con brindar soluciones personalizadas para cada cliente.</p>
                    <p className="resumen">Viajar es una de mis mayores inspiraciones, lo que me permite entender diversas perspectivas y enriquecer mi enfoque en la asesoría financiera.</p>
                </div>
            </div>

            <hr />
            <div className="row acerca-de d-flex align-items-center px-lg-4 mb-5" id="acerca-de">
                <div className="col-lg-5 col foto text-center ">
                    <img src="img/target.png" alt="" className="mb-3" />
                </div>
                <div className="col-lg-7 col-12 info">
                    <h1>Nuestra misión</h1>
                    <p className="resumen">Asesorar y acompañar a las personas en el conocimiento y manejo de sus finanzas personales.</p>
                    <p className="resumen">Mi misión es hacer accesible la educación financiera, demostrando que no está reservada para quienes ganan mucho dinero, sino que es un hábito al que todos podemos aspirar.</p>
                    <p className="resumen">Busco que mis clientes comprendan su situación actual, definan sus metas a mediano y largo plazo, y cuenten con un plan para alcanzarlas. Mi compromiso es convertir sueños en realidades financieras a través de la planeación, el ahorro, la inversión y la protección adecuada.</p>
                </div>
            </div>

            <hr />
            <div className="row acerca-de d-flex align-items-center px-lg-4 mb-5" id="acerca-de">
                <div className="col-lg-5 col foto text-center">
                    <img src="img/bulb.png" alt="" className="mb-3" />
                </div>
                <div className="col-lg-7 col-12 info">
                    <h1>Nuestra visión</h1>
                    <p className="resumen">Convertirme en referente en asesoría financiera y seguros en México, siendo para mis clientes lo que un médico de cabecera representa para la salud: una asesora de confianza, cercana y siempre presente.</p>
                    <p className="resumen">Quiero trascender de generación en generación, de tal manera que hijos, nietos y amigos de mis clientes me reconozcan como una aliada financiera de por vida</p>
                </div>
            </div>

            <hr />
            <div className="row acerca-de d-flex align-items-center px-lg-4 mb-5" id="acerca-de">
                <div className="col-lg-5 col foto text-center">
                    <img src="img/diamante.png" alt="" className="mb-3 mision" />
                </div>
                <div className="col-lg-7 col-12 info">
                    <h1>Nuestros valores</h1>
                    <div className="resumen">
                        <ul>
                            <li><b>Amor:</b> actuar con conciencia y compromiso genuino, diseñando planes como si fueran para mí misma.</li>
                            <li><b>Profesionalismo:</b> brindar un servicio ético, transparente y de calidad.</li>
                            <li><b>Confianza:</b> crear relaciones sólidas y duraderas basadas en credibilidad.</li>
                            <li><b>Empatía:</b> escuchar y entender las necesidades reales de cada persona.</li>
                            <li><b>Innovación:</b> ofrecer soluciones modernas y creativas en finanzas personales.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-0 align-items-center">
                <hr />
                <img src="../img/solo-logo.png" alt="Perla Maldonado" className="logo-footer"/>
                <br />
                <span className="fw-lighter">2025</span>
            </div>
        </div>
    )
}
