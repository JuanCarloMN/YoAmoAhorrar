import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isEventoModalOpen: false,
        isPolizaModalOpen: false,
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
        onOpenPolizaModal: ( state ) => {
            state.isPolizaModalOpen = true;
        },
        onClosePolizaModal: ( state ) => {
            state.isPolizaModalOpen = false;
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
    
    onOpenPolizaModal,
    onClosePolizaModal, 

    onOpenProspectoModal,
    onCloseProspectoModal, 

} = uiSlice.actions;