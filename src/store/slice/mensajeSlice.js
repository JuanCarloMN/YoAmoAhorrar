import { createSlice } from '@reduxjs/toolkit';

export const mensajeSlice = createSlice({
    name: 'mensaje',
    initialState: {
        isCargandoMensajes: true,
        mensajes: [],
        mensajeActivo: null
    },
    reducers: {
        onSetMensajeActivo: ( state, { payload } ) => {
            state.mensajeActivo = payload;
        },
        onNuevoMensaje: (state, { payload } ) => {
            state.mensajes.push( payload );
            state.mensajeActivo = null;
        },
        onActualizaMensaje: ( state, { payload } ) => {
            state.mensajes = state.mensajes.map( mensaje => {
                if ( mensaje.id === payload.id ) {
                    return payload;
                }
                return mensaje;
            });
        },
        onBorrarMensaje: ( state, { payload } ) => {
            state.mensajes = state.mensajes.filter( mensaje => mensaje.id !== payload.id );
            state.mensajeActivo = null;
        },
        onCargarMensajes: ( state, { payload } ) => {
            state.isCargandoMensajes = false;
            state.mensajes = [];

            payload.forEach( mensaje => {
                const existe = state.mensajes.some( dbMensaje => dbMensaje === mensaje.id );
                if ( !existe ){
                    state.mensajes.push( mensaje );
                }
            });
        },
        onLogoutMensaje: ( state ) => {
            state.isCargandoMensajes = true;
            state.mensajes = [];
            state.mensajeActivo = null;
        },
    }
});

export const { 
    onActualizaMensaje, 
    onBorrarMensaje, 
    onCargarMensajes,
    onLogoutMensaje,
    onNuevoMensaje, 
    onSetMensajeActivo, 
} = mensajeSlice.actions;
