import { createSlice } from '@reduxjs/toolkit';

export const catalogoSlice = createSlice({
    name: 'catalogo',
    initialState: {
        isCargandoCatalogo: true,
        catalogos: [],
        catalogoActivo: null
    },
    reducers: {
        onSetCatalogoActivo: ( state, { payload } ) => {
            state.catalogoActivo = payload;
        },
        onNuevoCatalogo: (state, { payload } ) => {
            state.catalogos.push( payload );
            state.catalogoActivo = null;
        },
        onActualizaCatalogo: ( state, { payload } ) => {
            state.catalogos = state.catalogos.map( catalogo => {
                if ( catalogo.id === payload.id ) {
                    return payload;
                }
                return catalogo;
            });
        },
        onBorrarCatalogo: ( state, { payload } ) => {
            state.catalogos = state.catalogos.filter( catalogo => catalogo.id !== payload.id );
            state.catalogoActivo = null;
        },
        onCargarCatalogos: ( state, { payload } ) => {
            state.isCargandoCatalogos = false;
            state.catalogos = [];

            payload.forEach( catalogo => {
                const existe = state.catalogos.some( dbCatalogo => dbCatalogo === catalogo.id );
                if ( !existe ){
                    state.catalogos.push( catalogo );
                }
            });
        },
        onLogoutCatalogo: ( state ) => {
            state.isCargandoCatalogos = true;
            state.catalogos = [];
            state.catalogoActivo = null;
        },
    }
});

export const { 
    onActualizaCatalogo, 
    onBorrarCatalogo, 
    onCargarCatalogos,
    onLogoutCatalogo,
    onNuevoCatalogo, 
    onSetCatalogoActivo, 
} = catalogoSlice.actions;