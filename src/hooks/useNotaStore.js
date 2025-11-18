import { useDispatch, useSelector } from 'react-redux';

import { notaApi } from '../api';
import { onActualizaNota, onBorrarNota, onCargarNotas, onLogoutNota, onNuevaNota, onSetNotaActiva } from '../store';
import { convierteFechaNotas } from '../helpers';

import Swal from 'sweetalert2';

export const useNotaStore = () => {

    const dispatch = useDispatch();

    const { notas, notaActiva, state } = useSelector( state => state.nota );
    const { usuario } = useSelector( state => state.auth );

    const setNotaActiva = ( nota ) => {
        dispatch( onSetNotaActiva( nota ) );
    }

    const startSalvarNota = async ( nota ) => {
        try {
            if ( nota.id ) {
                // Actualiza información de la nota
                const { data } = await notaApi.put(`/notas/${ nota.id }`, nota );
                dispatch( onActualizaNota( { ...nota, usuario } ) );
                Swal.fire({title: "Nota actualizada", text: "La nota ha sido actualizada de forma correcta", icon: "success", confirmButtonColor: "#542052"});
                return;
            }

            // Agregar nueva nota
            const { data } = await notaApi.post('/notas/nueva', nota);
            dispatch( onNuevaNota( { ...nota, id: data.nota.id, usuario } ) )
            Swal.fire({title: "Nota guardada", text: "La nota ha sido guardada de forma correcta", icon: "success", confirmButtonColor: "#542052"});
        } catch (error) {
            Swal.fire('Error al guardar la información de la nota', error.data.msg, 'error');
        }
    }

    const startBorrarNota = async ( nota ) => {
        try {
            await notaApi.delete(`/notas/${ nota.id }`);
            dispatch( onBorrarNota( nota ) );
        } catch (error) {
            Swal.fire('Error al eliminar la nota', error.response.data.msg, 'error');
        }
    }

    const startCargarNotas = async () => {
        try {
            const { data } = await notaApi.get(`notas/`);
            const notas = convierteFechaNotas( data.notas );
            dispatch( onCargarNotas( notas ) );
        } catch (error) {
            Swal.fire('Error al cargar las notas', error.response.data.msg, 'error');
        }
    }

    const startBuscaNotas = async ( clienteRFC ) => {
        try {
            
            const { data } = await notaApi.get(`notas/${ clienteRFC }`);
            
            if ( !data ){
                dispatch( onCargarNotas( [] ) );
            } else {
                const notasFecha = convierteFechaNotas( data.notas );
                                
                dispatch( onCargarNotas( notasFecha ) );
            }
        } catch (error) {
            if ( error.response.status === 404 ){
                Swal.fire('No se encontraron notas para el cliente', 'RFC: ' + clienteRFC, 'info');
            } else {
                Swal.fire('Error al buscar al cliente', error.response.data.msg, 'error');
            }
        }
    }

    const startActualizaNota = ( campo, valor ) => {
        notaActiva[ campo ] = valor;
    }

    const starLimpiarNotas = () => {
        dispatch( onLogoutNota( [] ) );
    }
 
    return {
        // Propiedades
        notaActiva,
        notas,

        // // Métodos
        setNotaActiva,
        starLimpiarNotas,
        startActualizaNota,
        startBorrarNota,
        startBuscaNotas,
        startCargarNotas,
        startSalvarNota,
    }
}
