import { useEffect, useMemo, useState } from 'react';
import { addHours, differenceInSeconds } from 'date-fns';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Modal from 'react-modal';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { es } from 'date-fns/locale/es';
import { useUiStore } from '../../../hooks';
import { citaInicial, estiloCita } from '../../../helpers';
import { useCitaStore } from '../../../hooks/useCitaStore';


registerLocale('es', es );
const customStyles = estiloCita;

Modal.setAppElement('#root');

export const CitaModal = () => {

    const { isCitaModalOpen, closeCitaModal } = useUiStore();
    const { citaActiva, startSalvarCita} = useCitaStore()
    const [ formSubmitted, setFormSubmitted ] = useState( false );

    const [ valoresFormulario, setValoresFormulario ] = useState(citaInicial);

    const claseTitulo = useMemo( () => {
        if ( !formSubmitted ) return '';

        return ( valoresFormulario.titulo.length > 0 )
            ? ''
            : 'is-invalid'

    }, [ valoresFormulario.titulo, formSubmitted ]);

    const claseNombre = useMemo( () => {
        if ( !formSubmitted ) return '';

        return ( valoresFormulario.nombre.length > 0 )
            ? ''
            : 'is-invalid'

    }, [ valoresFormulario.nombre, formSubmitted ]);

    const claseTelefono = useMemo( () => {
        if ( !formSubmitted ) return '';

        return ( valoresFormulario.telefono.length > 0 )
            ? ''
            : 'is-invalid'

    }, [ valoresFormulario.telefono, formSubmitted ]);

    const claseEmail = useMemo( () => {
        if ( !formSubmitted ) return '';

        return ( valoresFormulario.email.length > 0 )
            ? ''
            : 'is-invalid'

    }, [ valoresFormulario.email, formSubmitted ]);

    useEffect( () => {
        if ( citaActiva !== null ) {
            setValoresFormulario({ ...citaActiva });
        }
    }, [ citaActiva ])

    const onInputChange = ({ target }) => {
        setValoresFormulario({
            ...valoresFormulario,
            [ target.name ]: target.value
        })
    }

    const onDateChanged = ( evento, changing ) => {
        console.log(evento);
        console.log(changing);
        
        setValoresFormulario({
            ...valoresFormulario,
            [ changing ]: evento,
            [ 'fin' ]: addHours(evento, 1)
        })
    }

    const onCloseModal = () => {
        closeCitaModal();
    }

    const onSubmit = async ( cita ) => {
        cita.preventDefault();
        setFormSubmitted( true );
        
        if ( valoresFormulario.titulo.length <= 0 ) return;
        if ( valoresFormulario.nombre.length <= 0 ) return;
        if ( valoresFormulario.telefono.length <= 0 ) return;
        if ( valoresFormulario.email.length <= 0 ) return;
        
        await startSalvarCita( valoresFormulario );
        closeCitaModal();
        setFormSubmitted( false );
    }

    return (
        <Modal isOpen={ isCitaModalOpen } style={ customStyles } className="modal-cita" overlayClassName="modal-fondo" closeTimeoutMS={ 200 } >
            <h1> { ( citaActiva?.titulo === '' ) ? 'Nueva' : 'Editar' } cita </h1>
            <hr />
            <form className="container" onSubmit={ onSubmit }>
                <div className="form-group mb-2 d-flex justify-content-between">
                    <div className="col p-1">
                        <label className="form-label" htmlFor="fechaInic" >Fecha y hora inicio</label>
                        <DatePicker 
                            minDate={ valoresFormulario.inicio }                        
                            selected={ valoresFormulario.inicio }
                            onChange={ ( cita ) => onDateChanged( cita, 'inicio' ) }
                            dateFormat="dd-MMM-yyyy hh:ss aaa"
                            showTimeSelect
                            timeFormat="p"
                            wrapperClassName="datePicker"
                            className="form-control"
                            timeIntervals={ 60 }
                            locale="es"
                            registerLocale
                            timeCaption="Hora"
                            id='fechaInic'
                            popperPlacement="top-start"
                        />
                    </div>
                </div>
                <hr />

                <div className="form-floating mb-3">
                    <input type="text" className={ `form-control ${ claseTitulo }` } placeholder="Asunto de la cita" name="titulo" autoComplete="off" value={ valoresFormulario.titulo } onChange={ onInputChange } id='titulo' />
                    <label htmlFor="titulo">Asunto</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className={ `form-control ${ claseNombre }` } placeholder="Nombre" name="nombre" autoComplete="off" value={ valoresFormulario.nombre } onChange={ onInputChange } id='nombre' />
                    <label htmlFor="titulo">Nombre</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className={ `form-control ${ claseTelefono }` } placeholder="Teléfono" name="telefono" autoComplete="off" value={ valoresFormulario.telefono } onChange={ onInputChange } id='telefono' />
                    <label htmlFor="titulo">Teléfono</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className={ `form-control ${ claseEmail }` } placeholder="eMail" name="email" autoComplete="off" value={ valoresFormulario.email } onChange={ onInputChange } id='email' />
                    <label htmlFor="titulo">eMail</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea type="text" className="notas form-control" placeholder="Notas" style={{ height: 200 }} name="notas" value={ valoresFormulario.notas } onChange={ onInputChange } id='notas' ></textarea>
                    <label htmlFor="notas">Notas</label>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-outline-primary btn-block" >
                        {/* <i className="far fa-save"></i> */}
                        <span> Guardar</span>
                    </button>
                    <button type="button" className="btn btn-outline-secondary btn-block" onClick={ onCloseModal } >
                        {/* <i className="far fa-x"></i> */}
                        <span> Cancelar</span>
                    </button>
                </div>
            </form>
        </Modal>
    )
}

