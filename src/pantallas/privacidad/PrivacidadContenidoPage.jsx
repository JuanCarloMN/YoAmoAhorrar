const anio = new Date().getFullYear();

export const PrivacidadContenidoPage = () => {
    return (
        <div className="container">
            {/* <h2><i>AVISO DE PRIVACIDAD</i></h2> */}
            <p><b>Perla Maldonado</b> | Planeación de Retiro & Finanzas Inteligentes</p>
            <h3>1. Responsable del tratamiento de datos personales</h3>
            <p>Perla Gabriela Maldonado Granados, con sitio web <b><a href="https://perlamaldonado.com" target="_blank" className="email table-light">https://perlamaldonado.com</a></b>, es responsable del uso y protección de sus datos personales, y al respecto le informa lo siguiente:</p>
            <hr />
            <h3>2. Datos personales que se recaban</h3>
            <p>Para brindarle un servicio adecuado de análisis financiero, planeación patrimonial y asesoría en seguros, podremos recabar las siguientes categorías de datos:</p>
            <p>•	Datos de identificación (nombre, edad, estado civil, etc.)</p>
            <p>•	Datos de contacto (teléfono, correo electrónico, domicilio)</p>
            <p>•	Datos familiares y laborales</p>
            <p>•	Datos financieros y patrimoniales (ingresos, bienes, deudas, inversiones, seguros)</p>
            <p>•	Información necesaria para elaborar su <b>Radiografía Financiera Personal</b></p><br />
            <p>No se solicitarán datos personales sensibles sin su consentimiento expreso.</p>
            <hr />
            <h3>3. Finalidades del tratamiento de sus datos</h3>
            <p>Sus datos personales serán utilizados para:</p>
            <h5>Finalidades primarias (necesarias)</h5>
            <p>•	Elaborar diagnósticos y análisis financieros personalizados</p>
            <p>•	Diseñar estrategias de protección, ahorro, inversión y retiro</p>
            <p>•	Brindar asesoría en seguros y planeación patrimonial</p>
            <p>•	Dar seguimiento a solicitudes, cotizaciones o contrataciones</p>
            <p>•	Cumplir obligaciones legales y regulatorias aplicables</p><br />
            <h5>Finalidades secundarias (no necesarias)</h5>
            <p>•	Contactarle para información educativa, financiera o promocional</p>
            <p>•	Invitarle a eventos, talleres o contenidos de educación financiera</p><br />
            <p>Usted puede oponerse al uso de sus datos para finalidades secundarias enviando un correo a:</p>
            <p><b><a href="mailto:asesoria@perlamaldonado.com" className="email table-light">asesoria@perlamaldonado.com</a></b></p>
            <hr />
            <h3>4. Transferencia de datos</h3>
            <p>Sus datos personales no serán vendidos ni compartidos con terceros ajenos a la prestación del servicio.</p>
            <p>Únicamente podrán compartirse, cuando sea necesario:</p>
            <p>•	Con compañías aseguradoras o instituciones financieras para cotizaciones o contrataciones solicitadas por usted</p>
            <p>•	Con autoridades competentes cuando exista obligación legal</p><br />
            <p>En todos los casos, se mantendrán medidas de confidencialidad y protección.</p>
            <hr />
            <h3>5. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</h3>
            <p>Usted tiene derecho a:</p>
            <p>•	Acceder a sus datos personales</p>
            <p>•	Rectificarlos si son inexactos o incompletos</p>
            <p>•	Cancelarlos cuando considere que no se requieren</p>
            <p>•	Oponerse a su uso para fines específicos</p><br />
            <p>Para ejercer sus derechos ARCO, envíe una solicitud al correo:</p>
            <p><b><a href="mailto:asesoria@perlamaldonado.com" className="email table-light">asesoria@perlamaldonado.com</a></b></p><br />
            <p>La solicitud deberá incluir:</p>
            <p>•	Nombre completo</p>
            <p>•	Medio de contacto</p>
            <p>•	Descripción clara de la solicitud</p><br />
            <p>Recibirá respuesta dentro de los plazos legales aplicables.</p>
            <hr />
            <h3>6. Uso de cookies y tecnologías de rastreo</h3>
            <p>El sitio web podrá utilizar cookies u otras tecnologías para:</p>
            <p>•	Mejorar la experiencia de navegación</p>
            <p>•	Analizar el uso del sitio</p>
            <p>•	Ofrecer contenido relevante</p><br />
            <p>Usted puede deshabilitar las cookies desde su navegador.</p>
            <hr />
            <h3>7. Medidas de seguridad</h3>
            <p>Se han implementado medidas administrativas, técnicas y físicas para proteger sus datos personales contra:</p>
            <p>•	Daño</p>
            <p>•	Pérdida</p>
            <p>•	Alteración</p>
            <p>•	Uso no autorizado</p><br />
            <p>Su información será tratada con estricta confidencialidad.</p>
            <hr />
            <h3>8. Cambios al aviso de privacidad</h3>
            <p>Este aviso puede actualizarse en cualquier momento para cumplir con cambios legales o de operación.</p>
            <p>Las modificaciones estarán disponibles en:</p>
            <p><b><a href="https://perlamaldonado.com" target="_blank" className="email table-light">https://perlamaldonado.com</a></b></p>
            <hr />
            <h3>9. Consentimiento</h3>
            <p>Al proporcionar sus datos personales por cualquier medio, usted acepta el presente Aviso de Privacidad.</p>
            <hr />

            <div className="text-center p-0 align-items-center">
                <img src="../img/solo-logo.png" alt="Perla Maldonado" className="logo-footer"/>
                <br />
                <span className="fw-lighter">{ anio }</span>
            </div>
        </div>
    )
}
