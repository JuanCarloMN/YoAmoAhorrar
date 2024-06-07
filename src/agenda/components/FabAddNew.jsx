import { addHours } from 'date-fns';
import { useAgendaStore, useUiStore } from '../../hooks';


export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useAgendaStore();

    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2 ),
            bgColor: '#FaFaFa',
            user: {
                _id: 123,
                name: 'Juan Carlo'
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

