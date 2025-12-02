import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { useCatalogoStore, useProspectoStore, useUiStore } from '../../../hooks';
import { cambiaCampos, estiloModal, formularioDatos, validacionDatos, validaFormulario } from '../../../helpers';
import { DatosBasicos, DatosContacto, DatosInteres, DatosLaborales, DatosOtros } from '../secciones';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const customStyles = estiloModal;
const inicioValidacion = validacionDatos;
const inicioFormulario = formularioDatos;

export const ProspectoModal = () => {
    const [ validaciones, setValidaciones ] = useState( inicioValidacion );
    const [ valoresFormulario, setValoresFormulario ] = useState( inicioFormulario );
    const [ estadoCivil, setEstadoCivil ] = useState([{_id: '0', descripcion: ''}]);
    const [ escolaridad, setEscolaridad ] = useState([{_id: '0', descripcion: ''}]);
    const { isProspectoModalOpen, closeProspectoModal } = useUiStore();
    const { prospectoActivo, startSalvarProspecto, setProspectoActivo } = useProspectoStore();
    const { catalogos } = useCatalogoStore();
    
    const validaCampos = () => {
        let todoBien = true;

        setValidaciones( {} );
        validaciones.validaNombre = validaFormulario( valoresFormulario.datoNombre );
        validaciones.validaRFC = validaFormulario( valoresFormulario.datoRFC );
        validaciones.validaCURP = validaFormulario( valoresFormulario.datoCURP );
        validaciones.validaNacimiento = validaFormulario( valoresFormulario.datoNacimiento );
        validaciones.validaCelular = validaFormulario( valoresFormulario.datoCelular );
        validaciones.validaEmail = validaFormulario( valoresFormulario.datoEmail );
        validaciones.validaDireccion = validaFormulario( valoresFormulario.datoDireccion );
        validaciones.validaCP = validaFormulario( valoresFormulario.datoCP );

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
        setProspectoActivo( null );
        setValoresFormulario( inicioFormulario );
        setValidaciones( inicioValidacion );
        closeProspectoModal();
    }

    const onSubmit = async ( prospecto ) => {
        prospecto.preventDefault();

        if ( !validaCampos() ) {
            Swal.fire( 'Información incorrecta', 'Revisar que se haya ingresado la información correcta', 'error' );
            return;
        }

        const datoActivo = await cambiaCampos( valoresFormulario, 3 );
        await startSalvarProspecto( datoActivo );
        setProspectoActivo( null );
        setValoresFormulario( inicioFormulario );
        setValidaciones( inicioValidacion );
        closeProspectoModal();
    }
    
    useEffect( () => {        
        if ( prospectoActivo !== null ) {
            setValoresFormulario({ ...prospectoActivo });            
        } else {
            setValoresFormulario( inicioFormulario )
        }

        setValidaciones( inicioValidacion );
    }, [ prospectoActivo ]);

    useEffect( () => {
        const estados = catalogos.find( catalogo => catalogo.catalogoDescripcion === 'Estado Civil')?.catalogoDatos || [];
        setEstadoCivil( estados );     

        const escolaridad = catalogos.find( catalogo => catalogo.catalogoDescripcion === 'Escolaridad')?.catalogoDatos || [];
        setEscolaridad( escolaridad );
    }, [ catalogos ]);

    return (
        <Modal isOpen={ isProspectoModalOpen } style={ customStyles } overlayClassName="modal-fondo" closeTimeoutMS={ 200 } >
            <form className="container" onSubmit={ onSubmit }>
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-end">
                        <h2> { ( prospectoActivo?.datoNombre === '' || prospectoActivo?.datoNombre === undefined ) ? 'Nuevo prospecto' : 'Editar prospecto: ' + prospectoActivo?.datoNombre } </h2>
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
                    <div className="accordion accordion-flush " id="datos">
                        {/* Datos básicos */}
                        <DatosBasicos valoresFormulario={ valoresFormulario } setValoresFormulario={ setValoresFormulario } estadoCivil={ estadoCivil } escolaridad={ escolaridad } />

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
