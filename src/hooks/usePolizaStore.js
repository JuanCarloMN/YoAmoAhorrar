import { useDispatch, useSelector } from 'react-redux';

import { polizaApi } from '../api';
import { onActualizaPoliza, onBorrarPoliza, onCargarPolizas, onNuevaPoliza, onSetPolizaActiva } from '../store';
import { convierteFechaPoliza } from '../helpers';

import Swal from 'sweetalert2';

export const usePolizaStore = () => {

    const dispatch = useDispatch();

    const { polizas, polizaActiva, state} = useSelector( state => state.poliza );
    const { usuario } = useSelector( state => state.auth );

    const setPolizaActiva = ( poliza ) => {
        dispatch( onSetPolizaActiva( poliza ) );
    }

    const startSalvarPoliza = async ( poliza ) => {
        try {
            console.log(poliza);
            
            if ( poliza.id ) {
                // Actualiza información de la póliza
                const { data } = await polizaApi.put(`/polizas/${ poliza.id }`, poliza );
                dispatch( onActualizaPoliza( { ...poliza, usuario } ) );
                return;
            }

            // Agregar póliza nueva
            const { data } = await polizaApi.post('/polizas/nuevo', poliza);
            dispatch( onNuevaPoliza( { ...poliza, id: data.poliza.id, usuario } ) )
        } catch (error) {
            Swal.fire('Error al guardar la información de la póliza', error.data.msg, 'error');
        }
    }

    const startBorrarPoliza = async ( poliza ) => {
        try {
            await polizaApi.delete(`/polizas/${ poliza.id }`);
            dispatch( onBorrarPoliza( poliza ) );
        } catch (error) {
            Swal.fire('Error al eliminar la póliza', error.response.data.msg, 'error');
        }
    }

    const startCargaPolizas = async () => {
        try {
            const { data } = await polizaApi.get('polizas/');
            const polizas = convierteFechaPoliza( data.polizas );
            dispatch( onCargarPolizas( polizas ) );
        } catch (error) {
            Swal.fire('Error al cargar las pólizas', error.response.data.msg, 'error');
        }
    }

    const startBuscaPoliza = async ( polizaClave, tipo ) => {
        try {
            const { data } = await polizaApi.get(`polizas/${ polizaClave }`);
            
            if ( tipo === 1 ) {
                if ( !data ){
                    Swal.fire('Póliza no encontrada', 'Póliza: ' + polizaClave, 'info');
                } else {
                    const poliza = convierteFechaPoliza( data.poliza );                
                    dispatch( onCargarPolizas( poliza ) );
                }
            } else {                
                if ( data ) {
                    Swal.fire('Ya existe una póliza con ese número', 'Póliza: ' + polizaClave, 'info');
                    return false;
                }                
                return true;
            }
        } catch (error) {
            if ( error.response.status === 204 ){
                Swal.fire('Póliza no encontrada', 'Póliza: ' + polizaClave, 'info');
            } else {
                Swal.fire('Error al buscar la póliza', error.response.data.msg, 'error');
            }
        }
    }

    const startActualizaActivo = ( campo, valor ) => {
        polizaActiva[ campo ] = valor;
    }
 
    return {
        // Propiedades
        polizaActiva,
        polizas,
        hayPolizaSeleccionada: !!polizaActiva,

        // // Métodos
        setPolizaActiva,
        startActualizaActivo,
        startBorrarPoliza,
        startBuscaPoliza,
        startCargaPolizas,
        startSalvarPoliza,
    }
}
