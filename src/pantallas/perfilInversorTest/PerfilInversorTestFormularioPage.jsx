import { useEffect, useState } from "react";
import ReactInputMask from "react-input-mask";

export const PerfilInversorTestFormularioPage = ( { valoresFormulario, enviarPropuesta, onInputChange, claseEmail, claseNombre, claseTelefono }) => {
    const [ aviso, setAviso ] = useState( false );

    
    const avisoPrivacidad = ( valor ) => {
        setAviso( valor );
    }

    useEffect( () => {
        setAviso( false );
    }, [] );
    
    return (
        <>
        <div className="border rounded p-2 formulario-perfil">
            <h3 >¿Quieres tu estrategia a la medida?</h3>
            <p className="muted" >Déjame tus datos y recibe una propuesta alineada a tu perfil y metas.</p>
            <form id="lead" >
                <div className="mb-2">
                    <label htmlFor="nombre">Nombre completo:</label>
                    <input type="text" className={`form-control ` + claseNombre } placeholder="Nombre completo" autoComplete="on" name="perfilNombre" id='nombre' value={ valoresFormulario.perfilNombre || '' } onChange={ onInputChange } />
                </div>
                <div className="mb-2">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" className={`form-control ` + claseEmail } placeholder="Correo electrónico" autoComplete="on" name="perfilEmail" id='email' value={ valoresFormulario.perfilEmail || '' } onChange={ onInputChange } />
                </div>
                <div className="mb-2">
                    <label htmlFor="celular">WhatsApp / Teléfono:</label>
                    <ReactInputMask type="text" className={`form-control ` + claseTelefono } placeholder="Celular" mask="999-9999-999" maskChar="" autoComplete="on" name="perfilTelefono" id='celular' value={ valoresFormulario.perfilTelefono || '' } onChange={ onInputChange } />
                </div>
                <div className="mb-2">
                    <label htmlFor="income">Ingreso mensual aproximado:</label>
                    <select className="form-select" id="ingreso" name='perfilIngresos' aria-label="Seleccione el ingreso" onChange={ onInputChange } value={ valoresFormulario.perfilIngresos || '' }>
                        <option value="0">Selecciona</option>
                        <option value="1">$30,000 – $49,999</option>
                        <option value="2">$50,000 – $79,999</option>
                        <option value="3">$80,000 – $129,999</option>
                        <option value="4">$130,000 o más</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label htmlFor="goal">Objetivo principal de inversión:</label>
                    <select className="form-select" id="objetivo" name='perfilObjetivo' aria-label="Seleccione el objetivo" onChange={ onInputChange } value={ valoresFormulario.perfilObjetivo || '' }>
                        <option value="0">Selecciona</option>
                        <option value="1">Fondo de emergencia</option>
                        <option value="2">Ahorro para retiro</option>
                        <option value="3">Educación de hijos</option>
                        <option value="4">Crecer patrimonio</option>
                        <option value="5">Otro</option>
                    </select>
                </div>
                <div className="mb-2 hidden" aria-hidden="true">
                    <label htmlFor="web">Tu sitio Web:</label>
                    <input type="web" className="form-control" placeholder="Sitio Web" autoComplete="on" name="perfilSitioWeb" id='web' value={ valoresFormulario.perfilSitioWeb || '' } onChange={ onInputChange } />
                </div>
                <div className="check d-flex" >
                    <input type="checkbox" id="consent" required name="perfilPrivacidad" onChange={ onInputChange } checked={ valoresFormulario.perfilPrivacidad } />
                    <label className="text-muted p-1" htmlFor="consent">Acepto el aviso de privacidad y autorizo me contacten</label>
                </div>
                <div className="actions d-flex justify-content-center my-3">
                    <div className="row text-center">
                        <div className="col ">
                            <button className="boton-seccion" type="button" onClick={ () => avisoPrivacidad( true ) } >Ver aviso de privacidad</button>
                            <br /><br />
                            <button className="boton-seccion" type="button" onClick={ enviarPropuesta }>Recibir mi propuesta</button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            <div className="row mt-3 border rounded" hidden={ aviso ? '' : 'hidden' } >
                <div className="col text-justify">
                    <h2><i>AVISO DE PRIVACIDAD</i></h2>
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
                    <p className="text-center"><button className="boton-seccion" type="button" onClick={ () => avisoPrivacidad( false ) }>Cerrar aviso de privacidad</button></p>
                </div>
            </div>
        </>
    )
}
