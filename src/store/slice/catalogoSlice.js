import { createSlice } from '@reduxjs/toolkit';

export const catalogoSlice = createSlice({
    name: 'catalogo',
    initialState: {
        isCargandoCatalogo: true,
        catalogos: [],
        catalogoActivo: null
    },
    reducers: {
        onSetDatoActivo: ( state, { payload } ) => {
            state.catalogoActivo = payload;
        },
        onNuevoDato: (state, { payload } ) => {
            state.catalogos = state.catalogos.map( catalogo => {
                if (catalogo.id === payload.id ){
                    return payload;
                }
                return catalogo;
            })
            state.catalogoActivo = null;
        },
        onActualizaDato: ( state, { payload } ) => {
            state.catalogos = state.catalogos.map( catalogo => {
                if (catalogo.id === payload.id ){
                    return payload;
                }
                return catalogo;
            })
            state.catalogoActivo = null;
        },
        onBorrarDato: ( state, { payload } ) => {
            state.catalogos = state.catalogos.map( catalogo => {
                if ( catalogo.id === payload.id ) {
                    return { id: catalogo.id, catalogoDescripcion: catalogo.catalogoDescripcion, catalogoDatos: catalogo.catalogoDatos.filter( dato => dato._id !== payload.idEliminar )};
                }
                return catalogo;
            })
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
    onActualizaDato, 
    onBorrarDato, 
    onCargarCatalogos,
    onLogoutCatalogo,
    onNuevoDato, 
    onSetDatoActivo, 
} = catalogoSlice.actions;