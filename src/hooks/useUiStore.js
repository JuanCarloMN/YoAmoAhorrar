import { useDispatch, useSelector } from 'react-redux';
import { onCloseClienteModal, onCloseEventoModal, onCloseProspectoModal, onOpenClienteModal, onOpenEventoModal, onOpenProspectoModal } from '../store';


export const useUiStore = () => {

    const dispatch = useDispatch();

    const { 
        isEventoModalOpen,
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
        isClienteModalOpen,
        isProspectoModalOpen,

        // Métodos
        closeClienteModal,
        closeEventoModal,
        closeProspectoModal,
        openClienteModal,
        openEventoModal,
        openProspectoModal,
        toggleEventoModal,
    }
}