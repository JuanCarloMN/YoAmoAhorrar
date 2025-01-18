

import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ReactDatePicker from "react-datepicker";

import { estiloModal, noticiaInicial, validaCampo, validaFormulario, validaNoticia } from '../../helpers';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useNoticiaStore, useUiStore } from '../../hooks';

const customStyles = estiloModal;
const inicioValidacion = validaNoticia;
const inicioFormulario = noticiaInicial;

export const NoticiasModal = () => {
    const [ validaciones, setValidaciones ] = useState( inicioValidacion );
    const [ valoresFormulario, setValoresFormulario ] = useState( inicioFormulario );
    const { isNoticiaModalOpen, closeNoticiaModal } = useUiStore();
    const { noticiaActiva, startSalvarNoticia, setNoticiaActiva } = useNoticiaStore();

    const validaCampos = () => {
        let todoBien = true;

        setValidaciones( {} );
        validaciones.validaTitulo = validaFormulario( valoresFormulario.noticiaTitulo );
        validaciones.validaCategoria = validaFormulario( valoresFormulario.noticiaCategoria );
        validaciones.validaDetalle = validaFormulario( valoresFormulario.noticiaDetalle );
        validaciones.validaUsuario = validaFormulario( valoresFormulario.noticiaUsuario );

        Object.values( validaciones ).forEach( valor => {
            if ( valor === 'is-invalid' ){
                todoBien = false;
            }
        });

        setValidaciones({
            validaTitulo: validaciones.validaTitulo,
            validaCategoria: validaciones.validaCategoria,
            validaDetalle: validaciones.validaDetalle,
            validaUsuario: validaciones.validaUsuario
        });
        return todoBien;
    }

    const onCloseModal = () => {
        setNoticiaActiva( null );
        closeNoticiaModal();
    }

    const onSubmit = async ( noticia ) => {
        noticia.preventDefault();

        if ( !validaCampos() ) {
            Swal.fire( 'Información incorrecta', 'Revisar que se haya ingresado la información correcta', 'error' );
            return;
        }

        await startSalvarNoticia( valoresFormulario );
        setNoticiaActiva( null );
        setValoresFormulario( inicioFormulario );
        setValidaciones( inicioValidacion );
        closeNoticiaModal();
    }

    const onFechaChanged = ( fecha, changing ) => {
        setValoresFormulario({
            ...valoresFormulario,
            [ changing ]: fecha
        });
    }

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
    
    useEffect( () => {
        if ( noticiaActiva !== null ) {
            setValoresFormulario({ ...noticiaActiva });
        } else {
            setValoresFormulario( inicioFormulario )
        }

        setValidaciones( inicioValidacion );
    }, [ noticiaActiva ]);

    return (
        <Modal isOpen={ isNoticiaModalOpen } style={ customStyles } overlayClassName="modal-fondo" closeTimeoutMS={ 200 } >
            <form className="container" onSubmit={ onSubmit }>
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-end">
                        <h2>{ ( noticiaActiva?.noticiaTitulo === '' || noticiaActiva?.noticiaTitulo === undefined ) ? 'Nueva entrada' : 'Editar entrada' }</h2>
                        <div className=" justify-content-between">
                            <button type="submit" className="btn btn-outline-primary btn-block me-5">
                                <span> Guardar</span>
                            </button>

                            <button type="button" className="btn btn-outline-secondary btn-block" onClick={ onCloseModal } >
                                <span> Cancelar</span>
                            </button>
                        </div>
                    </div>
                </div>
                <hr />

                <div className='container border p-3' >
                    <div className="form-group d-flex justify-content-between align-items-end me-3 mb-3">
                        <div className="form-floating col-7">
                            <input type="text" className={ `form-control ${ validaciones.validaTitulo }` } placeholder="Título de la entrada" autoComplete="on" value={ valoresFormulario.noticiaTitulo } onChange={ onInputChange } name="noticiaTitulo" id='titulo' />
                            <label htmlFor="titulo">Título de la noticia</label>
                        </div>
                        <div className="col-4">
                            <div className="form-floating col">
                                <input type="text" className={ `form-control ${ validaciones.validaCategoria }` } placeholder="Categoría de la entrada" autoComplete="on" value={ valoresFormulario.noticiaCategoria } onChange={ onInputChange } name="noticiaCategoria" id='categoria' />
                                <label htmlFor="categoria">Categoría</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group d-flex justify-content-between align-items-end me-3 mb-3">
                        <div className="form-floating col">
                            <textarea type="text" className={ `notas form-control ${ validaciones.validaDetalle }` } placeholder="Detalle de la entrada" style={{ height: 300 }} value={ valoresFormulario.noticiaDetalle } onChange={ onInputChange } name="noticiaDetalle" id='detalle' />
                            <label htmlFor="detalle">Detalle de la noticia</label>
                        </div>
                    </div>
                    <div className="form-group d-flex justify-content-between align-items-end me-3">
                        <div className="form-item me-3 col-4 ">
                            <div className="form-item mb-2">
                                <label className="form-label" htmlFor="fecha" >Fecha para publicarse</label>
                                <ReactDatePicker
                                    selected={  valoresFormulario.noticiaFecha }
                                    onChange={ ( fecha ) => onFechaChanged( fecha, 'noticiaFecha' ) }
                                    dateFormat="dd MMMM yyyy"
                                    wrapperClassName="datePicker"
                                    minDate={ new Date() }
                                    dropdownMode="select"
                                    className="form-control"
                                    locale="es"
                                    registerLocale
                                    name="noticiaFecha"
                                    id='fecha'
                                    popperPlacement="top-start"
                                    placeholder="Fecha de publicación"
                                />
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="form-floating col">
                                <input type="text" className={ `form-control ${ validaciones.validaUsuario }` } placeholder="Autor de la entrada" autoComplete="on" value={ valoresFormulario.noticiaUsuario } onChange={ onInputChange } name="noticiaUsuario" id='autor' />
                                <label htmlFor="autor">Autor</label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    )
}
