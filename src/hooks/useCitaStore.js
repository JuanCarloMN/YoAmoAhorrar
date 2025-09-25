import { useDispatch, useSelector } from 'react-redux';
import { citaApi } from '../api';
import { onActualizaCita, onBorrarCita, onCargarCitas, onNuevaCita, onSetCitaActiva } from '../store';
import { convierteFechaCita } from '../helpers';

import Swal from 'sweetalert2';

export const useCitaStore = () => {

    const dispatch = useDispatch();

    const { citas, citaActiva, state} = useSelector( state => state.cita );
    const { usuario } = useSelector( state => state.auth );
    
    const setCitaActiva = ( cita ) => {
        dispatch( onSetCitaActiva( cita ) );
    }

    const startSalvarCita = async ( cita ) => {
        
        try {
            if ( cita.id ) {
                // Actualizar cita
                console.log({cita});
                
                await citaApi.put(`/citas/${ cita.id }`, cita );
                dispatch( onActualizaCita( cita ) );
                return;
            } 
    
            // Agregar cita
            const { data } = await citaApi.post('/citas/nuevo', cita)
            dispatch( onNuevaCita( { ...cita, id: data.cita.id, usuario } ) )
            Swal.fire({title: "Cita agendada", html: "La cita se ha registrado de forma correcta<br><br>En breve nos contactaremos para su confirmación", icon: "success", confirmButtonColor: "#542052"});
        } catch (error) {
            Swal.fire('Error al guardar la cita', error.response.data.msg, 'error' );
        }

    }

    const startBorrarCita = async ( cita ) => {
        try {
            await citaApi.delete(`/citas/${ cita.id }` );
            dispatch( onBorrarCita( cita ) );
        } catch (error) {
            Swal.fire('Error al eliminar la cita', error.response.data.msg, 'error' );
        }
    }

    const startCargarCitas = async () => {
        try {
            const { data } = await citaApi.get('/citas/');            
            const citas = convierteFechaCita( data.citas );
            dispatch( onCargarCitas( citas ) );
        } catch (error) {
            console.log('Error al cargar los citas');
            console.log( error );
        }
    }

    return {
        // Propiedades
        citaActiva,
        citas,
        
        // Métodos
        setCitaActiva,
        startBorrarCita,
        startCargarCitas,
        startSalvarCita,
    }
}
