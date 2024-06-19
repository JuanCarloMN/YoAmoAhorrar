import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

// const tempEvent = {
//     _id: new Date().getTime(),
//     title: 'Fiesta del jefe',
//     notes: 'Comprar pastel',
//     start: new Date(),
//     end: addHours( new Date(), 2 ),
//     bgColor: '#FaFaFa',
//     user: {
//         _id: 123,
//         name: 'Juan Carlo'
//     }
// }

export const agendaSlice = createSlice({
    name: 'agenda',
    initialState: {
        isLoadingEvents: true,
        events: [ 
            // tempEvent 
        ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: ( state, { payload } ) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, { payload } ) => {
            state.events.push( payload );
            state.activeEvent = null;
        },
        onUpdateEvent: ( state, { payload } ) => {
            state.events = state.events.map( event => {
                if ( event.id === payload.id ) {
                    return payload;
                }
                return event;
            });
        },
        onDeleteEvent: ( state ) => {
            if ( state.activeEvent ) {
                state.events = state.events.filter( event => event.id !== state.activeEvent.id );
                state.activeEvent = null;
            }
        },
        onLoadEvents: ( state, { payload } ) => {
            state.isLoadingEvents = false;
            // state.events = payload;

            payload.forEach( event => {
                const exists = state.events.some( dbEvent => dbEvent === event.id );
                if ( !exists ){
                    state.events.push( event );
                }
            });
        },
        onLogoutAgenda: ( state ) => {
            state.isLoadingEvents = true;
            state.events = [];
            state.activeEvent = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    onAddNewEvent, 
    onDeleteEvent, 
    onLoadEvents,
    onLogoutAgenda,
    onSetActiveEvent, 
    onUpdateEvent, 
} = agendaSlice.actions;