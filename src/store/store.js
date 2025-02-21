import { configureStore } from '@reduxjs/toolkit';
import { agendaSlice, authSlice, clienteSlice, uiSlice, prospectoSlice, catalogoSlice, blogSlice, suscriptoresSlice, noticiaSlice } from './'
import { mensajeSlice } from './slice/mensajeSlice';

export const store = configureStore({
    reducer: {
        agenda: agendaSlice.reducer,
        auth: authSlice.reducer,
        blog: blogSlice.reducer,
        catalogo: catalogoSlice.reducer,
        cliente: clienteSlice.reducer,
        iu: uiSlice.reducer,
        mensaje: mensajeSlice.reducer,
        prospecto: prospectoSlice.reducer,
        suscriptor: suscriptoresSlice.reducer,
        noticia: noticiaSlice.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })

})