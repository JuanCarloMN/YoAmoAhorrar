import DatePicker from 'react-datepicker';

export const AgendaToolbar = ( { cambiaVista, cambiaTipo, cambiaFecha, fechaCalendario, fecha, vista, tipo } ) => {

    const fechaActual = fecha;
    let vistaActual = [ '', '', '' ];
    let tipoActual = [ '', '', '', '', '', '' ];

    tipoActual[ tipo ] = 'active'
    
    switch ( vista ) {
        case 'month':
            vistaActual[0] = 'active'
            break;
        case 'week':
            vistaActual[1] = 'active'
            break;
        case 'day':
            vistaActual[2] = 'active'
            break;
    }
    
    const enviaVista = ( tipo ) => {
        localStorage.setItem( 'ultimaVista', tipo )
        cambiaVista( tipo );
    }

    const seleccionaFecha = ( nuevaFecha ) => {
        fechaCalendario( new Date(nuevaFecha) );
    }

    return (
        <div className="p-0 mt-2 mb-2 ms-3" style={{ width: 'calc( 100vw - 35px )' }}>
            <div className="d-flex">
                <div className="col flex-fill text-start">
                    <div className="btn-group">
                        <button className="btn boton-agenda" onClick={ () => cambiaFecha( 1 ) }>
                            Hoy
                        </button>
                        <button className="btn boton-agenda" onClick={ () => cambiaFecha( 2 ) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                            </svg>
                        </button>
                        <button className="btn boton-agenda" onClick={ () => cambiaFecha( 3 ) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="col bg-light d-flex flex-fill justify-content-center border align-items-center">
                        <DatePicker
                            showWeekNumbers={ true }
                            selected={ fechaActual }
                            onChange={ seleccionaFecha }
                            dateFormat="dd-MMMM-yyyy"
                            wrapperClassName="datePicker"
                            dropdownMode="select"
                            className=" border-0 text-center w-100 bg-light"
                            locale="es"
                            registerLocale
                            name="calendario"
                            id='calendario'
                            popperPlacement="top-start"
                            placeholder="Seleccione la fecha"
                        />
                </div>
                <div className="col flex-fill text-center ">
                    <div className="btn-group">
                        <button className={`btn boton-agenda ${ tipoActual[0] }`} onClick={ () => cambiaTipo( 0 ) }>
                            Todos
                        </button>
                        <button className={`btn boton-agenda ${ tipoActual[1] }`} onClick={ () => cambiaTipo( 1 ) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="icono-agenda" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            </svg>
                        </button>
                        <button className={`btn boton-agenda ${ tipoActual[2] }`} onClick={ () => cambiaTipo( 2 ) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="icono-agenda" viewBox="0 0 16 16">
                                <path d="m7.399.804.595-.792.598.79A.747.747 0 0 1 8.5 1.806V4H11a2 2 0 0 1 2 2v3h1a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-4a2 2 0 0 1 2-2h1V6a2 2 0 0 1 2-2h2.5V1.813a.747.747 0 0 1-.101-1.01ZM12 6.414a.9.9 0 0 1-.646-.268 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0A.9.9 0 0 1 4 6.414v1c.49 0 .98-.187 1.354-.56a.914.914 0 0 1 1.292 0c.748.747 1.96.747 2.708 0a.914.914 0 0 1 1.292 0c.374.373.864.56 1.354.56zm2.646 5.732a.914.914 0 0 1-1.293 0 1.914 1.914 0 0 0-2.707 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0L1 11.793v1.34c.737.452 1.715.36 2.354-.28a.914.914 0 0 1 1.292 0c.748.748 1.96.748 2.708 0a.914.914 0 0 1 1.292 0c.748.748 1.96.748 2.707 0a.914.914 0 0 1 1.293 0 1.915 1.915 0 0 0 2.354.28v-1.34z"/>
                            </svg>
                        </button>
                        <button className={`btn boton-agenda ${ tipoActual[3] }`} onClick={ () => cambiaTipo( 3 ) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="icono-agenda" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/>
                            </svg>
                        </button>
                        <button className={`btn boton-agenda ${ tipoActual[4] }`} onClick={ () => cambiaTipo( 4 ) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="icono-agenda" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
                            </svg>
                        </button>
                        <button className={`btn boton-agenda ${ tipoActual[5] }`} onClick={ () => cambiaTipo( 5 ) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="icono-agenda" viewBox="0 0 16 16">
                                <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
                                <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="col flex-fill text-end">
                    <div className="btn-group">
                        <button className={`btn boton-agenda ${ vistaActual[0]}`} onClick={ () => enviaVista( 'month' ) }>
                            Mes
                        </button>
                        <button className={`btn boton-agenda ${ vistaActual[1]}`} onClick={ () => enviaVista( 'week' ) }>
                            Semana
                        </button>
                        <button className={`btn boton-agenda ${ vistaActual[2]}`} onClick={ () => enviaVista( 'day' ) }>
                            Día
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

