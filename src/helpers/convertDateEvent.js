import { parseISO } from "date-fns";


export const convierteFechaEvento = ( eventos = [] ) => {

    return eventos.map( evento => {
       
        evento.inicio = parseISO( evento.inicio );
        evento.fin = parseISO( evento.fin );
        
        return evento;
    });
}