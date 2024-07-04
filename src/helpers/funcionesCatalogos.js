import Swal from "sweetalert2";

export const nuevoCatalogo = ( tipo, titulo ) => {
    Swal.fire(
        {
            title: titulo,
            input: "text",
            inputAttributes: {
                autocapitalize: "true"
            },
            showCancelButton: true,
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#10A009",
        }
    ).then(( result ) => 
        {
            if ( result.isConfirmed ) {

                if ( result.value === '' ) {
                    Swal.fire( titulo, 'Información incorrecta', 'error' );
                }
                console.log({result});
            }

        }
    );
}

export const editaCatalogo = ( tipo, id, categoria, titulo, valor ) => {

    Swal.fire(
        {
            title: titulo,
            input: "text",
            inputValue: valor,
            inputAttributes: {
                autocapitalize: "true"
            },
            showCancelButton: true,
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#10A009",
        }
    ).then(( result ) => 
        {
            if ( result.isConfirmed ) {

                if ( result.value === '' ) {
                    Swal.fire( titulo, 'Información incorrecta', 'error' );
                }
                console.log({result});
            }

        }
    );
}

export const eliminaCatalogo = ( tipo, id, categoria, titulo, valor ) => {
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
            Swal.fire({
                title: "Cliente eliminado",
                text: "Se eliminó al cliente de forma correcta",
                icon: "success"
            });
        }
    });
}
