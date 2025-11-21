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
                    <input type="text" className={`form-control ` + claseNombre } placeholder="Nombre completo" autoComplete="on" name="perfilNombre" id='nombre' value={ valoresFormulario.perfilNombre } onChange={ onInputChange } />
                </div>
                <div className="mb-2">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" className={`form-control ` + claseEmail } placeholder="Correo electrónico" autoComplete="on" name="perfilEmail" id='email' value={ valoresFormulario.perfilEmail } onChange={ onInputChange } />
                </div>
                <div className="mb-2">
                    <label htmlFor="celular">WhatsApp / Teléfono:</label>
                    <ReactInputMask type="text" className={`form-control ` + claseTelefono } placeholder="Celular" mask="999-9999-999" maskChar="" autoComplete="on" name="perfilTelefono" id='celular' value={ valoresFormulario.perfilTelefono } onChange={ onInputChange } />
                </div>
                <div className="mb-2">
                    <label htmlFor="income">Ingreso mensual aproximado:</label>
                    <select className="form-select" id="ingreso" name='perfilIngresos' aria-label="Seleccione el ingreso" onChange={ onInputChange } value={ valoresFormulario.perfilIngresos }>
                        <option value="0">Selecciona</option>
                        <option value="1">$30,000 – $49,999</option>
                        <option value="2">$50,000 – $79,999</option>
                        <option value="3">$80,000 – $129,999</option>
                        <option value="4">$130,000 o más</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label htmlFor="goal">Objetivo principal de inversión:</label>
                    <select className="form-select" id="objetivo" name='perfilObjetivo' aria-label="Seleccione el objetivo" onChange={ onInputChange } value={ valoresFormulario.perfilObjetivo }>
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
                    <input type="web" className="form-control" placeholder="Sitio Web" autoComplete="on" name="perfilSitioWeb" id='web' value={ valoresFormulario.perfilSitioWeb } onChange={ onInputChange } />
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
                    <p><i>AVISO DE PRIVACIDAD</i></p>
                    <p><b>Yo Amo Ahorrar</b>, comercialmente conocido como <b>Yo Amo Ahorrar</b>, con domicilio en <b>Ciudad de México</b>, es el responsable del uso y protección de sus datos personales.</p><br />
                    <p><b>FINALIDADES PRIMARIAS</b></p>
                    <p>Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:</p>
                    <p>• Asesoramiento en temas de finanzas</p>
                    <p>• Prestación de cualquier servicio solicitado</p><br />
                    <p><b>DATOS PERSONALES RECABADOS</b></p>
                    <p>Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos de identificación y contacto, datos laborales, datos académicos, datos patrimoniales y/o financieros, datos sobre pasatiempos.</p><br />
                    <p><b>DERECHOS ARCO</b></p>
                    <p>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.</p>
                    <p>Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del mismo correo electrónico con el que se hizo la solicitud. La respuesta a su solicitud será atendida en un plazo máximo de 15 días hábiles.</p><br />
                    <p><b>DATOS RECABADOS POR EL SITIO WEB</b></p>
                    <p>Nuestro sitio web recaba automáticamente los siguientes datos:</p>
                    <p>• Ningún dato se recaba automáticamente</p><br />
                    <p><b>CONTACTO</b></p>
                    <p>Para más información sobre este aviso de privacidad, puede contactarnos en:</p><br />
                    <p>Sitio web: <a href="https://perlamaldonado.com/">https://perlamaldonado.com/</a></p><br />
                    <p className="blockquote-footer">Última actualización: 21/11/2025</p><br />
                    <p className="text-center"><button className="boton-seccion" type="button" onClick={ () => avisoPrivacidad( false ) }>Cerrar aviso de privacidad</button></p>
                </div>
            </div>
        </>
    )
}
