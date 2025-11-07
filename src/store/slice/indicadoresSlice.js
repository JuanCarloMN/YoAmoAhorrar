import { createSlice } from '@reduxjs/toolkit';

export const indicadoresSlice = createSlice({
    name: 'indicadores',
    initialState: {
        isCargandoIndicadores: true,
        actualDolar: 0,
        actualUDI: 0,
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
                state.actualUDI = parseFloat( indicador.dato, 10 ).toFixed( 4 ) || 0;
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
                state.actualDolar = parseFloat( indicador.dato, 10 ).toFixed( 2 ) || 0;
            });
        },
    }
});

export const { 
    onCargarIndicadoresUDI,
    onCargarIndicadoresDolar,
} = indicadoresSlice.actions;
