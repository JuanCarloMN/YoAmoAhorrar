import Modal from 'react-modal';
import { estiloNotaModal, formularioDatos, notaInicial, validaNota } from "../../../helpers"
import { useClienteStore, useNotaStore, useProspectoStore, useUiStore } from '../../../hooks';
import { useEffect, useState } from 'react';
import { NotasHistoricasPage } from '../secciones';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { el } from 'date-fns/locale';

const customStyles = estiloNotaModal;
const inicioFormulario = formularioDatos;

export const NotaModal = ( { tipo } ) => {
    const [ valoresFormulario, setValoresFormulario ] = useState( inicioFormulario );
    const [ valoresNotas, setValoresNotas ] = useState( notaInicial );
    const [ validacion, setValidacion ] = useState( validaNota );
    const { isNotaModalOpen, closeNotaModal } = useUiStore();
    const { startSalvarNota, startBuscaNotas, starLimpiarNotas } = useNotaStore();
    const { clienteActivo } = useClienteStore();
    const { prospectoActivo } = useProspectoStore();
    const { catalogos } = useSelector( state => state.catalogo );
    const { usuario } = useSelector( state => state.auth );

    const catalogoNotas = catalogos.find( cat => cat.catalogoDescripcion === "Tipos de Nota" ) || { catalogoDatos: [] };

    const onCloseModal = () => {
        setValidacion( validaNota );
        setValoresNotas( notaInicial );
        setValoresFormulario( inicioFormulario );
        starLimpiarNotas();
        closeNotaModal();
    }
    
    const onSubmit = async ( nota ) => {
        nota.preventDefault();        
        setValidacion( validaNota );

        if ( valoresNotas.notaCategoria.length === 0 || valoresNotas.notaCategoria === 'seleccion' ) {
            setValidacion({
                ...validacion,
                validaCategoria: 'is-invalid'
            });
            Swal.fire( 'Información incorrecta', 'Necesitas seleccionar una categoría para la nota', 'error' );
            return;
        }

        if ( valoresNotas.notaDetalle.length < 10 ) {
            setValidacion({
                ...validacion,
                validaDetalle: 'is-invalid'
            });
            Swal.fire( 'Información incorrecta', 'El detalle de la nota debe tener al menos 10 caracteres', 'error' );
            return;
        }

        setValoresNotas({ ...valoresNotas, notaFecha: new Date() } );        
        await startSalvarNota( valoresNotas );
        setValoresNotas( notaInicial );
        setValoresNotas( { ...valoresNotas, notaCategoria: '', notaDetalle: '', notaFecha: new Date() } );
        setValidacion( validaNota );

        // onCloseModal();
    }

    const onInputChange = ({ target }) => {
        let valor = "";
        let campo = "";
        
        if ( target.name === "notaCategoria" ) {
            campo = "validaCategoria";
            if ( target.value === "seleccion" ) {
                valor = "is-invalid";
            } else {
                valor = "";
            }
        }

        if ( target.name === "notaDetalle" ) {
            campo = "validaDetalle";
            if ( target.value.length < 10 ) {
                valor = "is-invalid";
            } else {
                valor = "";
            }
        }

        setValoresNotas({
            ...valoresNotas,
            [ target.name ]: target.value
        });

        setValidacion({
            ...validacion,
            [ campo ]: valor
        });        
    }

    useEffect( () => {     
        if ( tipo === 1 ) {
            if ( clienteActivo !== null ) {
                setValoresFormulario({ ...clienteActivo });
                setValoresNotas( { ...valoresNotas, notaCliente: clienteActivo.datoRFC, notaUsuario: usuario.nombre } );
                startBuscaNotas( clienteActivo.datoRFC );
            } else {
                setValoresFormulario( inicioFormulario );
            }
        } else {
            if ( prospectoActivo !== null ) {
                setValoresFormulario({ ...prospectoActivo });
                setValoresNotas( { ...valoresNotas, notaCliente: prospectoActivo.datoRFC, notaUsuario: usuario.nombre } );
                startBuscaNotas( prospectoActivo.datoRFC );
            } else {
                setValoresFormulario( inicioFormulario );
            }
        }
    }, [ clienteActivo, prospectoActivo ]);
    
    return (
        <Modal isOpen={ isNotaModalOpen } style={ customStyles } overlayClassName="modal-fondo" closeTimeoutMS={ 200 } >
            <form className="container" onSubmit={ onSubmit }>
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-end">
                        <h2>Notas del { tipo === 1 ? "cliente" : "prospecto" }</h2>
                    </div>
                </div>
                <div className="form-group mb-5 card p-3">
                    <div className="row d-flex">
                        <div className="col-3 text-end">
                            { tipo === 1 ? "Cliente" : "Prospecto" }:
                        </div>
                        <div className="col-9">
                            { valoresFormulario.datoNombre + " " + valoresFormulario.datoApellidoP + " " + valoresFormulario.datoApellidoM }
                        </div>
                    </div>
                    <div className="row d-flex mb-3">
                        <div className="col-3 text-end">
                            RFC:
                        </div>
                        <div className="col-9">
                            { valoresFormulario.datoRFC }
                        </div>
                    </div>
                    <div className="row d-flex content-justify-between">
                        <div className="form-floating mb-3">
                            <select className={ `form-select ${ validacion.validaCategoria }` } id="notaCategoria" name='notaCategoria' aria-label="Seleccione la categoría de la nota" value={ valoresNotas.notaCategoria } onChange={ onInputChange } >
                                <option key="0" value="seleccion">Seleccione la categoría de la nota</option>
                                { catalogoNotas.catalogoDatos.map( ( catalogo ) => {
                                    return (
                                        <option key={ catalogo._id } value={ catalogo.descripcion }>
                                            { catalogo.descripcion }
                                        </option>
                                    );
                                })}
                            </select>
                            <label htmlFor="colonia">Categoría de la nota</label>
                        </div>
                    </div>
                    <div className="row d-flex content-justify-between mb-3">
                        <div className="form-floating col">
                            <textarea type="text" className={`notas form-control ${ validacion.validaDetalle }` } placeholder="Detalle de la nota" style={{ height: 120 }} value={ valoresNotas.notaDetalle } onChange={ onInputChange } name="notaDetalle" id='notas' />
                            <label htmlFor="notas">Detalle de la nota</label>
                        </div>
                    </div>
                        <div className="col d-flex justify-content-between">
                            <button type="submit" className="btn btn-outline-primary btn-block me-5">
                                <span> Guardar</span>
                            </button>

                            <button type="button" className="btn btn-outline-secondary btn-block" onClick={ onCloseModal }>
                                <span> Cancelar</span>
                            </button>
                        </div>

                </div>

                <NotasHistoricasPage tipo={ tipo } />
            </form>
        </Modal>
    )
}
