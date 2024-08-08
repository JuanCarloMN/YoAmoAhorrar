import { useDispatch, useSelector } from 'react-redux';

import prospectoApi from '../api/prospectoApi';
import clienteApi from '../api/clienteApi';

import { onActualizaProspecto, onBorrarProspecto, onCargarProspectos, onNuevoCliente, onNuevoProspecto, onSetProspectoActivo } from '../store';
import { convierteFechaProspecto } from '../helpers';

import Swal from 'sweetalert2';

export const useProspectoStore = () => {

    const dispatch = useDispatch();

    const { prospectos, prospectoActivo, state} = useSelector( state => state.prospecto );
    const { usuario } = useSelector( state => state.auth );

    const setProspectoActivo = ( prospecto ) => {
        dispatch( onSetProspectoActivo( prospecto ) );
    }

    const startSalvarProspecto = async ( prospecto ) => {
        try {
            
            if ( prospecto.id ) {
                // Actualiza información del prospecto
                const { data } = await prospectoApi.put(`/prospectos/${ prospecto.id }`, prospecto );
                dispatch( onActualizaProspecto( { ...prospecto, usuario } ) );
                return;
            }

            // Agregar prospecto nuevo
            const { data } = await prospectoApi.post('/prospectos/nuevo', prospecto);
            
            dispatch( onNuevoProspecto( { ...prospecto, id: data.prospecto.id, usuario } ) )
        } catch (error) {
            Swal.fire('Error al guardar la información del prospecto', error.data.msg, 'error');
        }
    }

    const starBorrarProspecto = async ( prospecto ) => {
        try {
            await prospectoApi.delete(`/prospectos/${ prospecto.id }`);
            dispatch( onBorrarProspecto( prospecto ) );
        } catch (error) {
            Swal.fire('Error al eliminar el prospecto', error.response.data.msg, 'error');
        }
    }

    const startConvierteProspecto = async ( prospecto ) => {
        try {
            const datosCliente = {
                clienteNombre: prospecto.prospectoNombre,
                clienteApellidoP: prospecto.prospectoApellidoP,
                clienteApellidoM: prospecto.prospectoApellidoM,
                clienteRFC: prospecto.prospectoRFC,
                clienteCURP: prospecto.prospectoCURP,
                clienteNacimiento: prospecto.prospectoNacimiento,
                clienteCelular: prospecto.prospectoCelular,
                clienteTelefono: prospecto.prospectoTelefono,
                clienteEmail: prospecto.prospectoEmail,
                clienteDireccion: prospecto.prospectoDireccion,
                clienteCP: prospecto.prospectoCP,
                clienteColonia: prospecto.prospectoColonia,
                clienteCiudad: prospecto.prospectoCiudad,
                clienteEstado: prospecto.prospectoEstado,
                clienteDesde: prospecto.prospectoDesde,
                clienteReferido: prospecto.prospectoReferido,
                clienteNotas: prospecto.prospectoNotas,
            }
            const { data } = await clienteApi.post('/clientes/nuevo', datosCliente);
            dispatch( onNuevoCliente( { ...datosCliente, id: data.cliente.id, usuario } ) )
            dispatch( starBorrarProspecto( prospecto) );
        } catch (error) {
            Swal.fire('Error al convertir a cliente', error.response.data.msg, 'error');
        }
    }

    const startCargaProspectos = async () => {
        try {
            const { data } = await prospectoApi.get('prospectos/');

            const prospectos = convierteFechaProspecto( data.prospectos );
            dispatch( onCargarProspectos( prospectos ) );
        } catch (error) {
            Swal.fire('Error al cargar los prospectos', error.response.data.msg, 'error');
        }
    }
 
    return {
        // Propiedades
        prospectoActivo,
        prospectos,
        hayProspectoSeleccionado: !!prospectoActivo,

        // // Métodos
        setProspectoActivo,
        starBorrarProspecto,
        startCargaProspectos,
        startConvierteProspecto,
        startSalvarProspecto,
    }
}
