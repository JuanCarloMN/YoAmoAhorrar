
export const CitaEvento = ( { event } ) => {

    const { nombre } = event;

    return (
        <>
            {/* <strong>{ titulo }</strong> */}
            {/* <img src={ `../../../../../img/icoAgenda.svg` } className="icono-evento mt-2 ms-2" /> */}
            <h6>{ nombre }</h6>
        </>
    )
}

