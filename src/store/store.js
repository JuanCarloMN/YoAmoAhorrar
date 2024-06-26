import { configureStore } from '@reduxjs/toolkit';
// import { agendaSlice } from './slice/agendaSlice';
// import { authSlice } from './slice/authSlice';
// import { uiSlice } from './slice/uiSlice';
// import { clienteSlice } from './slice/clienteSlice';
import { agendaSlice, authSlice, uiSlice, clienteSlice } from './';

export const store = configureStore({
    reducer: {
        agenda: agendaSlice.reducer,
        auth: authSlice.reducer,
        cliente: clienteSlice.reducer,
        iu: uiSlice.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })

})