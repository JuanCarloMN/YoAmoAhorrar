const anio = new Date().getFullYear();

export const AcercaDeContenidoPage = () => {
    return (
        <div className="container">
            {/* Acerca de */}
            <div className="row acerca-de d-flex align-items-center px-lg-4 mb-5" id="acerca-de">
                <div className="col-lg-5 col foto text-center">
                    <img src="img/perfil.jpg" alt="" className="rounded-circle mb-3 foto" />
                </div>
                
                <div className="col-lg-7 col-12 info">
                    <p className="resumen">Hola, soy <b>Perla Maldonado.</b></p>
                    <p className="resumen">Soy mamá, esposa, emprendedora y una apasionada del aprendizaje. Me encanta viajar, descubrir nuevos lugares, disfrutar de la música y asistir a conciertos. Creo que cada experiencia nos enseña algo y nos ayuda a crecer.</p>
                    <p className="resumen">Desde hace ocho años acompaño a personas y familias a organizar sus finanzas, proteger su patrimonio, invertir con estrategia y planear un retiro con propósito.</p>
                    <p className="resumen">Estudié Administración y Finanzas y actualmente curso la certificación internacional FSCP (Financial Services Certified Professional®️) de The American College of Financial Services, porque estoy convencida de que aprender constantemente es la mejor forma de brindar una asesoría de alto nivel.</p>
                    <p className="resumen">Mi filosofía es muy sencilla: las finanzas son para todos. No importa cuánto ganes, sino las decisiones que tomas con tu dinero.</p>
                    <p className="resumen">Mi compromiso es ayudarte a construir una relación sana con tus finanzas para que puedas disfrutar el presente mientras construyes el futuro que deseas.</p>
                    <p className="resumen">Porque el dinero, por sí solo, no cambia tu vida. Las decisiones que tomas con él, sí.</p>
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
                <span className="fw-lighter">{ anio }</span>
            </div>
        </div>
    )
}
