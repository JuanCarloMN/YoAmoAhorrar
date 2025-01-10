import { useState } from "react";
import { useSelector } from "react-redux";
import { validaCampo, validacionDatos } from "../../../helpers";
import ReactInputMask from "react-input-mask";
import DatePicker from 'react-datepicker';

import Swal from "sweetalert2";
const inicioValidacion = validacionDatos;
const anoActual = new Date().getFullYear() - 2000;

export const DatosBasicos = ( { valoresFormulario, setValoresFormulario } ) => {

    const [ validaciones, setValidaciones ] = useState( inicioValidacion );
    const { catalogos } = useSelector( state => state.catalogo );

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

    const onCURPChange = ({ target }) => {
        const valor = target.value;

        setValoresFormulario({
            ...valoresFormulario,
            [ target.name ]: valor.toUpperCase()
        });

        setValidaciones({
            ...validaciones,
            [ 'validaCURP' ]: ( valor ) ? '' : 'is-invalid'
        });
    }

    const onRFCChange = ({ target }) => {
        const valor = target.value;

        if ( valor.length >= 11 ) {
            const ano = (( parseInt(valor.substr( 5, 2 )) > anoActual ) ? '19' : '20') + valor.substr( 5, 2 );
            const mes = valor.substr( 7, 2 );
            const dia = valor.substr( 9, 2 );
            
            if ( mes === '00' || mes > '12' || dia === '00' || dia > '31' ) {
                Swal.fire( 'RFC incorrecto', 'Revisar las fechas ingresadas en el RFC', 'error' );
                return;
            }

            setValoresFormulario({
                ...valoresFormulario,
                [ target.name ]: valor.toUpperCase(),
                [ "datoNacimiento" ]: new Date( ano + '/' + mes + '/' + dia ),
                [ "datoCURP" ]: valor.substr( 0, 4 ) + valor.substr( 5, 6 ),
            })
        } else {
            setValoresFormulario({
                ...valoresFormulario,
                [ target.name ]: valor.toUpperCase(),
            });
        }

        setValidaciones({
            ...validaciones,
            [ 'validaRFC' ]: ( valor ) ? '' : 'is-invalid'
        });
    }

    const onNacimientoChanged = ( fecha, changing ) => {
        setValoresFormulario({
            ...valoresFormulario,
            [ changing ]: fecha
        });
    }

    return (
        <div className="accordion-item border mb-2">
            <div className="accordion-header" >
                <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#datosBasicos" aria-expanded="false" aria-controls="datosBasicos" >
                    <div className="col card-title text-start">
                        <strong>Datos básicos</strong>
                    </div>
                </button>
            </div>
            <div id="datosBasicos" className="accordion-collapse collapse show" data-bs-parent="#datos">
                <div className="accordion-body me-2">
                    <div className="form-group d-flex mt-2 mb-0 justify-content-between">    
                        <div className="form-floating me-2 col-4">
                            <input type="text" className={ `form-control ${ validaciones.validaNombre }` } placeholder="Nombre(s)" autoComplete="on" value={ valoresFormulario.datoNombre } onChange={ onInputChange } name="datoNombre" id='nombre' />
                            <label htmlFor="nombre">Nombre(s)</label>
                        </div>
                        <div className="form-floating me-2 col-4">
                            <input type="text" className="form-control" placeholder="Apellido paterno" autoComplete="on" value={ valoresFormulario.datoApellidoP } onChange={ onInputChange } name="datoApellidoP" id='paterno' />
                            <label htmlFor="paterno">Apellido paterno</label>
                        </div>
                        <div className="form-floating col-4">
                            <input type="text" className="form-control" placeholder="Apellido materno" autoComplete="on" value={ valoresFormulario.datoApellidoM } onChange={ onInputChange } name="datoApellidoM" id='materno' />
                            <label htmlFor="materno">Apellido materno</label>
                        </div>
                    </div>
                    <div className="form-group d-flex justify-content-between mt-2 align-items-end">
                        <div className="form-floating me-2 col-4">
                            <ReactInputMask  type="text"  className={ `form-control ${ validaciones.validaRFC }` } mask="aaaa-999999-***" maskChar="" placeholder="RFC" autoComplete="on" value={ valoresFormulario.datoRFC } onChange={ onRFCChange } name="datoRFC" id='rfc' />
                            <label htmlFor="rfc">RFC</label>
                        </div>
                        <div className="form-floating me-2 col-4">
                            <ReactInputMask type="text"  className={ `form-control ${ validaciones.validaCURP }` } mask="aaaa999999aaaaaa**" maskChar="" placeholder="CURP" autoComplete="on" value={ valoresFormulario.datoCURP } onChange={ onCURPChange } name="datoCURP" id='curp' />
                            <label htmlFor="curp">CURP</label>
                        </div>
                        <div className="form-item col-4 ">
                            <label className="form-label" htmlFor="nacimiento" >Fecha de nacimiento</label>
                            <DatePicker selected={ (valoresFormulario.datoNacimiento) } onChange={ ( fecha ) => onNacimientoChanged( fecha, 'datoNacimiento' ) } dateFormat="dd-MMM-yyyy" wrapperClassName="datePicker" maxDate={ new Date() } dropdownMode="select" className={ `form-control ${ validaciones.validaNacimiento }` } locale="es" registerLocale name="datoNacimiento" id='nacimiento' popperPlacement="top-start" placeholder="Fecha de nacimiento" />
                        </div>
                    </div>
                    <div className="form-group d-flex justify-content-between mt-3 align-items-end">
                        <div className="form-floating me-2 col-4">
                            <select className="form-select" id="colonia" name='datoEstadoCivil' aria-label="Seleccione el estado civil" value={ valoresFormulario.datoEstadoCivil } onChange={ onInputChange } >
                                <option key="0" value="seleccion">Seleccione el estado civil</option>
                                { catalogos[0].catalogoDatos.map( ( catalogo ) => {
                                    return (
                                        <option key={ catalogo._id } value={ catalogo.descripcion }>
                                            { catalogo.descripcion }
                                        </option>
                                    );
                                })}
                            </select>
                            <label htmlFor="colonia">Estado Civil</label>
                        </div>
                        <div className="form-floating me-2 col-4">
                            <select className="form-select" id="ciudad" name='datoSexo' aria-label="Seleccione el sexo" value={ valoresFormulario.datoSexo } onChange={ onInputChange } >
                                <option key="0" value="seleccion">Seleccione el sexo</option>
                                <option key="1" value="Hombre">Hombre</option>
                                <option key="2" value="Mujer">Mujer</option>
                                <option key="3" value="Otro">Otro</option>
                            </select>
                            <label htmlFor="ciudad">Sexo</label>
                        </div>
                        <div className="form-floating col-4">
                            <select className="form-select" id="estado" name='datoEscolaridad' aria-label="Seleccione la escolaridad" value={ valoresFormulario.datoEscolaridad } onChange={ onInputChange } >
                                <option key="0" value="seleccion">Seleccione la escolaridad</option>
                                { catalogos[4].catalogoDatos.map( ( catalogo ) => {
                                    return (
                                        <option key={ catalogo._id } value={ catalogo.descripcion }>
                                            { catalogo.descripcion }
                                        </option>
                                    );
                                })}
                            </select>
                            <label htmlFor="estado">Escolaridad</label>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

