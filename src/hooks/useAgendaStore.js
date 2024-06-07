import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useAgendaStore = () => {

    const dispatch = useDispatch();

    const { 
        events,
        activeEvent,
    } = useSelector( state => state.agenda );

    const setActiveEvent = ( agendaEvent ) => {
        dispatch( onSetActiveEvent( agendaEvent ) );
    }

    const startSavingEvent = async( agendaEvent ) => {
        if ( agendaEvent._id ) {
            dispatch( onUpdateEvent( { ...agendaEvent } ) );
        } else {
            dispatch( onAddNewEvent( { ...agendaEvent, _id: new Date().getTime() } ) );
        }
    }

    const startDeletingEvent = async () => {
        await dispatch( onDeleteEvent() );
    }

    return {
        // Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        // Métodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
    }
}
