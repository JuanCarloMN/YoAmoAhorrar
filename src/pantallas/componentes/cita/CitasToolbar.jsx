import DatePicker from 'react-datepicker';

export const CitasToolbar = ( { cambiaVista, cambiaFecha, fechaCalendario, fecha, vista } ) => {

    const fechaActual = fecha;
    let vistaActual = [ '', '', '' ];
    let tipoActual = [ '', '', '', '', '', '' ];

    // tipoActual[ tipo ] = 'active'
    
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
                            minDate={ new Date() }
                        />
                </div>
                <div className="col flex-fill text-end">
                    <div className="btn-group">
                        <button className={`btn boton-agenda ${ vistaActual[0]}`} onClick={ () => enviaVista( 'month' ) }>
                            Mes
                        </button>
                        <button className={`btn boton-agenda ${ vistaActual[1]}`} onClick={ () => enviaVista( 'week' ) }>
                            Semana
                        </button>
                        {/* <button className={`btn boton-agenda ${ vistaActual[2]}`} onClick={ () => enviaVista( 'day' ) }>
                            Día
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

