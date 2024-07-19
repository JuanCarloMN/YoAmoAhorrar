import { useDispatch, useSelector } from 'react-redux';
import { onClosePolizaModal, onCloseClienteModal, onCloseEventoModal, onCloseProspectoModal, onOpenPolizaModal, onOpenClienteModal, onOpenEventoModal, onOpenProspectoModal } from '../store';


export const useUiStore = () => {

    const dispatch = useDispatch();

    const { 
        isEventoModalOpen,
        isPolizaModalOpen,
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
        isClienteModalOpen,
        isEventoModalOpen,
        isPolizaModalOpen,
        isProspectoModalOpen,

        // Métodos
        closeClienteModal,
        closeEventoModal,
        closePolizaModal,
        closeProspectoModal,
        openClienteModal,
        openEventoModal,
        openPolizaModal,
        openProspectoModal,
        toggleEventoModal,
    }
}