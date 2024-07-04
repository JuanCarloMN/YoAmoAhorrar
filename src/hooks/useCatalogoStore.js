import { useDispatch, useSelector } from 'react-redux';

import catalogoApi from '../api/catalogoApi';
import { onActualizaCatalogo, onBorrarCatalogo, onCargarCatalogos, onNuevoCatalogo, onSetCatalogoActivo } from '../store';

import Swal from 'sweetalert2';

export const useCatalogoStore = () => {

    const dispatch = useDispatch();

    const { catalogos, catalogoActivo, state} = useSelector( state => state.catalogo );

    const setCatalogoActivo = ( catalogo ) => {
        dispatch( onSetCatalogoActivo( catalogo ) );
    }

    const startSalvarCatalogo = async ( catalogo ) => {
        try {
            if ( catalogo.id ) {
                // Actualiza información del catalogo
                const { data } = await catalogoApi.put(`/catalogos/${ catalogo.id }`, catalogo );
                dispatch( onActualizaCatalogo( { ...catalogo } ) );
                return;
            }

            // Agregar catalogo nuevo
            const { data } = await catalogoApi.post('/catalogos/nuevo', catalogo);
            dispatch( onNuevoCatalogo( { ...catalogo, id: data.catalogo.id } ) )
        } catch (error) {
            Swal.fire('Error al guardar la información del catalogo', error.data.msg, 'error');
        }
    }

    const starBorrarCatalogo = async ( catalogo ) => {
        try {
            await catalogoApi.delete(`/catalogos/${ catalogo.id }`);
            dispatch( onBorrarCatalogo( catalogo ) );
        } catch (error) {
            Swal.fire('Error al eliminar el catalogo', error.response.data.msg, 'error');
        }
    }

    const startCargaCatalogos = async () => {
        try {
            const { data } = await catalogoApi.get('catalogos/');
            const catalogos = data.catalogos
            dispatch( onCargarCatalogos( catalogos ) );
        } catch (error) {
            Swal.fire('Error al cargar los catalogos', error.response.data.msg, 'error');
        }
    }
 
    return {
        // Propiedades
        catalogoActivo,
        catalogos,
        hayCatalogoSeleccionado: !!catalogoActivo,

        // // Métodos
        setCatalogoActivo,
        starBorrarCatalogo,
        startCargaCatalogos,
        startSalvarCatalogo,
    }
}
