import { useState } from "react";
import { validaCampo, validacionDatos } from "../../../helpers";

const inicioValidacion = validacionDatos;
export const DatosLaborales = ( { valoresFormulario, setValoresFormulario } ) => {
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
                <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#datosLaborales" aria-expanded="false" aria-controls="datosLaborales" >
                    <div className="col card-title text-start">
                        <strong className='mt-2'>Datos Laborales</strong>
                    </div>
                </button>
            </div>
            <div id="datosLaborales" className="accordion-collapse collapse" aria-labelledby="seccionInteres" data-bs-parent="#datos">
                <div className="accordion-body me-2">
                    <div className="form-group d-flex justify-content-between mt-2">
                        <div className="form-floating me-2 col-4">
                            <input type="text" className="form-control" autoComplete="on" value={ valoresFormulario.datoEmpresa } onChange={ onInputChange } name="datoEmpresa" />
                            <label htmlFor="empresa">Empresa donde trabaja</label>
                        </div>
                        <div className="form-floating me-2 col-4">
                            <input type="text" className="form-control" autoComplete="on" value={ valoresFormulario.datoPuesto } onChange={ onInputChange } name="datoPuesto" />
                            <label htmlFor="puesto">Puesto</label>
                        </div>
                        <div className="form-floating col-4">
                            <input type="text" className="form-control" autoComplete="on" value={ valoresFormulario.datoAntiguedad } onChange={ onInputChange } name="datoAntiguedad" />
                            <label htmlFor="antiguedad">Antigüedad</label>
                        </div>
                    </div>
                    <div className="form-group d-flex justify-content-between mt-2">
                        <div className="form-floating col-12">
                            <input type="text" className="form-control" autoComplete="on" value={ valoresFormulario.datoActividades } onChange={ onInputChange } name="datoActividades" />
                            <label htmlFor="actividades">Actividades que desempeña</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
