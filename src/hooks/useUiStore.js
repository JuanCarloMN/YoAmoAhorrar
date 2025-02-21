import { useDispatch, useSelector } from 'react-redux';
import { onClosePolizaModal, onCloseClienteModal, onCloseEventoModal, onCloseProspectoModal, onOpenPolizaModal, onOpenClienteModal, onOpenEventoModal, onOpenProspectoModal, onOpenBlogModal, onCloseBlogModal, onOpenSuscriptoresModal, onCloseSuscriptoresModal, onOpenNoticiaModal, onCloseNoticiaModal } from '../store';


export const useUiStore = () => {

    const dispatch = useDispatch();

    const { 
        isBlogModalOpen,
        isClienteModalOpen,
        isEventoModalOpen,
        isNoticiaModalOpen,
        isPolizaModalOpen,
        isProspectoModalOpen,
        isSuscriptoresModalOpen,
    } = useSelector( state => state.iu );

    const openBlogModal = () => {
        dispatch( onOpenBlogModal() );
    }
    
    const closeBlogModal = () => {
        dispatch( onCloseBlogModal() );
    }

    const openNoticiaModal = () => {
        dispatch( onOpenNoticiaModal() );
    }
    
    const closeNoticiaModal = () => {
        dispatch( onCloseNoticiaModal() );
    }
    
    const openSuscriptoresModal = () => {
        dispatch( onOpenSuscriptoresModal() );
    }

    const closeSuscriptoresModal = () => {
        dispatch( onCloseSuscriptoresModal() );
    }

    const openEventoModal = () => {
        dispatch( onOpenEventoModal() );
    }

    const closeEventoModal = () => {
        dispatch( onCloseEventoModal() );
    }

    const toggleEventoModal = () => {
        ( isEventoModalOpen )
            ? openEventoModal()
            : closeEventoModal();
    }

    const openPolizaModal = () => {
        dispatch( onOpenPolizaModal() );
    }

    const closePolizaModal = () => {
        dispatch( onClosePolizaModal() );
    }

    const openClienteModal = () => {
        dispatch( onOpenClienteModal() );
    }

    const closeClienteModal = () => {
        dispatch( onCloseClienteModal() );
    }

    const openProspectoModal = () => {
        dispatch( onOpenProspectoModal() );
    }

    const closeProspectoModal = () => {
        dispatch( onCloseProspectoModal() );
    }
 
    return {
        // Propiedades
        isBlogModalOpen,
        isClienteModalOpen,
        isEventoModalOpen,
        isNoticiaModalOpen,
        isPolizaModalOpen,
        isProspectoModalOpen,
        isSuscriptoresModalOpen,

        // Métodos
        closeBlogModal,
        closeClienteModal,
        closeEventoModal,
        closeNoticiaModal,
        closePolizaModal,
        closeProspectoModal,
        closeSuscriptoresModal,
        openBlogModal,
        openClienteModal,
        openEventoModal,
        openNoticiaModal,
        openPolizaModal,
        openProspectoModal,
        openSuscriptoresModal,
        toggleEventoModal,
    }
}