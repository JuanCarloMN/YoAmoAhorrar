import { useDispatch, useSelector } from 'react-redux';
import { suscriptorApi } from '../api';
import { onActualizaSuscriptor, onBorrarSuscriptor, onCargarSuscriptores, onSetSuscriptorActivo } from '../store';
import { convierteFechaSuscriptor } from '../helpers';

import Swal from 'sweetalert2';

export const useSuscriptoresStore = () => {

    const dispatch = useDispatch();

    const { suscriptores, suscriptorActivo, state} = useSelector( state => state.suscriptor );
    
    const setSuscriptorActivo = ( suscriptor ) => {
        dispatch( onSetSuscriptorActivo( suscriptor ) );
    }

    const startSalvarSuscriptor = async ( suscriptor ) => {
        
        try {
            if ( suscriptor.id ) {
                // Actualizar suscriptor
                await suscriptorApi.put(`/suscriptores/${ suscriptor.id }`, suscriptor );
                dispatch( onActualizaSuscriptor( suscriptor ) );
                return;
            } 
        } catch (error) {
            Swal.fire('Error al guardar el suscriptor', error.response.data.msg, 'error' );
        }

    }

    const startBorrarSucriptor = async ( suscriptor ) => {
        try {
            await suscriptorApi.delete(`/suscriptores/${ suscriptor.id }` );
            dispatch( onBorrarSuscriptor( suscriptor ) );
        } catch (error) {
            Swal.fire('Error al eliminar el suscriptor', error.response.data.msg, 'error' );
        }
    }

    const startCargarSuscriptores = async () => {
        try {
            const { data } = await suscriptorApi.get('/suscriptores/');            
            const suscriptores = convierteFechaSuscriptor( data.suscriptores );
            dispatch( onCargarSuscriptores( suscriptores ) );
        } catch (error) {
            console.log('Error al cargar los suscriptores');
            console.log( error );
        }
    }

    const startSuscribirse = async ( mensaje ) => {
        try {
            const { data } = await suscriptorApi.post('/libres/suscribirseBlog', mensaje)
            Swal.fire({title: "Suscripción al Blog", text: "Te has suscrito al Blog de forma correcta", icon: "success"});
        } catch (error) {
            console.log({error});
            
            Swal.fire('Error al suscribirse', error, 'error' );
        }
    }
    return {
        // Propiedades
        suscriptorActivo,
        suscriptores,
        
        // Métodos
        setSuscriptorActivo,
        startBorrarSucriptor,
        startCargarSuscriptores,
        startSalvarSuscriptor,
        startSuscribirse,
    }
}
