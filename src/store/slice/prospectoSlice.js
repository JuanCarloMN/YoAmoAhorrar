import { createSlice } from '@reduxjs/toolkit';

export const prospectoSlice = createSlice({
    name: 'prospecto',
    initialState: {
        isCargandoProspectos: true,
        prospectos: [],
        prospectoActivo: null
    },
    reducers: {
        onSetProspectoActivo: ( state, { payload } ) => {
            state.prospectoActivo = payload;
        },
        onNuevoProspecto: (state, { payload } ) => {
            state.prospectos.push( payload );
            state.prospectoActivo = null;
        },
        onActualizaProspecto: ( state, { payload } ) => {
            state.prospectos = state.prospectos.map( prospecto => {
                if ( prospecto.id === payload.id ) {
                    return payload;
                }
                return prospecto;
            });
        },
        onBorrarProspecto: ( state, { payload } ) => {
            state.prospectos = state.prospectos.filter( prospecto => prospecto.id !== payload.id );
            state.prospectoActivo = null;
        },
        onCargarProspectos: ( state, { payload } ) => {
            state.isCargandoProspectos = false;
            state.prospectos = [];

            payload.forEach( prospecto => {
                const existe = state.prospectos.some( dbProspecto => dbProspecto === prospecto.id );
                if ( !existe ){
                    state.prospectos.push( prospecto );
                }
            });
        },
        onLogoutProspecto: ( state ) => {
            state.isCargandoProspectos = true;
            state.prospectos = [];
            state.prospectoActivo = null;
        },
    }
});

export const { 
    onActualizaProspecto, 
    onBorrarProspecto, 
    onCargarProspectos,
    onLogoutProspecto,
    onNuevoProspecto, 
    onSetProspectoActivo, 
} = prospectoSlice.actions;