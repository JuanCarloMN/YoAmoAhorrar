import { createSlice } from '@reduxjs/toolkit';

export const clienteSlice = createSlice({
    name: 'cliente',
    initialState: {
        isCargandoClientes: true,
        clientes: [],
        clienteActivo: null
    },
    reducers: {
        onSetClienteActivo: ( state, { payload } ) => {
            state.clienteActivo = payload;
        },
        onNuevoCliente: (state, { payload } ) => {
            state.clientes.push( payload );
            state.clienteActivo = null;
        },
        onActualizaCliente: ( state, { payload } ) => {
            state.clientes = state.clientes.map( cliente => {
                if ( cliente._id === payload._id ) {
                    return payload;
                }
                return cliente;
            });
        },
        onBorrarCliente: ( state ) => {
            if ( state.clienteActivo ) {
                state.clientes = state.clientes.filter( ciente => ciente._id !== state.clienteActivo._id );
                state.clienteActivo = null;
            }
        },
        onCargarClientes: ( state, { payload } ) => {
            state.isCargandoClientes = false;
            state.clientes = [];

            payload.forEach( cliente => {
                const existe = state.clientes.some( dbCliente => dbCliente === cliente._id );
                if ( !existe ){
                    state.clientes.push( cliente );
                }
            });
        },
        onLogoutCliente: ( state ) => {
            state.isCargandoClientes = true;
            state.clientes = [];
            state.clienteActivo = null;
        },
    }
});

// Action creators are generated for each case reducer function
export const { 
    onActualizaCliente, 
    onBorrarCliente, 
    onCargarClientes,
    onLogoutCliente,
    onNuevoCliente, 
    onSetClienteActivo, 
} = clienteSlice.actions;