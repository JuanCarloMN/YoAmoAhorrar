import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { validaCampo, validacionDatos } from "../../../helpers";

const inicioValidacion = validacionDatos;
export const DatosOtros = ( { valoresFormulario, setValoresFormulario } ) => {
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

    const onDesdeChanged = ( fecha, changing ) => {
        setValoresFormulario({
            ...valoresFormulario,
            [ changing ]: fecha
        });
    }

    return (
        <div className="accordion-item border">
            <div className="accordion-header" id="seccionOtros" >
                <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#datosOtros" aria-expanded="false" aria-controls="datosOtros" >
                    <div className="col card-title text-start">
                        <strong className='mt-2'>Otros datos</strong>
                    </div>
                </button>
            </div>
            <div id="datosOtros" className="accordion-collapse collapse" aria-labelledby="seccionOtros" data-bs-parent="#datos">
                <div className="accordion-body me-2">
                    <div className="form-group d-flex justify-content-between align-items-end me-3">
                        <div className="form-item me-3 col-6 ">
                            <div className="form-item mb-2">
                                <label className="form-label" htmlFor="desde" >Cliente desde</label>
                                <ReactDatePicker 
                                    selected={  valoresFormulario.datoDesde }
                                    onChange={ ( fecha ) => onDesdeChanged( fecha, 'datoDesde' ) }
                                    dateFormat="dd-MMM-yyyy"
                                    wrapperClassName="datePicker"
                                    maxDate={ new Date() }
                                    dropdownMode="select"
                                    className="form-control"
                                    locale="es"
                                    registerLocale
                                    name="clienteDesde"
                                    id='desde'
                                    popperPlacement="top-start"
                                    placeholder="Cliente desde"
                                />
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" placeholder="¿Quién lo refirió?" autoComplete="on" value={ valoresFormulario.datoReferido } onChange={ onInputChange } name="datoReferido" id='referido' />
                                <label htmlFor="referido">¿Quién lo refirió?</label>
                            </div>
                        </div>

                        <div className="form-floating col-6">
                            <textarea type="text" className="notas form-control" placeholder="Notas" style={{ height: 120 }} value={ valoresFormulario.datoNotas } onChange={ onInputChange } name="datoNotas" id='notas' />
                            <label htmlFor="notas">Notas</label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
