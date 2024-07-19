const icoEvento = ( tipo ) => {
    let icono = '';
    switch ( tipo ) {
        case 1: icono = 'icoAgenda.svg'; break;     // Agenda Personal
        case 2: icono = 'icoCumpleanos.svg'; break; // Cumpleaños
        case 3: icono = 'icoRenovacion.svg'; break; // Renovaciones
        case 4: icono = 'icoPendiente.svg'; break;  // Pendientes
        case 5: icono = 'icoOcio.svg'; break;       // Otros
    }
    return icono;
}

export const AgendaEvento = ( { event } ) => {

    const { titulo, usuario, tipo } = event;

    return (
        <>
            {/* <strong>{ titulo }</strong> */}
            <img src={ `../../../../../img/${icoEvento( tipo )}` } className="icono-evento mt-2 ms-2" />
            {/* <span> - { usuario.nombre }</span> */}
        </>
    )
}

