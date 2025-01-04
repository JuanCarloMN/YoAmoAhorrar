

import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ReactDatePicker from "react-datepicker";

import { blogInicial, estiloModal, validaBlog, validaCampo, validaFormulario } from '../../helpers';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useBlogStore, useUiStore } from '../../hooks';

const customStyles = estiloModal;
const inicioValidacion = validaBlog;
const inicioFormulario = blogInicial;

export const MiBlogModal = () => {
    const [ validaciones, setValidaciones ] = useState( inicioValidacion );
    const [ valoresFormulario, setValoresFormulario ] = useState( inicioFormulario );
    const { isBlogModalOpen, closeBlogModal } = useUiStore();
    const { blogActivo, startSalvarBlog, setBlogActivo } = useBlogStore();

    const validaCampos = () => {
        let todoBien = true;

        setValidaciones( {} );
        validaciones.validaTitulo = validaFormulario( valoresFormulario.blogTitulo );
        validaciones.validaCategoria = validaFormulario( valoresFormulario.blogCategoria );
        validaciones.validaDetalle = validaFormulario( valoresFormulario.blogDetalle );
        validaciones.validaUsuario = validaFormulario( valoresFormulario.blogUsuario );

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
        setBlogActivo( null );
        closeBlogModal();
    }

    const onSubmit = async ( blog ) => {
        blog.preventDefault();

        if ( !validaCampos() ) {
            Swal.fire( 'Información incorrecta', 'Revisar que se haya ingresado la información correcta', 'error' );
            return;
        }

        await startSalvarBlog( valoresFormulario );
        setBlogActivo( null );
        setValoresFormulario( inicioFormulario );
        setValidaciones( inicioValidacion );
        closeBlogModal();
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

        // console.log(campoValida);
        
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
        if ( blogActivo !== null ) {
            setValoresFormulario({ ...blogActivo });
        } else {
            setValoresFormulario( inicioFormulario )
        }

        setValidaciones( inicioValidacion );
    }, [ blogActivo ]);

    return (
        <Modal isOpen={ isBlogModalOpen } style={ customStyles } overlayClassName="modal-fondo" closeTimeoutMS={ 200 } >
            <form className="container" onSubmit={ onSubmit }>
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-end">
                        <h2>{ ( blogActivo?.blogTitulo === '' || blogActivo?.blogTitulo === undefined ) ? 'Nueva entrada' : 'Editar entrada' }</h2>
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
                            <input type="text" className={ `form-control ${ validaciones.validaTitulo }` } placeholder="Título de la entrada" autoComplete="on" value={ valoresFormulario.blogTitulo } onChange={ onInputChange } name="blogTitulo" id='titulo' />
                            <label htmlFor="titulo">Título de la entrada</label>
                        </div>
                        <div className="col-4">
                            <div className="form-floating col">
                                <input type="text" className={ `form-control ${ validaciones.validaCategoria }` } placeholder="Categoría de la entrada" autoComplete="on" value={ valoresFormulario.blogCategoria } onChange={ onInputChange } name="blogCategoria" id='categoria' />
                                <label htmlFor="categoria">Categoría</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group d-flex justify-content-between align-items-end me-3 mb-3">
                        <div className="form-floating col">
                            <textarea type="text" className={ `notas form-control ${ validaciones.validaDetalle }` } placeholder="Detalle de la entrada" style={{ height: 300 }} value={ valoresFormulario.blogDetalle } onChange={ onInputChange } name="blogDetalle" id='detalle' />
                            <label htmlFor="detalle">Detalle de la entrada</label>
                        </div>
                    </div>
                    <div className="form-group d-flex justify-content-between align-items-end me-3">
                        <div className="form-item me-3 col-4 ">
                            <div className="form-item mb-2">
                                <label className="form-label" htmlFor="fecha" >Fecha para publicarse</label>
                                <ReactDatePicker
                                    selected={  valoresFormulario.blogFecha }
                                    onChange={ ( fecha ) => onFechaChanged( fecha, 'blogFecha' ) }
                                    dateFormat="dd MMMM yyyy"
                                    wrapperClassName="datePicker"
                                    minDate={ new Date() }
                                    dropdownMode="select"
                                    className="form-control"
                                    locale="es"
                                    registerLocale
                                    name="blogFecha"
                                    id='fecha'
                                    popperPlacement="top-start"
                                    placeholder="Fecha de publicación"
                                />
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="form-floating col">
                                <input type="text" className={ `form-control ${ validaciones.validaUsuario }` } placeholder="Autor de la entrada" autoComplete="on" value={ valoresFormulario.blogUsuario } onChange={ onInputChange } name="blogUsuario" id='autor' />
                                <label htmlFor="autor">Autor</label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    )
}
