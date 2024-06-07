import { useAgendaStore, useUiStore } from '../../hooks';


export const FabDelete = () => {

    const { startDeletingEvent, hasEventSelected } = useAgendaStore();

    const handleDelete = () => {
        startDeletingEvent();
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={ handleDelete }
            style={{ 
                display: hasEventSelected ? '' : 'none'
            }}
        >
            <i className="fas fa-trash-alt" ></i>
        </button>
    )
}

