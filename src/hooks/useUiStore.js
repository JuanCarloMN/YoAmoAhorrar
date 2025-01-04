import { useDispatch, useSelector } from 'react-redux';
import { onClosePolizaModal, onCloseClienteModal, onCloseEventoModal, onCloseProspectoModal, onOpenPolizaModal, onOpenClienteModal, onOpenEventoModal, onOpenProspectoModal, onOpenBlogModal, onCloseBlogModal } from '../store';


export const useUiStore = () => {

    const dispatch = useDispatch();

    const { 
        isBlogModalOpen,
        isClienteModalOpen,
        isEventoModalOpen,
        isPolizaModalOpen,
        isProspectoModalOpen,
    } = useSelector( state => state.iu );

    const openBlogModal = () => {
        dispatch( onOpenBlogModal() );
    }

    const closeBlogModal = () => {
        dispatch( onCloseBlogModal() );
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
        isPolizaModalOpen,
        isProspectoModalOpen,

        // Métodos
        closeBlogModal,
        closeClienteModal,
        closeEventoModal,
        closePolizaModal,
        closeProspectoModal,
        openBlogModal,
        openClienteModal,
        openEventoModal,
        openPolizaModal,
        openProspectoModal,
        toggleEventoModal,
    }
}