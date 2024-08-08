import { useState } from "react";
import { validaCampo, validacionDatos } from "../../../helpers";

const inicioValidacion = validacionDatos;
export const DatosInteres = ( { valoresFormulario, setValoresFormulario } ) => {
    const [ validaciones, setValidaciones ] = useState( inicioValidacion );

    const onInputChange = ({ target }) => {
        const valor = ( target.value ) ? '' : 'is-invalid'
        const campoValida = validaCampo( target.name );

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
            <div id="datosInteres" className="accordion-collapse collapse" aria-labelledby="seccionInteres" data-bs-parent="#datos">
                <div className="accordion-body me-2">
                    <div className="form-group d-flex mt-2 mb-0 justify-content-between">    
                        <div className="form-floating me-2 col-4">
                            <input type="text" className="form-control" placeholder="Conyugue" autoComplete="on" value={ valoresFormulario.datoConyugue } onChange={ onInputChange } name="datoConyugue" id='conyugue' />
                            <label htmlFor="antiguedad">Conyugue</label>
                        </div>
                        <div className="form-floating me-2 col-4">
                            <input type="text" className="form-control" placeholder="Número de hijos" autoComplete="on" value={ valoresFormulario.datoNumeroHijos } onChange={ onInputChange } name="datoNumeroHijos" id='hijos' />
                            <label htmlFor="hijos">Número de hijos</label>
                        </div>
                        <div className="form-floating col-4">
                            <input type="text" className="form-control" placeholder="Tipo de vivienda" autoComplete="on" value={ valoresFormulario.datoTipoVivienda } onChange={ onInputChange } name="datoTipoVivienda" id='vivienda' />
                            <label htmlFor="vivienda">Tipo de vivienda</label>
                        </div>
                    </div>
                    <div className="form-group d-flex mt-2 mb-0 p-0 justify-content-between">
                        <div className="form-floating me-2 col-4">
                            <input type="text" className="form-control" placeholder="Pasatiempo" autoComplete="on" value={ valoresFormulario.datoPasatiempo } onChange={ onInputChange } name="datoPasatiempo" id='pasatiempo' />
                            <label htmlFor="pasatiempo">Pasatiempo</label>
                        </div>
                        <div className="form-floating me-2 col-4">
                            <input type="text" className="form-control" placeholder="Mascotas" autoComplete="on" value={ valoresFormulario.datoMascotas } onChange={ onInputChange } name="datoMascotas" id='mascotas' />
                            <label htmlFor="mascotas">Mascotas</label>
                        </div>
                        <div className="form-floating col-4">
                        <input type="text" className="form-control" placeholder="Deporte favorito" autoComplete="on" value={ valoresFormulario.datoDeporte } onChange={ onInputChange } name="datoDeporte" id='deporte' />
                        <label htmlFor="deporte">Deporte favorito</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
