import { createSlice } from '@reduxjs/toolkit';

export const notaSlice = createSlice({
    name: 'nota',
    initialState: {
        isCargandoNotas: true,
        notas: [],
        notaActiva: null
    },
    reducers: {
        onSetNotaActiva: ( state, { payload } ) => {
            state.notaActiva = payload;
        },
        onNuevaNota: (state, { payload } ) => {
            state.notas.push( payload );
            state.notas.sort( (a, b) => new Date(b.notaFecha) - new Date(a.notaFecha) );
            state.notaActiva = null;
        },
        onActualizaNota: ( state, { payload } ) => {
            state.notas = state.notas.map( nota => {
                if ( nota.id === payload.id ) {
                    return payload;
                }
                return nota;
            });
        },
        onActualizaNotaActiva: ( state, { payload } ) => {
            state.notaActiva = state.notaActiva.map( nota => {
                if ( nota.id === payload.id ) {
                    return payload;
                }
                return nota;
            });
        },
        onBorrarNota: ( state, { payload } ) => {
            state.notas = state.notas.filter( nota => nota.id !== payload.id );
            state.notaActiva = null;
        },
        onCargarNotas: ( state, { payload } ) => {
            state.isCargandoNotas = false;
            state.notas = [];
            
            payload.forEach( nota => {
                const existe = state.notas.some( dbNota => dbNota === nota.id );
                if ( !existe ){
                    state.notas.push( nota );
                }
            });
        },
        onLogoutNota: ( state ) => {
            state.isCargandoNotas = true;
            state.notas = [];
            state.notaActiva = null;
        },
    }
});

export const { 
    onActualizaNota, 
    onActualizaNotaActiva,
    onBorrarNota, 
    onCargarNotas,
    onLogoutNota,
    onNuevaNota, 
    onSetNotaActiva, 
} = notaSlice.actions;
