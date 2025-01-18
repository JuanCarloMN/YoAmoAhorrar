import { createSlice } from '@reduxjs/toolkit';

export const noticiaSlice = createSlice({
    name: 'noticia',
    initialState: {
        isCargandoNoticias: true,
        noticias: [],
        noticiaActiva: null
    },
    reducers: {
        onSetNoticiaActiva: ( state, { payload } ) => {
            state.noticiaActiva = payload;
        },
        onNuevaNoticia: (state, { payload } ) => {
            state.noticias.push( payload );
            state.noticiaActiva = null;
        },
        onActualizaNoticia: ( state, { payload } ) => {
            state.noticias = state.noticias.map( noticia => {
                if ( noticia.id === payload.id ) {
                    return payload;
                }
                return noticia;
            });
        },
        onBorrarNoticia: ( state, { payload } ) => {
            state.noticias = state.noticias.filter( noticia => noticia.id !== payload.id );
            state.noticiaActiva = null;
        },
        onCargarNoticias: ( state, { payload } ) => {
            state.isCargandoNoticias = false;
            state.noticias = [];

            payload.forEach( noticia => {
                const existe = state.noticias.some( dbNoticia => dbNoticia === noticia.id );
                if ( !existe ){
                    state.noticias.push( noticia );
                }
            });
        },
        onLogoutNoticia: ( state ) => {
            state.isCargandoNoticias = true;
            state.noticias = [];
            state.noticiaActiva = null;
        },
    }
});

export const { 
    onActualizaNoticia,
    onBorrarNoticia, 
    onCargarNoticias,
    onLogoutNoticia,
    onNuevaNoticia, 
    onSetNoticiaActiva, 
} = noticiaSlice.actions;
