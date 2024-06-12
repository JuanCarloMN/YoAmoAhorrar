import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store';
import agendaApi from '../api/agendaApi';
import { convertDateEvent } from '../helpers';
import Swal from 'sweetalert2';

export const useAgendaStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.agenda );
    const { user } = useSelector( state => state.auth );

    const setActiveEvent = ( agendaEvent ) => {
        dispatch( onSetActiveEvent( agendaEvent ) );
    }

    const startSavingEvent = async ( agendaEvent ) => {

        try {
            if ( agendaEvent.id ) {
                // Actualizar evento
                await agendaApi.put(`/events/${ agendaEvent.id }`, agendaEvent );
                dispatch( onUpdateEvent( { ...agendaEvent, user } ) );
                return;
            } 
    
            // Agregar evento
            const { data } = await agendaApi.post('/events/new', agendaEvent)
            dispatch( onAddNewEvent( { ...agendaEvent, id: data.evento.id, user } ) );
        } catch (error) {
            Swal.fire('Error al guardar el evento', error.response.data.msg, 'error' );
        }

    }

    const startDeletingEvent = async () => {
        try {
            await agendaApi.delete(`/events/${ activeEvent.id }` );
            dispatch( onDeleteEvent() );
        } catch (error) {
            Swal.fire('Error al eliminar el evento', error.response.data.msg, 'error' );
        }
    }

    const startLoadingEvents = async () => {
        try {
            
            const { data } = await agendaApi.get('/events/');
            const events = convertDateEvent( data.eventos );
            dispatch( onLoadEvents ( events ) );
            console.log({ events });

        } catch (error) {
            console.log('Error al cargar los eventos');
            console.log( error );
        }
    }
 
    return {
        // Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        // Métodos
        setActiveEvent,
        startDeletingEvent,
        startLoadingEvents,
        startSavingEvent,
    }
}
