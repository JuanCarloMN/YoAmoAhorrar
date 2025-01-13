import { createSlice } from '@reduxjs/toolkit';

export const suscriptoresSlice = createSlice({
    name: 'suscriptores',
    initialState: {
        isCargandoSuscriptores: true,
        suscriptores: [],
        suscriptorActivo: null
    },
    reducers: {
        onSetSuscriptorActivo: ( state, { payload } ) => {
            state.suscriptorActivo = payload;
        },
        onNuevoSuscriptor: (state, { payload } ) => {
            state.suscriptores.push( payload );
            state.suscriptorActivo = null;
        },
        onActualizaSuscriptor: ( state, { payload } ) => {
            state.suscriptores = state.suscriptores.map( suscriptor => {
                if ( suscriptor.id === payload.id ) {
                    return payload;
                }
                return suscriptor;
            });
        },
        onBorrarSuscriptor: ( state, { payload } ) => {
            state.suscriptores = state.suscriptores.filter( suscriptor => suscriptor.id !== payload.id );
            state.suscriptorActivo = null;
        },
        onCargarSuscriptores: ( state, { payload } ) => {
            state.isCargandoSuscriptores = false;
            state.suscriptores = [];

            payload.forEach( suscriptor => {
                const existe = state.suscriptores.some( dbSuscriptor => dbSuscriptor === suscriptor.id );
                if ( !existe ){
                    state.suscriptores.push( suscriptor );
                }
            });
        },
        onSuscribirse: ( state ) => {
            state.suscriptores.push( payload );
            state.suscriptorActivo = null;
        },
    }
});

export const { 
    onSetSuscriptorActivo,
    onNuevoSuscriptor, 
    onActualizaSuscriptor,
    onBorrarSuscriptor,
    onCargarSuscriptores, 
    onSuscribirse, 
} = suscriptoresSlice.actions;
