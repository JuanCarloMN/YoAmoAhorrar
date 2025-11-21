import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { useCatalogoStore, usePolizaStore, useUiStore } from "../../../hooks";
import { estiloModal, polizaInicial, validaPoliza, validaFormulario } from "../../../helpers";
import { PolizaDatosDetalle, PolizaDatosCliente } from '../secciones';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const customStyles = estiloModal;

export const PolizaModal = () => {
    const { isPolizaModalOpen, closePolizaModal } = useUiStore();
    const { polizaActiva, startSalvarPoliza, setPolizaActiva, startBuscaPoliza } = usePolizaStore();
    const { catalogos } = useCatalogoStore();
    
    const [ valoresFormulario, setValoresFormulario ] = useState( polizaInicial );
    const [ validaciones, setValidaciones ] = useState( validaPoliza );

    const [ tipoPoliza, setTipoPoliza ] = useState([{_id: '0', descripcion: ''}]);
    const [ tipoPago, setTipoPago ] = useState([{_id: '0', descripcion: ''}]);
    const [ tipoMoneda, setTipoMoneda ] = useState([{_id: '0', descripcion: ''}]);
    const [ aseguradoras, setAseguradoras ] = useState([{_id: '0', descripcion: ''}]);
    const [ estatus, setEstatus ] = useState([{_id: '0', descripcion: ''}]);

    const onCloseModal = () => {
        setPolizaActiva( null );
        setValoresFormulario( polizaInicial );
        setValidaciones( validaPoliza );
        closePolizaModal();
    }

    const validaCampos = () => {
        let todoBien = true;

        setValidaciones( {} );
        validaciones.validaClave = validaFormulario( valoresFormulario.polizaClave ),
        validaciones.validaTipo = validaFormulario( valoresFormulario.polizaTipo ),
        validaciones.validaTipoMoneda = validaFormulario( valoresFormulario.polizaTipoMoneda ),
        validaciones.validaMonto = validaFormulario( valoresFormulario.polizaMonto ),
        validaciones.validaFecha = validaFormulario( valoresFormulario.polizaFecha ),
        validaciones.validaCliente = validaFormulario( valoresFormulario.polizaCliente ),
        validaciones.validaAsesor = validaFormulario( valoresFormulario.polizaAsesor ),
        validaciones.validaAseguradora = validaFormulario( valoresFormulario.polizaAseguradora ),
        validaciones.validaEstatus = validaFormulario( valoresFormulario.polizaEstatus ),

        Object.values( validaciones ).forEach( valor => {
            if ( valor === 'is-invalid' ){
                todoBien = false;
            }
        });

        setValidaciones({
            validaClave: validaciones.validaClave,
            validaTipo: validaciones.validaTipo,
            validaTipoMoneda: validaciones.validaTipoMoneda,
            validaMonto: validaciones.validaMonto,
            validaFecha: validaciones.validaFecha,
            validaCliente: validaciones.validaCliente,
            validaAsesor: validaciones.validaAsesor,
            validaAseguradora: validaciones.validaAseguradora,
            validaEstatus: validaciones.validaEstatus,
        });
        
        return todoBien;
    }

    const onSubmit = async ( poliza ) => {
        poliza.preventDefault();

        if ( !validaCampos() ) {
            Swal.fire( 'Información incorrecta', 'Revisar que se haya ingresado la información correcta', 'error' );
            return;
        }

        await startSalvarPoliza( valoresFormulario );
        setPolizaActiva( null );
        setValoresFormulario( polizaInicial );
        setValidaciones( validaPoliza );
        closePolizaModal();
    }

    useEffect( () => {        
        if ( polizaActiva !== null ) {
            setValoresFormulario({ ...polizaActiva });
        } else {
            setValoresFormulario( polizaInicial )
        }

        setValidaciones( validaPoliza );
    }, [ polizaActiva ]);

    useEffect( () => {
        const tipo = catalogos.find( catalogo => catalogo.catalogoDescripcion === 'Tipos de Póliza')?.catalogoDatos || [];
        setTipoPoliza( tipo );

        const pago = catalogos.find( catalogo => catalogo.catalogoDescripcion === 'Tipos de Pago')?.catalogoDatos || [];
        setTipoPago( pago );

        const moneda = catalogos.find( catalogo => catalogo.catalogoDescripcion === 'Tipos de Moneda')?.catalogoDatos || [];
        setTipoMoneda( moneda );

        const aseguradora = catalogos.find( catalogo => catalogo.catalogoDescripcion === 'Aseguradoras')?.catalogoDatos || [];
        setAseguradoras( aseguradora );

        const estatu = catalogos.find( catalogo => catalogo.catalogoDescripcion === 'Tipos de Estatus')?.catalogoDatos || [];
        setEstatus( estatu );
    }, [ catalogos ]);

    return (
        <Modal isOpen={ isPolizaModalOpen } style={ customStyles } overlayClassName="modal-fondo" closeTimeoutMS={ 200 } >
            <form className="container" onSubmit={ onSubmit }>
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-end">
                        <h2> { ( polizaActiva?.polizaClave === '' || polizaActiva?.polizaClave === undefined ) ? 'Nueva póliza' : 'Editar póliza: ' + valoresFormulario.polizaClave }</h2>
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
                        {/* Datos básicos del cliente */}
                        <PolizaDatosCliente valoresFormulario={ valoresFormulario } setValoresFormulario={ setValoresFormulario } validaciones={ validaciones } setValidaciones={ setValidaciones } polizaActiva={ polizaActiva } />

                        {/* Datos de la póliza */}
                        <PolizaDatosDetalle valoresFormulario={ valoresFormulario } setValoresFormulario={ setValoresFormulario } validaciones={ validaciones } setValidaciones={ setValidaciones } startBuscaPoliza={ startBuscaPoliza } polizaActiva={ polizaActiva } tipoPoliza={ tipoPoliza } tipoMoneda={ tipoMoneda } tipoPago={ tipoPago} estatus={ estatus } aseguradoras={ aseguradoras } />
                    </div>
                </div>
            </form>
        </Modal>
    )
}
