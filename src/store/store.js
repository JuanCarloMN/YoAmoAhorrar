import { configureStore } from '@reduxjs/toolkit';
import { agendaSlice, authSlice, clienteSlice, uiSlice, prospectoSlice, catalogoSlice, blogSlice, suscriptoresSlice, noticiaSlice, citaSlice, mensajeSlice, perfilSlice } from './'
// import { mensajeSlice } from './slice/mensajeSlice';

export const store = configureStore({
    reducer: {
        agenda: agendaSlice.reducer,
        auth: authSlice.reducer,
        blog: blogSlice.reducer,
        catalogo: catalogoSlice.reducer,
        cita: citaSlice.reducer,
        cliente: clienteSlice.reducer,
        iu: uiSlice.reducer,
        mensaje: mensajeSlice.reducer,
        perfil: perfilSlice.reducer,
        noticia: noticiaSlice.reducer,
        prospecto: prospectoSlice.reducer,
        suscriptor: suscriptoresSlice.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })

})