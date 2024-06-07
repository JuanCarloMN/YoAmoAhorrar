import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { AgendaEvent, AgendaModal, FabAddNew, FabDelete, Navbar } from "../"

import { localizer, getMessagesES } from '../../helpers';
import { useAgendaStore, useUiStore } from '../../hooks';

const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
        backgroundColor: '#347CF7',
        borderRadious: '0px',
        opacity: 0.8,
        color: 'white'
    }

    return {
        style
    }
}

export const AgendaPage = () => {

    const { openDateModal } = useUiStore();
    const { events, setActiveEvent } = useAgendaStore();
    const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'week' );

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

    return (
        <>
            <Navbar />

            <Calendar 
                culture='es'
                localizer={ localizer }
                events={ events }
                defaultView={ lastView }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc( 100vh - 100px )', width: 'calc( 100vw - 10px )' }}
                messages={ getMessagesES() }
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: AgendaEvent
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChange }
            />

            <AgendaModal />
            
            <FabAddNew />
            <FabDelete />
        </>
    )
}

