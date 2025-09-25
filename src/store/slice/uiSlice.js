import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isBlogModalOpen: false,
        isNoticiaModalOpen: false,
        isClienteModalOpen: false,
        isCitaModalOpen: false,
        isEventoModalOpen: false,
        isPolizaModalOpen: false,
        isProspectoModalOpen: false,
        isSuscriptoresModalOpen: false,
    },
    reducers: {
        onOpenBlogModal: ( state ) => {
            state.isBlogModalOpen = true;
        },
        onCloseBlogModal: ( state ) => {
            state.isBlogModalOpen = false;
        },
        onOpenCitaModal: ( state ) => {
            state.isCitaModalOpen = true;
        },
        onCloseCitaModal: ( state ) => {
            state.isCitaModalOpen = false;
        },
        onOpenNoticiaModal: ( state ) => {
            state.isNoticiaModalOpen = true;
        },
        onCloseNoticiaModal: ( state ) => {
            state.isNoticiaModalOpen = false;
        },
        onOpenSuscriptoresModal: ( state ) => {
            state.isSuscriptoresModalOpen = true;
        },
        onCloseSuscriptoresModal: ( state ) => {
            state.isSuscriptoresModalOpen = false;
        },
        onOpenEventoModal: ( state ) => {
            state.isEventoModalOpen = true;
        },
        onCloseEventoModal: ( state ) => {
            state.isEventoModalOpen = false;
        },
        onOpenCitaoModal: ( state ) => {
            state.isCitaModalOpen = true;
        },
        onCloseCitaModal: ( state ) => {
            state.isCitaModalOpen = false;
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
    onOpenBlogModal,
    onCloseBlogModal,

    onOpenNoticiaModal,
    onCloseNoticiaModal,
    
    onOpenEventoModal, 
    onCloseEventoModal,

    onOpenCitaModal, 
    onCloseCitaModal,

    onOpenClienteModal,
    onCloseClienteModal, 
    
    onOpenPolizaModal,
    onClosePolizaModal, 

    onOpenProspectoModal,
    onCloseProspectoModal, 

    onOpenSuscriptoresModal,
    onCloseSuscriptoresModal, 

} = uiSlice.actions;