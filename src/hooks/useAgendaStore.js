import { useDispatch, useSelector } from 'react-redux';
import agendaApi from '../api/agendaApi';
import { convierteFechaEvento } from '../helpers';
import Swal from 'sweetalert2';
import { onActualizaEvento, onBorrarEvento, onCargarEventos, onNuevoEvento, onSetEventoActivo } from '../store/slice/agendaSlice';

export const useAgendaStore = () => {

    const dispatch = useDispatch();
    const { eventos, eventoActivo, state, eventosTipo } = useSelector( state => state.agenda );
    const { usuario } = useSelector( state => state.auth );

    const setEventoActivo = ( agendaEvento ) => {
        dispatch( onSetEventoActivo( agendaEvento ) );
    }

    const startSalvarEvento = async ( agendaEvento ) => {

        try {
            if ( agendaEvento.id ) {
                // Actualizar evento
                await agendaApi.put(`/eventos/${ agendaEvento.id }`, agendaEvento );
                dispatch( onActualizaEvento( { ...agendaEvento, usuario } ) );
                return;
            } 
    
            // Agregar evento
            const { data } = await agendaApi.post('/eventos/nuevo', agendaEvento)
            dispatch( onNuevoEvento( { ...agendaEvento, id: data.evento.id, usuario } ) );
        } catch (error) {
            Swal.fire('Error al guardar el evento', error.response.data.msg, 'error' );
        }

    }

    const startBorrarEvento = async () => {
        try {
            await agendaApi.delete(`/eventos/${ eventoActivo.id }` );
            dispatch( onBorrarEvento() );
        } catch (error) {
            Swal.fire('Error al eliminar el evento', error.response.data.msg, 'error' );
        }
    }

    const startCargarEventos = async () => {
        try {
            const { data } = await agendaApi.get('/eventos/');
            const eventos = convierteFechaEvento( data.eventos );
            dispatch( onCargarEventos( eventos ) );

        } catch (error) {
            console.log('Error al cargar los eventos');
            console.log( error );
        }
    }
 
    return {
        // Propiedades
        eventoActivo,
        eventos,
        eventosTipo,
        hayEventoSeleccionado: !!eventoActivo,

        // Métodos
        setEventoActivo,
        startBorrarEvento,
        startCargarEventos,
        startSalvarEvento,
    }
}
