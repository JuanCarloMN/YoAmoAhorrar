import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import queryString from 'query-string';

import { localizer, getMessagesES } from '../../helpers';
import { useAgendaStore, useAuthStore, useUiStore } from '../../hooks';
import { AgendaEvento, AgendaModal, FabNuevo, FabBorrar } from '../componentes/Agenda';
import { useDispatch, useSelector } from 'react-redux';
import { onActualizaEventosTipo } from '../../store';

export const AgendaPage = () => {

    const { usuario } = useAuthStore();
    const { openDateModal } = useUiStore();
    const { eventos } = useSelector( state => state.agenda );
    const { eventosTipo, setEventoActivo, startCargarEventos } = useAgendaStore();
    const [ ultimaVista, setUltimaVista ] = useState( localStorage.getItem('ultimaVista') || 'week' );
    const location = useLocation();
    const dispatch = useDispatch();

    const eventStyleGetter = ( evento, inicio, fin, isSelected ) => {
        
        const isMyEvento = ( usuario.uid === evento.usuario._id ) || ( usuario.uid === evento.usuario.uid );

        const style = {
            backgroundColor: colorEvento( evento.tipo ),
            borderRadious: '0px',
            opacity: 0.8,
            color: 'white'
            }
    
        return {
            style
        }
    }

    const colorEvento = ( tipo ) => {
        let color = '#FDFDFD';
        switch ( tipo ) {
            case 1: color = '#C015BD'; break;   // Agenda Personal
            case 2: color = '#599F1E'; break;   // Cumpleaños
            case 3: color = '#E3DD21'; break;   // Renovaciones
            case 4: color = '#1568C0'; break;   // Pendientes
            case 5: color = '#DB0707'; break;   // Otros
        }
        return color;
    }

    const onDoubleClick = ( evento ) => {
        openDateModal();
    }

    const onSelect = ( evento ) => {
        setEventoActivo( evento );
    }

    const onViewChange = ( evento ) => {
        localStorage.setItem( 'ultimaVista', evento );
        setUltimaVista( evento );
    }

    useEffect( () => {
        startCargarEventos();
    }, []);

    // Si cambia el tipo de evento, se deben de cargar los nuevos eventos
    useEffect( () => {
        const { tipo = 0 } = queryString.parse( location.search );
        const elTipo = parseInt( tipo );
        if ( eventos.length === 0 ){
            return;
        }
        localStorage.setItem( 'tipoEvento', elTipo );
        dispatch(onActualizaEventosTipo());
      
    }, [location]);

    return (
        <>
            <Calendar 
                culture='es'
                localizer={ localizer }
                events={ eventosTipo }
                defaultView={ ultimaVista }
                startAccessor="inicio"
                endAccessor="fin"
                style={{ height: 'calc( 100vh - 110px )', width: 'calc( 100vw - 15px )' }}
                messages={ getMessagesES() }
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: AgendaEvento
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChange }
                className='mt-2 ms-2'
            />

            <AgendaModal />
            
            <FabNuevo />
            <FabBorrar />
        </>
    )
}

