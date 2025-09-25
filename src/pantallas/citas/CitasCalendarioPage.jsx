import { useEffect, useState } from "react";
import { Calendar } from "react-big-calendar"
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { citaLocalizer, getMessagesES } from "../../helpers"
import { useCitaStore } from "../../hooks/useCitaStore";
import { useDispatch, useSelector } from "react-redux";
import { CitasToolbar, FabCita, CitaEvento, CitaModal } from "../componentes/cita";
import { useUiStore } from "../../hooks";

export const CitasCalendarioPage = () => {
    const fechaActual = new Date();
    const fechaAgenda = (localStorage.getItem('fechaAgenda')) ? localStorage.getItem('fechaAgenda') : fechaActual;

    const { citas } = useSelector( state => state.cita );
    const [ ultimaVista, setUltimaVista ] = useState( localStorage.getItem('ultimaVista') || 'month' );
    const [ fecha, setFecha ] = useState( fechaAgenda );
    const { setCitaActiva, startCargarCitas } = useCitaStore();
    const { openCitaModal } = useUiStore();
    const dispatch = useDispatch();


    const eventStyleGetter = () => {
        const style = {
            backgroundColor: '#1568C0',
            borderRadious: '0px',
            opacity: 0.8,
            color: 'white'
            }

            return {
                style
        }
    }

    const onDoubleClick = ( cita ) => {
        console.log('Doble click dia');        
        openCitaModal();
    }

    const onSelect = ( cita ) => {
        setCitaActiva( cita );
        if (localStorage.getItem('isMobile') === 'true') {
            onDoubleClick( cita );
        }
    }

    const onViewChange = ( cita ) => {
        localStorage.setItem( 'ultimaVista', cita );
        setUltimaVista( cita );
    }

    const cambiaVista = ( tipo ) => {
        setUltimaVista( tipo );
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
        startCargarCitas();
    }, []);

    useEffect(() => {
        localStorage.setItem('fechaAgenda', fecha )
    }, [ fecha ])

    return (
        <>
            <CitasToolbar cambiaVista={ cambiaVista } cambiaFecha={ cambiaFecha } fechaCalendario={ fechaCalendario } fecha={ fecha } vista={ ultimaVista } />
            <Calendar 
                culture='es'
                localizer={ citaLocalizer }
                events={ citas }
                defaultView={ ultimaVista }
                startAccessor="inicio"
                endAccessor="fin"
                style={{ height: 'calc( 100vh - 240px )', width: 'calc( 100vw - 35px )' }}
                messages={ getMessagesES() }
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CitaEvento,
                }}
                onDoubleClick={ onDoubleClick }
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
            <CitaModal />
            <FabCita />
        </>
    )
}
