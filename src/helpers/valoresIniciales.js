import { addHours } from "date-fns"

export const validacionCliente = {
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


export const formularioCliente = {
        clienteNombre: '',
        clienteApellidoP: '',
        clienteApellidoM: '',
        clienteRFC: '',
        clienteCURP: '',
        clienteNacimiento: new Date(),
        clienteCelular: '',
        clienteTelefono: '',
        clienteEmail: '',
        clienteDireccion: '',
        clienteCP: '',
        clienteColonia: '',
        clienteCiudad: '',
        clienteEstado: '',
        clienteDesde: new Date(),
        clienteReferido: '',
        clienteNotas: ''
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

export const inicioCP = {
    colonias: [[0, 'Seleccione la colonia']],
    ciudades: [[0, 'Seleccione la ciudad']],
    estados: [[0, 'Seleccione el estado']]
}


export const eventoInicial = {
    titulo: '',
    notas: '',
    tipo: 0,
    inicio: new Date(),
    fin: addHours( new Date(), 2 )
}