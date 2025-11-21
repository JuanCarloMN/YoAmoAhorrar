import { mensajeApi } from '../api';
import Swal from 'sweetalert2';
import { convierteFechaMensaje } from '../helpers';
import { onActualizaMensaje, onCargarMensajes } from '../store/slice/mensajeSlice';
import { useDispatch, useSelector } from 'react-redux';

export const useMensajeStore = () => {

    const dispatch = useDispatch();
    const { mensajes } = useSelector( state => state.mensaje );

    const startSalvarMensaje = async ( mensaje ) => {
        
        try {
            if ( mensaje.id ) {
                // Actualizar mensaje
                await mensajeApi.put(`/mensajes/${ mensaje.id }`, mensaje );
                dispatch( onActualizaMensaje( mensaje ) );
                return;
            } 
    
            // Agregar mensaje
            const { data } = await mensajeApi.post('/libres/nuevoMensaje', mensaje)
            Swal.fire({title: "Mensaje enviado", text: "El mensaje ha sido enviado de forma correcta", icon: "success", confirmButtonColor: "#542052"});
        } catch (error) {            
            Swal.fire({title: "Error al guardar el mensaje", text: error.response.data.errores.mensajeEmail.msg, icon: "error", confirmButtonColor: "#542052"});
        }
    }

    // const startBorrarMensaje = async () => {
    //     try {
    //         await agendaApi.delete(`/mensajes/${ eventoActivo.id }` );
    //         dispatch( onBorrarEvento() );
    //     } catch (error) {
    //         Swal.fire('Error al eliminar el evento', error.response.data.msg, 'error' );
    //     }
    // }

    const startCargarMensajes = async () => {
        try {
            const { data } = await mensajeApi.get('/mensajes/');
            const mensajes = convierteFechaMensaje( data.mensajes );
            
            dispatch( onCargarMensajes( mensajes ) );

        } catch (error) {
            console.log('Error al cargar los mensajes');
            console.log( error );
        }
    }
 
    return {
        // Propiedades
        mensajes,


        // Métodos
        startCargarMensajes,
        startSalvarMensaje,
    }
}
