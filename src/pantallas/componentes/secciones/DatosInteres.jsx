import { useState } from "react";
import { validaCampoCliente, validacionCliente } from "../../../helpers";

const inicioValidacion = validacionCliente;
export const DatosInteres = ( { valoresFormulario, setValoresFormulario } ) => {
    const [ validaciones, setValidaciones ] = useState( inicioValidacion );

    const onInputChange = ({ target }) => {
        const valor = ( target.value ) ? '' : 'is-invalid'
        const campoValida = validaCampoCliente( target.name );

        setValoresFormulario({
            ...valoresFormulario,
            [ target.name ]: target.value
        });

        setValidaciones({
            ...validaciones,
            [ campoValida ]: valor
        });
    }

    return (
        <div className="accordion-item border mb-2">
            <div className="accordion-header" id="seccionInteres" >
                <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#datosInteres" aria-expanded="false" aria-controls="datosInteres" >
                    <div className="col card-title text-start">
                        <strong className='mt-2'>Datos de interés</strong>
                    </div>
                </button>
            </div>
            <div id="datosInteres" className="accordion-collapse collapse" aria-labelledby="seccionInteres" data-bs-parent="#clientes">
                <div className="accordion-body me-2">
                    <div className="form-group d-flex mt-2 mb-0 justify-content-between">    
                        <div className="form-floating me-2 col-4">
                            <input type="text" className="form-control" placeholder="Número de hijos" autoComplete="on" value={ valoresFormulario.clienteHijos } onChange={ onInputChange } name="clienteHijos" id='hijos' />
                            <label htmlFor="hijos">Número de hijos</label>
                        </div>
                        <div className="form-floating me-2 col-4">
                            <input type="text" className="form-control" placeholder="Tipo de vivienda" autoComplete="on" value={ valoresFormulario.clienteVivienda } onChange={ onInputChange } name="clienteVivienda" id='vivienda' />
                            <label htmlFor="vivienda">Tipo de vivienda</label>
                        </div>
                        <div className="form-floating col-4">
                            <input type="text" className="form-control" placeholder="Antigüedad" autoComplete="on" value={ valoresFormulario.clienteAntiguedad } onChange={ onInputChange } name="clienteAntiguedad" id='antiguedad' />
                            <label htmlFor="antiguedad">Antigüedad</label>
                        </div>
                    </div>
                    <div className="form-group d-flex mt-2 mb-0 p-0 justify-content-between">
                        <div className="form-floating me-2 col-4">
                            <input type="text" className="form-control" placeholder="Pasatiempo" autoComplete="on" value={ valoresFormulario.clientePasatiempo } onChange={ onInputChange } name="clientePasatiempo" id='pasatiempo' />
                            <label htmlFor="pasatiempo">Pasatiempo</label>
                        </div>
                        <div className="form-floating me-2 col-4">
                            <input type="text" className="form-control" placeholder="Mascotas" autoComplete="on" value={ valoresFormulario.clienteMascotas } onChange={ onInputChange } name="clienteMascotas" id='mascotas' />
                            <label htmlFor="mascotas">Mascotas</label>
                        </div>
                        <div className="form-floating col-4">
                        <input type="text" className="form-control" placeholder="Deporte favorito" autoComplete="on" value={ valoresFormulario.clienteDeporte } onChange={ onInputChange } name="clienteDeporte" id='deporte' />
                        <label htmlFor="deporte">Deporte favorito</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
