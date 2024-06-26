import { useAgendaStore, useUiStore } from '../../../hooks';


export const FabBorrar = () => {

    const { startBorrarEvento, hayEventoSeleccionado } = useAgendaStore();

    const handleDelete = () => {
        startBorrarEvento();
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={ handleDelete }
            style={{ 
                display: hayEventoSeleccionado ? '' : 'none'
            }}
        >
            <i className="fas fa-trash-alt" ></i>
        </button>
    )
}

