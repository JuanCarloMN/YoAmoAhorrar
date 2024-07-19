import { useEffect, useMemo, useState } from 'react';
import { differenceInSeconds } from 'date-fns';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Modal from 'react-modal';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { es } from 'date-fns/locale/es';
import { useAgendaStore, useUiStore } from '../../../hooks';
import { estiloEvento, eventoInicial } from '../../../helpers';


registerLocale('es', es );
const customStyles = estiloEvento;

Modal.setAppElement('#root');

export const AgendaModal = () => {

    const { isEventoModalOpen, closeEventoModal } = useUiStore();
    const { eventoActivo, startSalvarEvento } = useAgendaStore();
    const [ formSubmitted, setFormSubmitted ] = useState( false );

    const [ valoresFormulario, setValoresFormulario ] = useState(eventoInicial);

    const claseTitulo = useMemo( () => {
        if ( !formSubmitted ) return '';

        return ( valoresFormulario.titulo.length > 0 )
            ? ''
            : 'is-invalid'

    }, [ valoresFormulario.titulo, formSubmitted ]);

    useEffect( () => {
        if ( eventoActivo !== null ) {
            setValoresFormulario({ ...eventoActivo });
        }
    }, [ eventoActivo ])

    const onTipoChange = ({ target }) => {
        setValoresFormulario({
            ...valoresFormulario,
            [ target.name ]: parseInt(target.value)
        })
    }

    const onInputChange = ({ target }) => {
        setValoresFormulario({
            ...valoresFormulario,
            [ target.name ]: target.value
        })
    }

    const onDateChanged = ( evento, changing ) => {
        setValoresFormulario({
            ...valoresFormulario,
            [ changing ]: evento
        })
    }

    const onCloseModal = () => {
        closeEventoModal();
    }

    const onSubmit = async ( evento ) => {
        evento.preventDefault();
        setFormSubmitted( true );
        const difference = differenceInSeconds( valoresFormulario.fin, valoresFormulario.inicio );

        if ( isNaN( difference ) ) {
            Swal.fire( 'Fechas incorrectas', 'Revisar las fechas ingresadas', 'error' );
            return;
        }

        if ( difference <= 0 ) {
            Swal.fire( 'Fechas incorrectas', 'La fecha final no puede ser menor a la fecha de inicio', 'error' );
            return;
        }

        if ( valoresFormulario.tipo === 0) {
            Swal.fire( 'Tipo de evento', 'Seleccione un tipo de evento', 'error' );
            return;
        }
        
        if ( valoresFormulario.titulo.length <= 0 ) return;

        await startSalvarEvento( valoresFormulario );
        closeEventoModal();
        setFormSubmitted( false );
    }

    return (
        <Modal isOpen={ isEventoModalOpen } style={ customStyles } className="modal" overlayClassName="modal-fondo" closeTimeoutMS={ 200 } >
            <h1> { ( eventoActivo?.titulo === '' ) ? 'Nuevo' : 'Editar' } evento </h1>
            <hr />
            <form className="container" onSubmit={ onSubmit }>
                <div className="form-group mb-2 d-flex justify-content-between">
                    <div className="col-6 p-1">
                        <label className="form-label" htmlFor="fechaInic" >Fecha y hora inicio</label>
                        <DatePicker 
                            minDate={ valoresFormulario.inicio }                        
                            selected={ valoresFormulario.inicio }
                            onChange={ ( evento ) => onDateChanged( evento, 'inicio' ) }
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
                    <div className="col-6 p-1" >
                        <label className="form-label" htmlFor="fechaFin">Fecha y hora fin</label>
                        <DatePicker 
                            minDate={ valoresFormulario.inicio }
                            selected={  valoresFormulario.fin }
                            onChange={ ( evento ) => onDateChanged( evento, 'fin' ) }
                            dateFormat="dd-MMM-yyyy hh:ss aaa"
                            showTimeSelect
                            timeFormat="p"
                            wrapperClassName="datePicker"
                            className="form-control"
                            timeIntervals={ 60 }
                            locale="es"
                            registerLocale
                            timeCaption="Hora"
                            id='fechaFin'
                            popperPlacement="top-start"
                        />
                    </div>
                </div>
                <hr />
                <div className="form-floating mb-3">
                    <select className="form-select" id="tipoEvento" name='tipo' aria-label="Seleccione el tipo de evento" onChange={ onTipoChange } value={ valoresFormulario.tipo }>
                        <option value={ 0 } >Seleccione el tipo de evento</option>
                        <option value={ 1 } >Agenda Personal</option>
                        <option value={ 2 } >Cumpleaños</option>
                        <option value={ 3 } >Renovaciónes</option>
                        <option value={ 4 } >Pendientes</option>
                        <option value={ 5 } >Otros</option>
                    </select>
                    <label htmlFor="tipoEvento">Tipo de evento</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className={ `form-control ${ claseTitulo }` } placeholder="Título del evento" name="titulo" autoComplete="off" value={ valoresFormulario.titulo } onChange={ onInputChange } id='titulo' />
                    <label htmlFor="titulo">Título</label>
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

