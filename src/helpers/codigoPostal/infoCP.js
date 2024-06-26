import { ciudadesCP } from "./ciudadesCP.js";
import { coloniasCP } from "./coloniasCP.js";

export const infoCP = ( tipo = 1, elCP = 0 ) => {

    let codigoPostal = []

    if ( tipo === 1 ) {
        codigoPostal = ciudadesCP.filter( ciudad => ciudad[0] === elCP )
        codigoPostal.unshift(['0', 'Seleccione la ciudad', 'Seleccione el estado']);
    } else {
        codigoPostal = coloniasCP.filter( colonia => colonia[0] === elCP )
        codigoPostal.unshift(['0', 'Seleccione la colonia']);
    }

    return codigoPostal;
}