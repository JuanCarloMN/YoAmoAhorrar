import { addHours } from "date-fns"

export const validacionDatos = {
        validaNombre: '',
        validaRFC: '',
        validaCURP: '',
        validaNacimiento: '',
        validaCelular: '',
        validaEmail: '',
        validaDireccion: '',
        validaCP: '',
        validaColonia: '',
        validaCiudad: '',
        validaEstado: ''
    }

export const validaBlog = {
    validaTitulo: '',
    validaDetalle: '',
    validaCategoria: '',
    validaUsuario: '',
}

export const validaNoticia = {
    validaTitulo: '',
    validaDetalle: '',
    validaCategoria: '',
    validaUsuario: '',
}

export const formularioDatos = {
        datoNombre: '',
        datoApellidoP: '',
        datoApellidoM: '',
        datoRFC: '',
        datoCURP: '',
        datoNacimiento: new Date(),
        datoEstadoCivil: '',
        datoSexo: '',
        datoEscolaridad: '',
        datoCelular: '',
        datoTelefono: '',
        datoEmail: '',
        datoDireccion: '',
        datoCP: '',
        datoColonia: '',
        datoCiudad: '',
        datoEstado: '',
        datoEmpresa: '',
        datoPuesto: '',
        datoAntiguedad: '',
        datoActividades: '',
        datoConyugue: '',
        datoNumeroHijos: '',
        datoTipoVivienda: '',
        datoPasatiempo: '',
        datoMascotas: '',
        datoDeporte: '',
        datoDesde: new Date(),
        datoReferido: '',
        datoNotas: ''
    }

export const estiloModal = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            height: 'calc( 100vh - 100px )',
            width: 'calc( 100vw - 35px )',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }

export const estiloEvento = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

export const estiloCita = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-100, 0%)', 
    },
}

export const inicioCP = {
    colonias: [[0, 'Seleccione la colonia']],
    ciudades: [[0, 'Seleccione la ciudad']],
    estados: [[0, 'Seleccione el estado']]
}

export const citaInicial = {
    titulo: '',
    nombre: '',
    email: '',
    telefono: '',
    notas: '',
    inicio: new Date(),
    fin: addHours( new Date(), 1 )
}

export const eventoInicial = {
    titulo: '',
    notas: '',
    tipo: 0,
    inicio: new Date(),
    fin: addHours( new Date(), 2 )
}

export const mensajeInicial = {
    mensajeNombre: '',
    mensajeEmail: '',
    mensajeDetalle: '',
    mensajeFecha: new Date()
}

export const blogInicial = {
    blogTitulo: '',
    blogDetalle: '',
    blogCategoria: '',
    blogUsuario: '',
    blogFecha: new Date(),
    blogFoto: []
}

export const blogSuscribirse = {
    blogEmail: '',
    blogFecha: new Date()
}

export const noticiaInicial = {
    noticiaTitulo: '',
    noticiaDetalle: '',
    noticiaCategoria: '',
    noticiaUsuario: '',
    noticiaFecha: new Date(),
    noticiaFoto: []
}