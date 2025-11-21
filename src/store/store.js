import { configureStore } from '@reduxjs/toolkit';
import { agendaSlice, authSlice, clienteSlice, uiSlice, prospectoSlice, catalogoSlice, blogSlice, suscriptoresSlice, noticiaSlice, citaSlice, mensajeSlice, perfilSlice, indicadoresSlice, notaSlice, polizaSlice } from './'

export const store = configureStore({
    reducer: {
        agenda: agendaSlice.reducer,
        auth: authSlice.reducer,
        blog: blogSlice.reducer,
        catalogo: catalogoSlice.reducer,
        cita: citaSlice.reducer,
        cliente: clienteSlice.reducer,
        indicadores: indicadoresSlice.reducer,
        iu: uiSlice.reducer,
        mensaje: mensajeSlice.reducer,
        nota: notaSlice.reducer,
        noticia: noticiaSlice.reducer,
        perfil: perfilSlice.reducer,
        poliza: polizaSlice.reducer,
        prospecto: prospectoSlice.reducer,
        suscriptor: suscriptoresSlice.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })

})
