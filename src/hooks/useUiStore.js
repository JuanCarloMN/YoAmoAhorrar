import { useDispatch, useSelector } from 'react-redux';
import { onCloseCatalogoModal, onCloseClienteModal, onCloseEventoModal, onCloseProspectoModal, onOpenCatalogoModal, onOpenClienteModal, onOpenEventoModal, onOpenProspectoModal } from '../store';


export const useUiStore = () => {

    const dispatch = useDispatch();

    const { 
        isEventoModalOpen,
        isCatalogoModalOpen,
        isClienteModalOpen,
        isProspectoModalOpen,
    } = useSelector( state => state.iu );

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

    const openCatalogoModal = () => {
        dispatch( onOpenCatalogoModal() );
    }

    const closeCatalogoModal = () => {
        dispatch( onCloseCatalogoModal() );
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
        isEventoModalOpen,
        isCatalogoModalOpen,
        isClienteModalOpen,
        isProspectoModalOpen,

        // Métodos
        closeCatalogoModal,
        closeClienteModal,
        closeEventoModal,
        closeProspectoModal,
        openCatalogoModal,
        openClienteModal,
        openEventoModal,
        openProspectoModal,
        toggleEventoModal,
    }
}