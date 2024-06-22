import { addHours } from 'date-fns';
import { useAgendaStore, useUiStore } from '../../../hooks';


export const FabNuevo = () => {

    const { openDateModal } = useUiStore();
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
        openDateModal();
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

