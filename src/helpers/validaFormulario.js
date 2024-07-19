
export const validaFormularioCliente = ( campo ) => {

    if ( !campo ) {
        return 'is-invalid'
    }

    return '';
}

export const validaCampoCliente = ( campo ) => {
    let campoValida = '';

    switch ( campo ) {
        case 'clienteNombre':
            campoValida = 'validaNombre'
            break;
        case 'clienteRFC':
            campoValida = 'validaRFC'
            break;
        case 'clienteCURP':
            campoValida = 'validaCURP'
            break;
        case 'clienteNoacimiento':
            campoValida = 'validaNacimiento'
            break;
        case 'clienteCelular':
            campoValida = 'validaCelular'
            break;
        case 'clienteEmail':
            campoValida = 'validaEmail'
            break;
        case 'clienteDireccion':
            campoValida = 'validaDireccion'
            break;
        case 'clienteCP':
            campoValida = 'validaCP'
            break;
        case 'clienteColonia':
            campoValida = 'validaColonia'
            break;
        case 'clienteCiudad':
            campoValida = 'validaCiudad'
            break;
        case 'clienteEstado':
            campoValida = 'validaEstado'
            break;
    }

    return campoValida;
}