import { useEffect, useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { localizer, getMessagesES } from '../../helpers';
import { useAgendaStore, useUiStore } from '../../hooks';
import { AgendaEvento, AgendaModal, FabNuevo, FabBorrar, AgendaToolbar } from '../componentes/agenda';
import { useDispatch, useSelector } from 'react-redux';
import { onActualizaEventosTipo } from '../../store/slice/agendaSlice';

export const AgendaPage = () => {
    const fechaActual = new Date();
    const fechaAgenda = (localStorage.getItem('fechaAgenda')) ? localStorage.getItem('fechaAgenda') : fechaActual;

    const { openEventoModal } = useUiStore();
    const { eventos } = useSelector( state => state.agenda );
    const { eventosTipo, setEventoActivo, startCargarEventos } = useAgendaStore();
    const [ ultimaVista, setUltimaVista ] = useState( localStorage.getItem('ultimaVista') || 'month' );
    const [ fecha, setFecha ] = useState( fechaAgenda );
    const [ tipo, setTipo ] = useState( localStorage.getItem('tipoEvento') || 0);
    const dispatch = useDispatch();
    
    const eventStyleGetter = ( evento, inicio, fin, isSelected ) => {
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
        openEventoModal();
    }

    const onSelect = ( evento ) => {
        setEventoActivo( evento );
    }

    const onViewChange = ( evento ) => {
        localStorage.setItem( 'ultimaVista', evento );
        setUltimaVista( evento );
    }

    const cambiaVista = ( tipo ) => {
        setUltimaVista( tipo );
    }

    const cambiaTipo = ( tipo ) => {
        setTipo( tipo );
    }

    const fechaCalendario = ( nuevaFecha ) => {
        setFecha( nuevaFecha );
    }

    const cambiaFecha = ( tipo ) => {
        let nuevaFecha = new Date( fecha );
        if ( tipo === 1 ) {
            setFecha( fechaActual );
            return;
        }

        switch ( ultimaVista ) {
            case 'month':
                nuevaFecha = ( tipo === 2 ) ? nuevaFecha.setMonth( nuevaFecha.getMonth() - 1 ) : nuevaFecha.setMonth( nuevaFecha.getMonth() + 1 )
                break;
            case 'week':
                nuevaFecha = ( tipo === 2 ) ? nuevaFecha.setDate( nuevaFecha.getDate() - 7 ) : nuevaFecha.setDate( nuevaFecha.getDate() + 7 )
                break;
            case 'day':
                nuevaFecha = ( tipo === 2 ) ? nuevaFecha.setDate( nuevaFecha.getDate() - 1 ) : nuevaFecha.setDate( nuevaFecha.getDate() + 1 )
                break;
        
            default:
                break;
        }
        setFecha( new Date( nuevaFecha ) );
    }

    useEffect( () => {
        startCargarEventos();
    }, []);

    // Si cambia el tipo de evento, se deben de cargar los nuevos eventos
    useEffect( () => {
        if ( eventos.length === 0 ){
            return;
        }
        localStorage.setItem( 'tipoEvento', tipo );
        dispatch( onActualizaEventosTipo() );
      
    }, [ tipo ]);

    useEffect( () => {
        localStorage.setItem('fechaAgenda', fecha )
    }, [ fecha ])

    return (
        <>
            <AgendaToolbar cambiaVista={ cambiaVista } cambiaTipo={ cambiaTipo } cambiaFecha={ cambiaFecha } fechaCalendario={ fechaCalendario } fecha={ fecha } vista={ ultimaVista } tipo={ tipo } />
            <Calendar 
                culture='es'
                localizer={ localizer }
                events={ eventosTipo }
                defaultView={ ultimaVista }
                startAccessor="inicio"
                endAccessor="fin"
                style={{ height: 'calc( 100vh - 180px )', width: 'calc( 100vw - 35px )' }}
                messages={ getMessagesES() }
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: AgendaEvento,
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChange }
                className='ms-3 mb-3'
                view={ ultimaVista }
                toolbar={ false }
                date={ fecha }
                onNavigate={ fecha }
                showAllEvents
                min={new Date(new Date().setHours(9,0,0))}
                max={new Date(new Date().setHours(21,0,0))}
            />

            <AgendaModal />
            
            <FabNuevo />
            <FabBorrar />
        </>
    )
}
