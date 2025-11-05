import { createSlice } from '@reduxjs/toolkit';

export const indicadoresSlice = createSlice({
    name: 'indicadores',
    initialState: {
        isCargandoIndicadores: true,
        indicadoresUDI: [],
        indicadoresDolar: [],
    },
    reducers: {
        onCargarIndicadoresUDI: ( state, { payload } ) => {
            state.isCargandoIndicadores = false;
            state.indicadoresUDI = [];

            payload.datos.forEach( indicador => {
                const existe = state.indicadoresUDI.some( dbIndicador => dbIndicador === indicador.id );
                if ( !existe ){
                    state.indicadoresUDI.push( indicador );
                }
            });
        },
        onCargarIndicadoresDolar: ( state, { payload } ) => {
            state.isCargandoIndicadores = false;
            state.indicadoresDolar = [];

            payload.datos.forEach( indicador => {
                const existe = state.indicadoresDolar.some( dbIndicador => dbIndicador === indicador.id );
                if ( !existe ){
                    state.indicadoresDolar.push( indicador );
                }
            });
        },
    }
});

export const { 
    onCargarIndicadoresUDI,
    onCargarIndicadoresDolar,
} = indicadoresSlice.actions;
