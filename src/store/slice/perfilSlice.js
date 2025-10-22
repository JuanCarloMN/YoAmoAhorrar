import { createSlice } from '@reduxjs/toolkit';

export const perfilSlice = createSlice({
    name: 'perfil',
    initialState: {
        isCargandoPerfil: true,
        perfiles: [],
        perfilActivo: null
    },
    reducers: {
        onSetPerfilActivo: ( state, { payload } ) => {
            state.perfilActivo = payload;
        },
        onNuevoPerfil: (state, { payload } ) => {
            state.perfiles.push( payload );
            state.perfilActivo = null;
        },
        onActualizaPerfil: ( state, { payload } ) => {
            state.perfiles = state.perfiles.map( perfil => {
                if ( perfil.id === payload.id ) {
                    return payload;
                }
                return perfil;
            });
        },
        onBorrarPerfil: ( state, { payload } ) => {
            state.perfiles = state.perfiles.filter( perfil => perfil.id !== payload.id );
            state.perfilActivo = null;
        },
        onCargarPerfiles: ( state, { payload } ) => {
            state.isCargandoPerfil = false;
            state.perfiles = [];

            payload.forEach( perfil => {
                const existe = state.perfiles.some( dbPerfil => dbPerfil === perfil.id );
                if ( !existe ){
                    state.perfiles.push( perfil );
                }
            });
        },
        onLogoutPerfil: ( state ) => {
            state.isCargandoPerfil = true;
            state.perfiles = [];
            state.perfilActivo = null;
        },
    }
});

export const { 
    onActualizaPerfil, 
    onBorrarPerfil, 
    onCargarPerfiles,
    onLogoutPerfil,
    onNuevoPerfil, 
    onSetPerfilActivo, 
} = perfilSlice.actions;
