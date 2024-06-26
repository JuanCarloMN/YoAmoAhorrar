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
                if ( cliente.id === payload.id ) {
                    return payload;
                }
                return cliente;
            });
        },
        onBorrarCliente: ( state, { payload } ) => {
            state.clientes = state.clientes.filter( cliente => cliente.id !== payload.id );
            state.clienteActivo = null;
        },
        onCargarClientes: ( state, { payload } ) => {
            state.isCargandoClientes = false;
            state.clientes = [];

            payload.forEach( cliente => {
                const existe = state.clientes.some( dbCliente => dbCliente === cliente.id );
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

export const { 
    onActualizaCliente, 
    onBorrarCliente, 
    onCargarClientes,
    onLogoutCliente,
    onNuevoCliente, 
    onSetClienteActivo, 
} = clienteSlice.actions;