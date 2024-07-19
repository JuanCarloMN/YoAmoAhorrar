import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { useClienteStore, useUiStore } from '../../../hooks';
import { estiloModal, formularioCliente, validacionCliente, validaFormularioCliente } from '../../../helpers';
import { DatosBasicos, DatosContacto, DatosInteres, DatosLaborales, DatosOtros } from '../secciones';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const customStyles = estiloModal;
const inicioValidacion = validacionCliente;
const inicioFormulario = formularioCliente;

export const ClienteModal = () => {
    const [ validaciones, setValidaciones ] = useState( inicioValidacion );
    const [ valoresFormulario, setValoresFormulario ] = useState( inicioFormulario );
    const { isClienteModalOpen, closeClienteModal } = useUiStore();
    const { clienteActivo, startSalvarCliente, setClienteActivo } = useClienteStore();

    const validaCampos = () => {
        let todoBien = true;

        setValidaciones( inicioValidacion );
        validaciones.validaNombre = validaFormularioCliente( valoresFormulario.clienteNombre );
        validaciones.validaRFC = validaFormularioCliente( valoresFormulario.clienteRFC );
        validaciones.validaCURP = validaFormularioCliente( valoresFormulario.clienteCURP );
        validaciones.validaNacimiento = validaFormularioCliente( valoresFormulario.clienteNacimiento );
        validaciones.validaCelular = validaFormularioCliente( valoresFormulario.clienteCelular );
        validaciones.validaEmail = validaFormularioCliente( valoresFormulario.clienteEmail );
        validaciones.validaDireccion = validaFormularioCliente( valoresFormulario.clienteDireccion );
        validaciones.validaCP = validaFormularioCliente( valoresFormulario.clienteCP );

        Object.values( validaciones ).forEach( valor => {
            if ( valor === 'is-invalid' ){
                todoBien = false;
            }
        });

        setValidaciones({
            validaNombre: validaciones.validaNombre,
            validaRFC: validaciones.validaRFC,
            validaCURP: validaciones.validaCURP,
            validaNacimiento: validaciones.validaNacimiento,
            validaCelular: validaciones.validaCelular,
            validaEmail: validaciones.validaEmail,
            validaDireccion: validaciones.validaDireccion,
            validaCP: validaciones.validaCP,
            validaColonia: validaciones.validaColonia,
            validaCiudad: validaciones.validaCiudad,
            validaEstado: validaciones.validaEstado
        });
        return todoBien;
    }

    const onCloseModal = () => {
        setClienteActivo( null );
        setValoresFormulario( inicioFormulario );
        closeClienteModal();
    }

    const onSubmit = async ( cliente ) => {
        cliente.preventDefault();
        
        if ( !validaCampos() ) {
            Swal.fire( 'Información incorrecta', 'Revisar que se haya ingresado la información correcta', 'error' );
            return;
        }
                
        await startSalvarCliente( valoresFormulario );

        setClienteActivo( null );
        setValoresFormulario( inicioFormulario );
        setValidaciones( inicioValidacion );
        closeClienteModal();
    }

    useEffect( () => {
        if ( clienteActivo !== null ) {
            setValoresFormulario({ ...clienteActivo });
        }

        setValidaciones( inicioValidacion );
    }, [ clienteActivo ]);

    return (
        <Modal isOpen={ isClienteModalOpen } style={ customStyles } overlayClassName="modal-fondo" closeTimeoutMS={ 200 } >
            <form className="container" onSubmit={ onSubmit }>
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-end">
                        <h2> { ( clienteActivo?.clienteNombre === '' || clienteActivo?.clienteNombre === undefined ) ? 'Nuevo cliente' : 'Editar cliente: ' + valoresFormulario.clienteNombre }</h2>
                        <div className=" justify-content-between">
                            <button type="submit" className="btn btn-outline-primary btn-block me-5">
                                <span> Guardar</span>
                            </button>

                            <button type="button" className="btn btn-outline-secondary btn-block" onClick={ onCloseModal }>
                                <span> Cancelar</span>
                            </button>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="container border p-3">
                    <div className="accordion accordion-flush " id="clientes">
                        {/* Datos básicos */}
                        <DatosBasicos valoresFormulario={ valoresFormulario } setValoresFormulario={ setValoresFormulario } />

                        {/* Datos de contacto */}
                        <DatosContacto valoresFormulario={ valoresFormulario } setValoresFormulario={ setValoresFormulario } />
                        
                        {/* Datos laborales */}
                        <DatosLaborales valoresFormulario={ valoresFormulario } setValoresFormulario={ setValoresFormulario } />

                        {/* Datos de interés */}
                        <DatosInteres valoresFormulario={ valoresFormulario } setValoresFormulario={ setValoresFormulario } />

                        {/* Otros datos */}
                        <DatosOtros valoresFormulario={ valoresFormulario } setValoresFormulario={ setValoresFormulario } />
                    </div>
                </div>
            </form>
        </Modal>
    )
}
