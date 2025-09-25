import { addHours } from 'date-fns';
import { useUiStore } from '../../../hooks';
import { useCitaStore } from '../../../hooks/useCitaStore';

export const FabCita = () => {

    const { openCitaModal } = useUiStore();
    const { setCitaActiva } = useCitaStore();

    const handleClickNew = () => {
        setCitaActiva({
            titulo: '',
            notas: '',
            nombre: '',
            email: '',
            telefono: '',
            inicio: new Date(),
            fin: addHours( new Date(), 1 ),
            bgColor: '#1568C0',

        });
        openCitaModal();
    }

    return (
        <button
            className="btn fab-cita"
            onClick={ handleClickNew }
        >
            {/* <i className="fas fa-plus" ></i> */}
            <label className=''>Cita</label>
        </button>
    )
}

