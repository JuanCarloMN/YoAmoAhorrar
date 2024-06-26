import { configureStore } from '@reduxjs/toolkit';
import { agendaSlice, authSlice, clienteSlice, uiSlice, prospectoSlice } from './'

export const store = configureStore({
    reducer: {
        agenda: agendaSlice.reducer,
        auth: authSlice.reducer,
        cliente: clienteSlice.reducer,
        prospecto: prospectoSlice.reducer,
        iu: uiSlice.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })

})