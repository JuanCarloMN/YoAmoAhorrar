import { useEffect, useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { AgendaEvent, AgendaModal, FabAddNew, FabDelete, Navbar } from "../"

import { localizer, getMessagesES } from '../../helpers';
import { useAgendaStore, useAuthStore, useUiStore } from '../../hooks';


export const AgendaPage = () => {
    
    const { user } = useAuthStore();
    const { openDateModal } = useUiStore();
    const { events, setActiveEvent, startLoadingEvents } = useAgendaStore();
    const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'week' );
    
    const eventStyleGetter = ( event, start, end, isSelected ) => {
        
        const isMyEvent = ( user.uid === event.user._id ) || ( user.uid === event.user.uid )
        
        const style = {
            backgroundColor: isMyEvent ? '#347CF7' : '#465660',
            borderRadious: '0px',
            opacity: 0.8,
            color: 'white'
            }
    
        return {
            style
        }
    }

    const onDoubleClick = ( event ) => {
        openDateModal();
    }

    const onSelect = ( event ) => {
        setActiveEvent( event );
    }

    const onViewChange = ( event ) => {
        localStorage.setItem( 'lastView', event );
        setLastView( event );
    }

    useEffect( () => {
        startLoadingEvents();
    }, []);

    return (
        <>
            {/* <Navbar /> */}

            <Calendar 
                culture='es'
                localizer={ localizer }
                events={ events }
                defaultView={ lastView }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc( 100vh - 105px )', width: 'calc( 100vw - 15px )' }}
                messages={ getMessagesES() }
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: AgendaEvent
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChange }
                className='mt-2 ms-2'
            />

            <AgendaModal />
            
            <FabAddNew />
            <FabDelete />
        </>
    )
}

