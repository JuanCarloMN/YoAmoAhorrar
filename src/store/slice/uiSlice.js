import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isEventoModalOpen: false,
        isClienteModalOpen: false,
        isProspectoModalOpen: false,
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
        onOpenProspectoModal: ( state ) => {
            state.isProspectoModalOpen = true;
        },
        onCloseProspectoModal: ( state ) => {
            state.isProspectoModalOpen = false;
        },
    }
});


export const { 
    onOpenEventoModal, 
    onCloseEventoModal,

    onOpenClienteModal,
    onCloseClienteModal, 

    onOpenProspectoModal,
    onCloseProspectoModal, 

} = uiSlice.actions;