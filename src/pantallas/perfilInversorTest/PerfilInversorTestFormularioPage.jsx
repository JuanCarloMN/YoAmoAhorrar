import ReactInputMask from "react-input-mask";

export const PerfilInversorTestFormularioPage = ( { valoresFormulario, enviarPropuesta, onInputChange, claseEmail, claseNombre, claseTelefono }) => {

    return (
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
                    <label className="text-muted p-1" htmlFor="consent">Acepto el <a href="/aviso-de-privacidad" target="_blank" rel="noopener" >aviso de privacidad</a> y autorizo me contacten</label>
                </div>
                <div className="actions d-flex justify-content-center my-3">
                    <button className="boton-seccion" type="button" onClick={ enviarPropuesta }>Recibir mi propuesta</button>
                </div>
                {/* <p id="leadMsg" className="hint" aria-live="polite"></p> */}
            </form>
            {/* <p className="small">Tip: También puedes enviarme WhatsApp con tu resultado 👉 
                <a id="waLink" href="#" target="_blank" rel="noopener" >Abrir WhatsApp</a>
            </p> */}
        </div>
    )
}
