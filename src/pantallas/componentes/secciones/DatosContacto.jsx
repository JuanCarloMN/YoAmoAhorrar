import { useEffect, useState } from "react";
import { buscaCodigoPostal, inicioCP, validaCampo, validacionDatos } from "../../../helpers";
import ReactInputMask from "react-input-mask";

const inicioValidacion = validacionDatos;
export const DatosContacto = ( { valoresFormulario, setValoresFormulario } ) => {

    const [ validaciones, setValidaciones ] = useState( inicioValidacion );
    const [ codigosPostales, setCodigosPostales ] = useState( inicioCP )
    let { colonias, ciudades, estados } = codigosPostales;
    let contadorColonia = 0;
        
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

    const onCPChange = async ({ target }) => {        
        setValoresFormulario({
            ...valoresFormulario,
            [ target.name ]: target.value,
            [ 'datoColonia' ]: '',
            [ 'datoCiudad' ]: '',
            [ 'datoEstado' ]: ''
        })
        
        
        setCodigosPostales( inicioCP );
        
        if ( target.value < 1000 ){
            return
        }

        const codigoPostal = await buscaCodigoPostal( parseInt( target.value ) );
        contadorColonia = 0
        colonias = [[0, 'Seleccione la colonia']];

        if ( codigoPostal.length > 0 ) {
            codigoPostal[0].colonias.map( colonia => {
                contadorColonia++;
                colonias.push([ contadorColonia, colonia ]);
            })

            setCodigosPostales({
                ciudades: [[0, 'Seleccione la ciudad'], [1, codigoPostal[0].ciudad]], 
                estados: [[0, 'Seleccione el estado'], [1, codigoPostal[0].estado]],
                colonias: colonias
            })
        }

        setValidaciones({
            ...validaciones,
            [ 'validaCP' ]: ( target.value ) ? '' : 'is-invalid'
        });
    }

    useEffect(() => {
        if (contadorColonia > 0) return;

        if ( valoresFormulario.datoCiudad ) {
            setCodigosPostales({
                colonias: [[0, 'Seleccione la colonia'], [1, valoresFormulario.datoColonia]],
                ciudades: [[0, 'Seleccione la ciudad'], [1, valoresFormulario.datoCiudad]],
                estados: [[0, 'Seleccione el estado'], [1, valoresFormulario.datoEstado]]
            })
        }
    }, [valoresFormulario.datoCP])

    return (
        <div className="accordion-item border mb-2">
            <div className="accordion-header" id="seccionContacto" >
                <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#datosContacto" aria-expanded="false" aria-controls="datosContacto" >
                    <div className="col card-title text-start">
                    <strong className="mt-2">Datos de contacto</strong>
                    </div>
                </button>
            </div>
            <div id="datosContacto" className="accordion-collapse collapse" aria-labelledby="seccionContacto" data-bs-parent="#datos">
                <div className="accordion-body me-2">
                    <div className="form-group d-flex justify-content-between mt-2 align-items-center">
                        <div className="form-floating me-2 col-3">
                            <ReactInputMask type="text" className={ `form-control ${ validaciones.validaCelular }` } placeholder="Celular" mask="999-9999-999" maskChar="" autoComplete="on" value={ valoresFormulario.datoCelular } onChange={ onInputChange } name="datoCelular" id='celular' />
                            <label htmlFor="celular">Celular</label>
                        </div>
                        <div className="form-floating me-2 col-3">
                            <ReactInputMask type="text" className="form-control" placeholder="Teléfono fijo" mask="999-9999-999" maskChar="" autoComplete="on" value={ valoresFormulario.datoTelefono } onChange={ onInputChange } name="datoTelefono" id='telefono' />
                            <label htmlFor="telefono">Teléfono fijo</label>
                        </div>
                        <div className="form-floating col-6">
                            <input type="email" className={ `form-control ${ validaciones.validaEmail }` } placeholder="Correo electrónico" autoComplete="on" value={ valoresFormulario.datoEmail } onChange={ onInputChange } name="datoEmail" id='email' />
                            <label htmlFor="email">Correo electrónico</label>
                        </div>
                    </div>
                    <div className="form-group d-flex justify-content-between mt-2 align-items-center">
                        <div className="form-floating me-3 col-10">
                            <input type="text" className={ `form-control ${ validaciones.validaDireccion }` } placeholder="Direccion" autoComplete="on" value={ valoresFormulario.datoDireccion } onChange={ onInputChange } name="datoDireccion" id='direccion' />
                            <label htmlFor="direccion">Direccion</label>
                        </div>
                        <div className="form-floating col-2">
                            <ReactInputMask type="text" className={ `form-control ${ validaciones.validaCP }` } placeholder="Código Postal" mask="999999" maskChar="" autoComplete="on" value={ valoresFormulario.datoCP } onChange={ onCPChange } name="datoCP" id='cp' />
                            <label htmlFor="cp">C. P.</label>
                        </div>
                    </div>
                    <div className="form-group d-flex justify-content-between mt-2 align-items-center">
                        <div className="form-floating me-2 col-4">
                            <select className="form-select" id="colonia" name='datoColonia' aria-label="Seleccione la colonia" value={ valoresFormulario.datoColonia } onChange={ onInputChange } >
                                { colonias.map( ( colonia ) => {
                                    return (
                                        <option key={ colonia[0] } value={ colonia[1] }>
                                            { colonia[1] }
                                        </option>
                                    );
                                })}
                            </select>
                            <label htmlFor="colonia">Colonia</label>
                        </div>
                        <div className="form-floating me-2 col-4">
                            <select className="form-select" id="ciudad" name='datoCiudad' aria-label="Seleccione la ciudad" value={ valoresFormulario.datoCiudad } onChange={ onInputChange } >
                                { ciudades.map( ( ciudad ) => {
                                    return (
                                        <option key={ ciudad[0] } value={ ciudad[1] }>
                                            { ciudad[1] }
                                        </option>
                                    );
                                })}
                            </select>
                            <label htmlFor="ciudad">Ciudad</label>
                        </div>
                        <div className="form-floating col-4">
                            <select className="form-select" id="estado" name='datoEstado' aria-label="Seleccione el estado" value={ valoresFormulario.datoEstado } onChange={ onInputChange } >
                                { estados.map( ( estado ) => {
                                    return (
                                        <option key={ estado[0] } value={ estado[1] }>
                                            { estado[1] }
                                        </option>
                                    );
                                })}
                            </select>
                            <label htmlFor="estado">Estado</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

