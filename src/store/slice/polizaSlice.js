import { createSlice } from '@reduxjs/toolkit';

export const polizaSlice = createSlice({
    name: 'poliza',
    initialState: {
        isCargandoPolizas: true,
        polizas: [],
        polizaActiva: null
    },
    reducers: {
        onSetPolizaActiva: ( state, { payload } ) => {
            state.polizaActiva = payload;
        },
        onNuevaPoliza: (state, { payload } ) => {
            state.polizas.push( payload );
            state.polizaActiva = null;
        },
        onActualizaPoliza: ( state, { payload } ) => {
            state.polizas = state.polizas.map( poliza => {
                if ( poliza.id === payload.id ) {
                    return payload;
                }
                return poliza;
            });
        },
        onActualizaPolizaActiva: ( state, { payload } ) => {
            state.polizaActiva = state.polizaActiva.map( poliza => {
                if ( poliza.id === payload.id ) {
                    return payload;
                }
                return poliza;
            });
        },
        onBorrarPoliza: ( state, { payload } ) => {
            state.polizas = state.polizas.filter( poliza => poliza.id !== payload.id );
            state.polizaActiva = null;
        },
        onCargarPolizas: ( state, { payload } ) => {
            state.isCargandoPolizas = false;
            state.polizas = [];

            payload.forEach( poliza => {
                const existe = state.polizas.some( dbPoliza => dbPoliza === poliza.id );
                if ( !existe ){
                    state.polizas.push( poliza );
                }
            });
        },
        onLogoutPoliza: ( state ) => {
            state.isCargandoPolizas = true;
            state.polizas = [];
            state.polizaActiva = null;
        },
    }
});

export const { 
    onActualizaPoliza, 
    onBorrarPoliza, 
    onCargarPolizas,
    onLogoutPoliza,
    onNuevaPoliza, 
    onSetPolizaActiva, 
} = polizaSlice.actions;
