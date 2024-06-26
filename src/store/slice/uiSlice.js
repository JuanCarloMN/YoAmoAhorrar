import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isEventoModalOpen: false,
        isClienteModalOpen: false,
    },
    reducers: {
        onOpenEventoModal: ( state ) => {
            state.isEventoModalOpen = true;
        },
        onCloseEventoModal: ( state ) => {
            state.isEventoModalOpen = false;
        },
        onOpenClienteModal: ( state ) => {
            state.isClienteModalOpen = true;
        },
        onCloseClienteModal: ( state ) => {
            state.isClienteModalOpen = false;
        },
    }
});


export const { 
    onOpenEventoModal, 
    onCloseEventoModal,

    onOpenClienteModal,
    onCloseClienteModal, 

} = uiSlice.actions;