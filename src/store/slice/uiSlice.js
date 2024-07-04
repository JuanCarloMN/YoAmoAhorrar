import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isEventoModalOpen: false,
        isCatalogoModalOpen: false,
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
        onOpenCatalogoModal: ( state ) => {
            state.isCatalogoModalOpen = true;
        },
        onCloseCatalogoModal: ( state ) => {
            state.isCatalogoModalOpen = false;
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

    onOpenCatalogoModal,
    onCloseCatalogoModal, 

    onOpenClienteModal,
    onCloseClienteModal, 

    onOpenProspectoModal,
    onCloseProspectoModal, 

} = uiSlice.actions;