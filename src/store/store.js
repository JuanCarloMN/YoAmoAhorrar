import { configureStore } from '@reduxjs/toolkit';
import { agendaSlice, authSlice, clienteSlice, uiSlice, prospectoSlice, catalogoSlice } from './'
import { mensajeSlice } from './slice/mensajeSlice';

export const store = configureStore({
    reducer: {
        agenda: agendaSlice.reducer,
        auth: authSlice.reducer,
        catalogo: catalogoSlice.reducer,
        cliente: clienteSlice.reducer,
        prospecto: prospectoSlice.reducer,
        mensaje: mensajeSlice.reducer,
        iu: uiSlice.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })

})