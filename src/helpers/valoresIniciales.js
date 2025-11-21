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

export const validaPoliza = {
    validaClave: '',
    validaTipo: '',
    validaTipoMoneda: '',
    validaMonto: '',
    validaFecha: '',
    validaCliente: '',
    validaAsesor: '',
    validaAseguradora: '',
    validaEstatus: '',
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

export const validaNota = {
    validaDetalle: '',
    validaCategoria: '',
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

export const inicioCP = {
    colonias: [[0, '']],
    ciudades: [[0, '']],
    estados: [[0, '']]
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

export const notaInicial = {
    notaCliente: '',
    notaCategoria: '',
    notaDetalle: '',
    notaUsuario: '',
    notaFecha: new Date(),
}

export const perfilInicial = {
    perfilNombre: '',
    perfilEmail: '',
    perfilTelefono: '',
    perfilSitioWeb: '',
    perfilIngresos: 0,
    perfilObjetivo: 0,
    perfilRespuestas: [0, 0, 0, 0, 0, 0, 0, 0],
    perfilResultado: "",
    perfilPrivacidad: false,
    perfilFecha: new Date()
}

export const polizaInicial = {
    polizaClave: '',
    polizaTipo: '',
    polizaPlan: '',
    polizaTipoMoneda: '',
    polizaMonto: 0,
    polizaSumaAsegurada: 0,
    polizaPrimaPlaneada: 0,
    polizaPrimaBasica: 0,
    polizaDeducible: 0,
    polizCoaseguro: 0,
    polizTope: 0,
    polizaPlazo: 0,
    polizaTipoPlazo: '',
    polizaFecha: new Date(),
    polizaCliente: '',
    polizaTipoPago: '',
    polizaAsesor: '',
    polizaAseguradora: '',
    polizaEstatus: '',
    polizaNotas: ''
}
