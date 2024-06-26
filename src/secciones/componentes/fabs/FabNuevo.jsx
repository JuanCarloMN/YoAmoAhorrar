import { addHours } from 'date-fns';
import { useAgendaStore, useUiStore } from '../../../hooks';

export const FabNuevo = () => {

    const { openEventoModal } = useUiStore();
    const { setEventoActivo } = useAgendaStore();

    const handleClickNew = () => {
        setEventoActivo({
            titulo: '',
            notas: '',
            tipo: 0,
            inicio: new Date(),
            fin: addHours( new Date(), 2 ),
            bgColor: '#FaFaFa',
            usuario: {
                _id: 123,
                nombre: 'Juan Carlo'
            }
        });
        openEventoModal();
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={ handleClickNew }
        >
            <i className="fas fa-plus" ></i>
        </button>
    )
}

