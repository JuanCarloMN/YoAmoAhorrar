import { useState } from "react";
import { validaCampoCliente, validacionCliente } from "../../../helpers";

const inicioValidacion = validacionCliente;
export const DatosLaborales = ( { valoresFormulario, setValoresFormulario } ) => {
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
                <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#datosLaborales" aria-expanded="false" aria-controls="datosLaborales" >
                    <div className="col card-title text-start">
                        <strong className='mt-2'>Datos Laborales</strong>
                    </div>
                </button>
            </div>
            <div id="datosLaborales" className="accordion-collapse collapse" aria-labelledby="seccionInteres" data-bs-parent="#clientes">
                <div className="accordion-body me-2">
                    <div className="form-group d-flex justify-content-between mt-2">
                        <div className="form-floating me-2 col-4">
                            <input type="text" className="form-control" placeholder="Empresa donde trabaja" autoComplete="on" value={ valoresFormulario.clienteEmpresa } onChange={ onInputChange } name="clienteEmpresa" id='empresa' />
                            <label htmlFor="empresa">Empresa donde trabaja</label>
                        </div>
                        <div className="form-floating me-2 col-4">
                            <input type="text" className="form-control" placeholder="Puesto" autoComplete="on" value={ valoresFormulario.clientePuesto } onChange={ onInputChange } name="clientePuesto" id='puesto' />
                            <label htmlFor="puesto">Puesto</label>
                        </div>
                        <div className="form-floating col-4">
                            <input type="text" className="form-control" placeholder="Antigüedad" autoComplete="on" value={ valoresFormulario.clienteAntiguedad } onChange={ onInputChange } name="clienteAntiguedad" id='antiguedad' />
                            <label htmlFor="antiguedad">Antigüedad</label>
                        </div>
                    </div>
                    <div className="form-group d-flex justify-content-between mt-2">
                        <div className="form-floating col-12">
                            <input type="text" className="form-control" placeholder="Actividades que desempeña" autoComplete="on" value={ valoresFormulario.clienteActividades } onChange={ onInputChange } name="clienteActividades" id='actividades' />
                            <label htmlFor="actividades">Actividades que desempeña</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
