import { configureStore } from '@reduxjs/toolkit';
import { agendaSlice, uiSlice } from './';

export const store = configureStore({
    reducer: {
        agenda: agendaSlice.reducer,
        iu: uiSlice.reducer
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })

})