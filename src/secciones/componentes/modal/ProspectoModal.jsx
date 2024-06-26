import { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal';
import ReactInputMask from 'react-input-mask';

import { useProspectoStore, useUiStore } from '../../../hooks';
import DatePicker, { registerLocale } from 'react-datepicker';
import { infoCP } from '../../../helpers';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// registerLocale('es', es );
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '800px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const anoActual = new Date().getFullYear() - 2000;
export const ProspectoModal = () => {

    const [ formSubmitted, setFormSubmitted ] = useState( false );
    const [ ciudades, setCiudades ] = useState([['0','Seleccione la ciudad', 'Seleccione el estado']]);
    const [ colonias, setColonias ] = useState([['0', 'Seleccione la colonia']]);

    const { isProspectoModalOpen, closeProspectoModal } = useUiStore();
    const { prospectoActivo, startSalvarProspecto, setProspectoActivo } = useProspectoStore();

    const [ valoresFormulario, setValoresFormulario ] = useState({
        prospectoNombre: '',
        prospectoApellidoP: '',
        prospectoApellidoM: '',
        prospectoRFC: '',
        prospectoCURP: '',
        prospectoNacimiento: new Date(),
        prospectoCelular: '',
        prospectoTelefono: '',
        prospectoEmail: '',
        prospectoDireccion: '',
        prospectoCP: '',
        prospectoColonia: '',
        prospectoCiudad: '',
        prospectoEstado: '',
        prospectoDesde: new Date(),
        prospectoReferido: '',
        prospectoNotas: ''
    });

    const claseValidacion = useMemo( () => {
        if ( !formSubmitted ) return '';

        return ( valoresFormulario.prospectoNombre.length > 0 )
            ? ''
            : 'is-invalid'

    }, [ valoresFormulario.prospectoNombre, formSubmitted ]);

    const onInputChange = ({ target }) => {
        setValoresFormulario({
            ...valoresFormulario,
            [ target.name ]: target.value
        })
    }

    const onCURPChange = ({ target }) => {
        const valor = target.value;

        setValoresFormulario({
            ...valoresFormulario,
            [ target.name ]: valor.toUpperCase()
        })
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
                [ "prospectoNacimiento" ]: new Date( ano + '/' + mes + '/' + dia ),
                [ "prospectoCURP" ]: valor.substr( 0, 4 ) + valor.substr( 5, 6 ),
            })
        } else {
            setValoresFormulario({
                ...valoresFormulario,
                [ target.name ]: valor.toUpperCase(),
            })
        }
    }

    const onCPChange = ({ target }) => {
        setValoresFormulario({
            ...valoresFormulario,
            [ target.name ]: target.value
        })
        
        setCiudades( infoCP( 1, parseInt(target.value)) );
        setColonias( infoCP( 2, parseInt(target.value)) );
    }

    const onDateChanged = ( evento, changing ) => {
        setValoresFormulario({
            ...valoresFormulario,
            [ changing ]: evento
        })
    }

    const onCloseModal = () => {
        setProspectoActivo( null );
        setValoresFormulario({});
        closeProspectoModal();
    }

    const onSubmit = async ( prospecto ) => {
        prospecto.preventDefault();
        setFormSubmitted( true );
        
        if ( valoresFormulario.prospectoNombre.length <= 0 ) return;

        await startSalvarProspecto( valoresFormulario );

        setFormSubmitted( false );
        setProspectoActivo( null );
        setValoresFormulario({});
        closeProspectoModal();
    }

    useEffect( () => {
        if ( prospectoActivo !== null ) {
            setValoresFormulario({ ...prospectoActivo });
        }
    }, [ prospectoActivo ]);

    return (
        <Modal
            isOpen={ isProspectoModalOpen }
            style={ customStyles }
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }
        >
            <h1 className='mt-0'> { ( prospectoActivo?.prospectoNombre === '' || prospectoActivo?.prospectoNombre === undefined ) ? 'Nuevo' : 'Editar' } prospecto </h1>
            <hr className='mt-0'/>

            <form className="container" onSubmit={ onSubmit }>
                <h5 className='ms-2 mb-0'>Datos del prospecto</h5>
                <div className="form-group d-flex p-2 mb-0 justify-content-between">    
                    <div className="form-floating me-2 col-4">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Nombre(s)"
                            autoComplete="on"
                            value={ valoresFormulario.prospectoNombre }
                            onChange={ onInputChange }
                            name="prospectoNombre"
                            id='nombre'
                        />
                        <label htmlFor="nombre">Nombre(s)</label>
                    </div>
                    <div className="form-floating me-2 col-4">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Apellido paterno"
                            autoComplete="on"
                            value={ valoresFormulario.prospectoApellidoP }
                            onChange={ onInputChange }
                            name="prospectoApellidoP"
                            id='paterno'
                        />
                        <label htmlFor="paterno">Apellido paterno</label>
                    </div>
                    <div className="form-floating col-4">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Apellido materno"
                            autoComplete="on"
                            value={ valoresFormulario.prospectoApellidoM }
                            onChange={ onInputChange }
                            name="prospectoApellidoM"
                            id='materno'
                        />
                        <label htmlFor="materno">Apellido materno</label>
                    </div>
                </div>
                <div className="form-group d-flex justify-content-between p-2 align-items-end">
                    <div className="form-floating me-2 col-4">
                        <ReactInputMask 
                            type="text" 
                            className="form-control"
                            mask="aaaa-999999-***"
                            maskChar=""
                            placeholder="RFC"
                            autoComplete="on"
                            value={ valoresFormulario.prospectoRFC }
                            onChange={ onRFCChange }
                            name="prospectoRFC"
                            id='rfc'
                        />
                        <label htmlFor="rfc">RFC</label>
                    </div>
                    <div className="form-floating me-2 col-4">
                        <ReactInputMask 
                            type="text" 
                            className="form-control"
                            mask="aaaa999999aaaaaa**"
                            maskChar=""
                            placeholder="CURP"
                            autoComplete="on"
                            value={ valoresFormulario.prospectoCURP }
                            onChange={ onCURPChange }
                            name="prospectoCURP"
                            id='curp'
                        />
                        <label htmlFor="curp">CURP</label>
                    </div>
                    <div className="form-item col-4 mt-0 mb-0 ">
                        <label className="form-label mt-0 mb-0" htmlFor="nacimiento" >Fecha de nacimiento</label>
                        <DatePicker 
                            selected={  valoresFormulario.prospectoNacimiento }
                            onChange={ ( evento ) => onDateChanged( evento, 'prospectoNacimiento' ) }
                            dateFormat="dd-MMM-yyyy"
                            wrapperClassName="datePicker"
                            // showMonthDropdown
                            // showYearDropdown
                            maxDate={ new Date() }
                            dropdownMode="select"
                            className="form-control"
                            locale="es"
                            registerLocale
                            name="prospectoNacimiento"
                            id='nacimiento'
                            popperPlacement="top-start"
                            placeholder="Fecha de nacimiento"
                        />
                    </div>
                </div>
                <hr className='mt-1 mb-2' />

                <h5 className='ms-2 mb-0'>Datos de contacto</h5>
                <div className="form-group d-flex justify-content-between p-2 align-items-center">
                    <div className="form-floating me-2 col-3">
                        <ReactInputMask 
                            type="text" 
                            className="form-control"
                            placeholder="Celular"
                            mask="999-9999-999"
                            maskChar=""
                            autoComplete="on"
                            value={ valoresFormulario.prospectoCelular }
                            onChange={ onInputChange }
                            name="prospectoCelular"
                            id='celular'
                        />
                        <label htmlFor="celular">Celular</label>
                    </div>
                    <div className="form-floating me-2 col-3">
                        <ReactInputMask 
                            type="text" 
                            className="form-control"
                            placeholder="Teléfono fijo"
                            mask="999-9999-999"
                            maskChar=""
                            autoComplete="on"
                            value={ valoresFormulario.prospectoTelefono }
                            onChange={ onInputChange }
                            name="prospectoTelefono"
                            id='telefono'
                        />
                        <label htmlFor="telefono">Teléfono fijo</label>
                    </div>
                    <div className="form-floating me-2 col-6">
                        <input 
                            type="email" 
                            className="form-control"
                            placeholder="Correo electrónico"
                            autoComplete="on"
                            value={ valoresFormulario.prospectoEmail }
                            onChange={ onInputChange }
                            name="prospectoEmail"
                            id='email'
                        />
                        <label htmlFor="email">Correo electrónico</label>
                    </div>
                </div>
                <div className="form-group d-flex justify-content-between p-2 align-items-center">

                    <div className="form-floating me-2 col-10">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Direccion"
                            autoComplete="on"
                            value={ valoresFormulario.prospectoDireccion }
                            onChange={ onInputChange }
                            name="prospectoDireccion"
                            id='direccion'
                        />
                        <label htmlFor="direccion">Direccion</label>
                    </div>
                    <div className="form-floating col-2">
                        <ReactInputMask
                            type="text" 
                            className="form-control"
                            placeholder="Código Postal"
                            mask="999999"
                            maskChar=""
                            autoComplete="on"
                            value={ valoresFormulario.prospectoCP }
                            onChange={ onCPChange }
                            name="prospectoCP"
                            id='cp'
                        />
                        <label htmlFor="cp">C. P.</label>
                    </div>
                </div>
                <div className="form-group d-flex justify-content-between p-2 align-items-center">

                    <div className="form-floating me-2 col-4">
                        <select className="form-select" id="colonia" name='prospectoColonia' aria-label="Seleccione la colonia" value={ valoresFormulario.prospectoColonia } onChange={ onInputChange } >

                            {/* <option key={ 0 } value={ 0 } >Seleccione la colonia</option> */}
                            { colonias.map( ( colonia ) => {
                                return (
                                    <option key={ colonia[1] } value={ colonia[1] }>
                                        { colonia[1] }
                                    </option>
                                );
                            })}
                        </select>
                        <label htmlFor="colonia">Colonia</label>
                    </div>

                    <div className="form-floating me-2 col-4">
                        <select className="form-select" id="ciudad" name='prospectoCiudad' aria-label="Seleccione la ciudad" value={ valoresFormulario.prospectoCiudad } onChange={ onInputChange } >

                            {/* <option key={ 0 } value={ 0 } >Seleccione la ciudad</option> */}
                            { ciudades.map( ( ciudad ) => {
                                return (
                                    <option key={ ciudad[1] } value={ ciudad[1] }>
                                        { ciudad[1] }
                                    </option>
                                );
                            })}
                        </select>
                        <label htmlFor="ciudad">Ciudad</label>
                    </div>

                    <div className="form-floating me-2 col-4">
                        <select className="form-select" id="estado" name='prospectoEstado' aria-label="Seleccione el estado" value={ valoresFormulario.prospectoEstado } onChange={ onInputChange } >

                            {/* <option key={ 0 } value={ 0 } >Seleccione el estado</option> */}
                            { ciudades.map( ( ciudad ) => {
                                return (
                                    <option key={ ciudad[2] } value={ ciudad[2] }>
                                        { ciudad[2] }
                                    </option>
                                );
                            })}
                        </select>
                        <label htmlFor="estado">Estado</label>
                    </div>
                </div>
                <hr className='mt-1 mb-2' />

                <h5 className='ms-2 mb-0'>Otros datos</h5>
                <div className="form-group d-flex justify-content-between align-items-end">
                    <div className="form-item col-6 ">
                        <div className="form-item p-2 ">
                            <label className="form-label mt-0 mb-0" htmlFor="desde" >Prospecto desde</label>
                            <DatePicker 
                                selected={  valoresFormulario.prospectoDesde }
                                onChange={ ( evento ) => onDateChanged( evento, 'prospectoDesde' ) }
                                dateFormat="dd-MMM-yyyy"
                                wrapperClassName="datePicker"
                                maxDate={ new Date() }
                                dropdownMode="select"
                                className="form-control"
                                locale="es"
                                registerLocale
                                name="prospectoDesde"
                                id='desde'
                                popperPlacement="top-start"
                                placeholder="Prospecto desde"
                            />
                        </div>
                        <div className="form-floating p-2">
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="¿Quién lo refirió?"
                                autoComplete="on"
                                value={ valoresFormulario.prospectoReferido }
                                onChange={ onInputChange }
                                name="prospectoReferido"
                                id='referido'
                            />
                            <label htmlFor="referido">¿Quién lo refirió?</label>
                        </div>
                    </div>

                    <div className="form-floating p-2 col-6">
                        <textarea 
                            type="text" 
                            className="notas form-control"
                            placeholder="Notas"
                            style={{ height: 120 }}
                            value={ valoresFormulario.prospectoNotas }
                            onChange={ onInputChange }
                            name="prospectoNotas"
                            id='notas'
                        ></textarea>
                        <label htmlFor="notas">Notas</label>
                    </div>

                </div>
                <hr className='mt-2 mb-3' />

                <div className="d-flex justify-content-between">
                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <span> Guardar</span>
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline-secondary btn-block"
                        onClick={ onCloseModal }
                    >
                        <span> Cancelar</span>
                    </button>
                </div>
            </form>
        </Modal>
    )
}

