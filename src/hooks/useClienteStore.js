import { useDispatch, useSelector } from 'react-redux';

import clienteApi from '../api/clienteApi';
import { onActualizaCliente, onBorrarCliente, onCargarClientes, onNuevoCliente, onSetClienteActivo } from '../store';
import { convierteFechaCliente } from '../helpers';

import Swal from 'sweetalert2';

export const useClienteStore = () => {

    const dispatch = useDispatch();

    const { clientes, clienteActivo, state} = useSelector( state => state.cliente );
    const { usuario } = useSelector( state => state.auth );

    const setClienteActivo = ( cliente ) => {
        dispatch( onSetClienteActivo( cliente ) );
    }

    const startSalvarCliente = async ( cliente ) => {
        try {
            
            if ( cliente.id ) {
                // Actualiza información del cliente
                const { data } = await clienteApi.put(`/clientes/${ cliente.id }`, cliente );
                dispatch( onActualizaCliente( { ...cliente, usuario } ) );
                return;
            }

            // Agregar cliente nuevo
            const { data } = await clienteApi.post('/clientes/nuevo', cliente);
            dispatch( onNuevoCliente( { ...cliente, id: data.cliente.id, usuario } ) )
        } catch (error) {
            Swal.fire('Error al guardar la información del cliente', error.data.msg, 'error');
        }
    }

    const startBorrarCliente = async ( cliente ) => {
        try {
            await clienteApi.delete(`/clientes/${ cliente.id }`);
            dispatch( onBorrarCliente( cliente ) );
        } catch (error) {
            Swal.fire('Error al eliminar el cliente', error.response.data.msg, 'error');
        }
    }

    const startCargaClientes = async () => {
        try {
            const { data } = await clienteApi.get('clientes/');
            const clientes = convierteFechaCliente( data.clientes );
            dispatch( onCargarClientes( clientes ) );
        } catch (error) {
            Swal.fire('Error al cargar los clientes', error.response.data.msg, 'error');
        }
    }

    const startActualizaActivo = ( campo, valor ) => {
        clienteActivo[ campo ] = valor;
    }
 
    return {
        // Propiedades
        clienteActivo,
        clientes,
        hayClienteSeleccionado: !!clienteActivo,

        // // Métodos
        setClienteActivo,
        startActualizaActivo,
        startBorrarCliente,
        startCargaClientes,
        startSalvarCliente,
    }
}
