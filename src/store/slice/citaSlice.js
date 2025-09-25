import { createSlice } from '@reduxjs/toolkit';

export const citaSlice = createSlice({
    name: 'cita',
    initialState: {
        isCargandoCitas: true,
        citas: [],
        citaActiva: null
    },
    reducers: {
        onSetCitaActiva: ( state, { payload } ) => {
            state.citaActiva = payload;
        },
        onNuevaCita: (state, { payload } ) => {
            state.citas.push( payload );
            state.citaActiva = null;
        },
        onActualizaCita: ( state, { payload } ) => {
            state.citas = state.citas.map( cita => {
                if ( cita.id === payload.id ) {
                    return payload;
                }
                return cita;
            });
        },
        onBorrarCita: ( state, { payload } ) => {
            state.citas = state.citas.filter( cita => cita.id !== payload.id );
            state.citaActiva = null;
        },
        onCargarCitas: ( state, { payload } ) => {
            state.isCargandoCitas = false;
            state.citas = [];

            payload.forEach( cita => {                
                const existe = state.citas.some( dbCita => dbCita === cita.id );
                if ( !existe ){
                    state.citas.push( cita );
                }
            });
        },
        onLogoutCita: ( state ) => {
            state.isCargandoCitas = true;
            state.citas = [];
            state.citaActiva = null;
        },
    }
});

export const { 
    onActualizaCita,
    onBorrarCita, 
    onCargarCitas,
    onLogoutCita,
    onNuevaCita, 
    onSetCitaActiva, 
} = citaSlice.actions;
