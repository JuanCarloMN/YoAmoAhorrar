import Swal from "sweetalert2";

export const nuevoDato = ( idCatalogo, titulo, startSalvarDato ) => {
    Swal.fire(
        {
            title: titulo,
            input: "text",
            showCancelButton: true,
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#10A009",
        }
    ).then( async ( result ) => 
        {
            if ( result.isConfirmed ) {
                if ( result.value.trim() === '' ) {
                    Swal.fire( titulo, 'Información incorrecta', 'error' );
                } else {
                    await startSalvarDato( { id: idCatalogo, descripcion: result.value.trim() } )
                }
            }
        }
    );
}

export const editaDato = ( catalogo, idDato, idCatalogo, titulo, valor, startSalvarDato, setDatoActivo ) => {
    setDatoActivo( { id: idDato, descripcion: valor } );
    Swal.fire({
        title: titulo,
        input: "text",
        inputValue: valor,
        showCancelButton: true,
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#10A009",
    }).then( async ( result ) => {
        if ( result.isConfirmed ) {

            if ( result.value.trim() === '' ) {
                Swal.fire( titulo, 'Información incorrecta', 'error' );
            } else {
                await startSalvarDato( { id: idCatalogo, idActualizar: idDato, descripcion: result.value.trim() } )
                setDatoActivo( null );
            }
        }
    });
}

export const eliminaDato = ( idCatalogo, idDato, titulo, valor, starBorrarDato, setDatoActivo ) => {
    setDatoActivo( { id: idDato, descripcion: valor } );
    Swal.fire({
        title: titulo,
        text: valor,
        icon: "question",
        iconColor: "#d33",
        showCancelButton: true,
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Eliminar",
        confirmButtonColor: "#d33"
    }).then( async ( result ) => {
        if ( result.isConfirmed ) {
            await starBorrarDato( { id: idCatalogo, idEliminar: idDato } )
            setDatoActivo( null );
        }
    });
}
