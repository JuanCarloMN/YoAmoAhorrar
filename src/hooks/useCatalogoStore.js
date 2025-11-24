import { useDispatch, useSelector } from 'react-redux';

import catalogoApi from '../api/catalogoApi';
import { onActualizaDato, onBorrarDato, onCargarCatalogos, onNuevoDato, onSetDatoActivo } from '../store';

import Swal from 'sweetalert2';

export const useCatalogoStore = () => {

    const dispatch = useDispatch();

    const { catalogos, catalogoActivo, state} = useSelector( state => state.catalogo );

    const setDatoActivo = ( catalogo ) => {
        dispatch( onSetDatoActivo( catalogo ) );
    }

    const startSalvarDato = async ( catalogo ) => {
        try {
            if ( catalogo.idActualizar ) {
                // Actualiza información del catalogo
                const { data } = await catalogoApi.put(`/catalogos/dato/${ catalogo.id }`, catalogo );
                if ( data.ok ) {
                    Swal.fire( { position: "top-end", icon: "success", html: "<h3>Información guardada <br>de forma correcta</h3>", showConfirmButton: false, timer: 1000 } );
                    dispatch( onActualizaDato( data.dato ) );
                }
                return;
            }

            // Agregar catalogo nuevo
            const { data } = await catalogoApi.post('/catalogos/dato/nuevo', catalogo);
            if ( data.ok ) {
                Swal.fire( { position: "top-end", icon: "success", html: "<h3>Información guardada <br>de forma correcta</h3>", showConfirmButton: false, timer: 1000 } );
                dispatch( onNuevoDato( data.dato ) )
            }
        } catch (error) {
            Swal.fire('Error al guardar el dato del catálogo', error.data.msg, 'error');
        }
    }

    const starBorrarDato = async ( catalogo ) => {
        try {
            if ( catalogo.idEliminar ) {
                const { data } = await catalogoApi.put(`/catalogos/eliminaDato/${ catalogo.id }`, catalogo );
                if ( data.ok ) {
                    dispatch( onBorrarDato( catalogo ) );
                    Swal.fire( { position: "top-end", icon: "success", html: "<h3>Información eliminada <br>de forma correcta</h3>", showConfirmButton: false, timer: 1000 } );
                } else {
                    Swal.fire('Error al eliminar el dato del catálogo', data.errores, 'error');
                }
                return;
            }
        } catch (error) {
            Swal.fire('Error al eliminar el dato del catálogo', error.response.data.msg, 'error');
        }
    }

    const startCargaCatalogos = async () => {
        try {
            const { data } = await catalogoApi.get('catalogos/');
            const catalogos = data.catalogos
            dispatch( onCargarCatalogos( catalogos ) );
        } catch (error) {
            Swal.fire('Error al cargar los catálogos', error.response.data.msg, 'error');
        }
    }
 
    return {
        // Propiedades
        catalogoActivo,
        catalogos,
        hayCatalogoSeleccionado: !!catalogoActivo,

        // // Métodos
        setDatoActivo,
        starBorrarDato,
        startCargaCatalogos,
        startSalvarDato,
    }
}
