import { useDispatch, useSelector } from 'react-redux';
import { onClosePolizaModal, onCloseClienteModal, onCloseEventoModal, onCloseProspectoModal, onOpenPolizaModal, onOpenClienteModal, onOpenEventoModal, onOpenProspectoModal, onOpenBlogModal, onCloseBlogModal, onOpenSuscriptoresModal, onCloseSuscriptoresModal, onOpenNoticiaModal, onCloseNoticiaModal, onOpenCitaModal, onCloseCitaModal, onOpenNotaModal, onCloseNotaModal } from '../store';


export const useUiStore = () => {

    const dispatch = useDispatch();

    const { 
        isBlogModalOpen,
        isCitaModalOpen,
        isClienteModalOpen,
        isNotaModalOpen,
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

    const openCitaModal = () => {
        dispatch( onOpenCitaModal() );
    }
    
    const closeCitaModal = () => {
        dispatch( onCloseCitaModal() );
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

    const openNotaModal = () => {
        dispatch( onOpenNotaModal() );
    }

    const closeNotaModal = () => {
        dispatch( onCloseNotaModal() );
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
        isCitaModalOpen,
        isClienteModalOpen,
        isEventoModalOpen,
        isNotaModalOpen,
        isNoticiaModalOpen,
        isPolizaModalOpen,
        isProspectoModalOpen,
        isSuscriptoresModalOpen,

        // Métodos
        closeBlogModal,
        closeCitaModal,
        closeClienteModal,
        closeEventoModal,
        closeNotaModal,
        closeNoticiaModal,
        closePolizaModal,
        closeProspectoModal,
        closeSuscriptoresModal,
        openBlogModal,
        openCitaModal,
        openClienteModal,
        openEventoModal,
        openNotaModal,
        openNoticiaModal,
        openPolizaModal,
        openProspectoModal,
        openSuscriptoresModal,
        toggleEventoModal,
    }
}