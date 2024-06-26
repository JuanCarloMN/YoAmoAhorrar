import { useDispatch, useSelector } from 'react-redux';
import { onCloseClienteModal, onCloseEventoModal, onOpenClienteModal, onOpenEventoModal } from '../store';


export const useUiStore = () => {

    const dispatch = useDispatch();

    const { 
        isEventoModalOpen,
        isClienteModalOpen,
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
 
    return {
        // Propiedades
        isEventoModalOpen,
        isClienteModalOpen,

        // Métodos
        closeClienteModal,
        closeEventoModal,
        openClienteModal,
        openEventoModal,
        toggleEventoModal,
    }
}