import { createSlice } from '@reduxjs/toolkit';

export const agendaSlice = createSlice({
    name: 'agenda',
    initialState: {
        isCargandoEventos: true,
        eventos: [],
        eventosTipo: [],
        tipo: 0,
        eventoActivo: null,
    },
    reducers: {
        onSetEventoActivo: ( state, { payload } ) => {
            state.eventoActivo = payload;
        },
        onNuevoEvento: (state, { payload } ) => {
            const tipo = parseInt(localStorage.getItem('tipoEvento'));

            state.eventos.push( payload );

            if ( tipo === 0 ) {
                state.eventosTipo = state.eventos;
            } else {
                if ( payload.tipo === tipo ) {
                    state.eventosTipo.push( payload );
                }
            }

            state.eventoActivo = null;
        },
        onActualizaEvento: ( state, { payload } ) => {
            const tipo = parseInt(localStorage.getItem('tipoEvento'));

            state.eventos = state.eventos.map( evento => {
                if ( evento.id === payload.id ) {
                    return payload;
                }
                return evento;
            });

            if ( tipo === 0 ) {
                state.eventosTipo = state.eventos;
            } else {
                state.eventosTipo = [];
                state.eventosTipo = state.eventos.map( evento => {
                    if ( evento.tipo === tipo ) {
                        return evento;
                    }
                });
            }
        },
        onBorrarEvento: ( state ) => {
            if ( state.eventoActivo ) {
                state.eventos = state.eventos.filter( evento => evento.id !== state.eventoActivo.id );
                state.eventosTipo = state.eventosTipo.filter( evento => evento.id !== state.eventoActivo.id );
                state.eventoActivo = null;
            }
        },
        onCargarEventos: ( state, { payload } ) => {
            const tipo = parseInt(localStorage.getItem('tipoEvento')) || 0;

            state.isCargandoEventos = false;
            state.eventos = [];
            state.eventosTipo = [];
            state.tipo = tipo;

            payload.forEach( evento => {
                const existe = state.eventos.some( dbEvento => dbEvento === evento.id );
                if ( !existe ){
                    state.eventos.push( evento );
                }

                const existeTipo = state.eventosTipo.some( dbEvento => dbEvento === evento.id );
                if ( !existeTipo ) {
                    if ( tipo === 0 ) {
                        state.eventosTipo.push( evento );
                    } else {
                        if ( evento.tipo === tipo ){
                            state.eventosTipo.push( evento );
                        }
                    }
                }
            });
        },
        onLogoutAgenda: ( state ) => {
            state.isCargandoEventos = true;
            state.eventos = [];
            state.eventosTipo = [];
            state.tipo = 0;
            state.eventoActivo = null;
        },
        onActualizaEventosTipo: ( state ) => {
            const tipo = parseInt(localStorage.getItem('tipoEvento'));
            
            if ( tipo === 0 ) {
                state.eventosTipo = state.eventos;
            } else {
                state.eventosTipo = state.eventos.filter( evento => evento.tipo === tipo );
            }
            state.tipo = tipo;
        },
    }
});

// Action creators are generated for each case reducer function
export const { 
    onNuevoEvento, 
    onBorrarEvento, 
    onCargarEventos,
    onLogoutAgenda,
    onSetEventoActivo, 
    onActualizaEvento, 
    onActualizaEventosTipo,
} = agendaSlice.actions;