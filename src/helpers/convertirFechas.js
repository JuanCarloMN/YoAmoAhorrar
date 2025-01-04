import { parseISO } from "date-fns";


export const convierteFechaEvento = ( eventos = [] ) => {

    return eventos.map( evento => {
       
        evento.inicio = parseISO( evento.inicio );
        evento.fin = parseISO( evento.fin );
        
        return evento;
    });
}

export const convierteFechaCliente = ( clientes = [] ) => {

    return clientes.map( cliente => {
       
        cliente.clienteNacimiento = parseISO( cliente.clienteNacimiento );
        cliente.clienteDesde = parseISO( cliente.clienteDesde );
        
        return cliente;
    });
}

export const convierteFechaProspecto = ( prospectos = [] ) => {

    return prospectos.map( prospecto => {
       
        prospecto.prospectoNacimiento = parseISO( prospecto.prospectoNacimiento );
        prospecto.prospectoDesde = parseISO( prospecto.prospectoDesde );
        
        return prospecto;
    });
}

export const convierteFechaMensaje = ( mensajes = [] ) => {

    return mensajes.map( mensaje => {
       
        mensaje.mensajeFecha = parseISO( mensaje.mensajeFecha );
        
        return mensaje;
    });
}

export const convierteFechaBlog = ( blogs = [] ) => {

    return blogs.map( blog => {
       
        blog.blogFecha = parseISO( blog.blogFecha );
        
        return blog;
    });
}