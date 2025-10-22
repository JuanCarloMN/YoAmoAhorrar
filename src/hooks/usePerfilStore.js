import { perfilApi } from '../api';
import Swal from 'sweetalert2';
import { convierteFechaPerfil } from '../helpers';
import { useDispatch } from 'react-redux';
import { onActualizaPerfil, onCargarPerfiles } from '../store/slice/perfilSlice';

export const usePerfilStore = () => {

    const dispatch = useDispatch();
    const startSalvarPerfil = async ( perfil ) => {
        
        try {
            if ( perfil.id ) {
                // Actualizar perfil
                await perfilApi.put(`/perfil/${ perfil.id }`, perfil );
                dispatch( onActualizaPerfil( perfil ) );
                return;
            } 
    
            // Agregar perfil
            const { data } = await perfilApi.post('/perfil/nuevo', perfil)
            Swal.fire({title: "perfil enviado", text: "El perfil ha sido enviado de forma correcta", icon: "success", confirmButtonColor: "#542052"});
        } catch (error) {            
            Swal.fire({title: "Error al guardar el perfil", text: error.response.data.errores.perfilNombre.msg, icon: "error", confirmButtonColor: "#542052"});
        }
    }

    // const startBorrarPerfil = async () => {
    //     try {
    //         await agendaApi.delete(`/perfil/${ perfilActivo.id }` );
    //         dispatch( onBorrarPerfil() );
    //     } catch (error) {
    //         Swal.fire('Error al eliminar el perfil', error.response.data.msg, 'error' );
    //     }
    // }

    const startCargarPerfiles = async () => {
        try {
            const { data } = await perfilApi.get('/perfil/');
            const perfiles = convierteFechaPerfil( data.perfiles );
            
            dispatch( onCargarPerfiles( perfiles ) );

        } catch (error) {
            console.log('Error al cargar los perfiles');
            console.log( error );
        }
    }
 
    return {
        // Propiedades
        // perfilActivo,
        // perfiles,

        // Métodos
        // setEventoActivo,
        // startBorrarEvento,
        startCargarPerfiles,
        startSalvarPerfil,
    }
}
