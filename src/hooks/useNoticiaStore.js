import { useDispatch, useSelector } from 'react-redux';
import { noticiaApi } from '../api';
import { onActualizaNoticia,  onBorrarNoticia, onCargarNoticias, onNuevaNoticia, onSetNoticiaActiva } from '../store';
import { convierteFechaNoticia } from '../helpers';

import Swal from 'sweetalert2';

export const useNoticiaStore = () => {

    const dispatch = useDispatch();

    const { noticias, noticiaActiva, state} = useSelector( state => state.noticia )
    const { usuario } = useSelector( state => state.auth );
    
    const setNoticiaActiva = ( noticia ) => {
        dispatch( onSetNoticiaActiva ( noticia ) );
    }

    const startSalvarNoticia = async ( noticia ) => {
        
        try {
            if ( noticia.id ) {
                // Actualizar noticia                
                await noticiaApi.put(`/noticias/${ noticia.id }`, noticia );
                dispatch( onActualizaNoticia( noticia ) );
                return;
            } 
    
            // Agregar noticia
            const { data } = await noticiaApi.post('/noticias/nuevo', noticia)
            dispatch( onNuevaNoticia( { ...noticia, id: data.noticia.id, usuario } ) )
        } catch (error) {
            Swal.fire('Error al guardar la noticia', error.response.data.msg, 'error' );
        }

    }

    const startBorrarNoticia = async ( noticia ) => {
        try {
            await noticiaApi.delete(`/noticias/${ noticia.id }` );
            dispatch( onBorrarNoticia( noticia ) );
        } catch (error) {
            Swal.fire('Error al eliminar la noticia', error.response.data.msg, 'error' );
        }
    }

    const startCargarNoticias = async () => {
        try {
            const { data } = await noticiaApi.get('/libres/obtenerNoticias');            
            const noticias = convierteFechaNoticia( data.noticias );
            dispatch( onCargarNoticias( noticias ) );
        } catch (error) {
            console.log('Error al cargar las noticias');
            console.log( error );
        }
    }

    return {
        // Propiedades
        noticiaActiva,
        noticias,
        
        // Métodos
        setNoticiaActiva,
        startBorrarNoticia,
        startCargarNoticias,
        startSalvarNoticia,
    }
}
