export const validaFormulario = ( campo ) => {
    if ( !campo ) {
        return 'is-invalid'
    }
    return '';
}

export const validaCampo = ( campo ) => {
    const campoValida = () => {
        switch ( campo ) {
            case 'datoNombre': return 'validaNombre'
            case 'datoRFC': return 'validaRFC'
            case 'datoCURP': return 'validaCURP'
            case 'datoNoacimiento': return 'validaNacimiento'
            case 'datoCelular': return 'validaCelular'
            case 'datoEmail': return 'validaEmail'
            case 'datoDireccion': return 'validaDireccion'
            case 'datoCP': return 'validaCP'
            case 'datoColonia': return 'validaColonia'
            case 'datoCiudad': return 'validaCiudad'
            case 'datoEstado': return 'validaEstado'
        }
    }
    return campoValida;
}

export const campoEquivalente = ( campo, tipo ) => {
    if ( tipo === 1 ) {
        switch ( campo ) {
            case 'prospectoNombre': return 'datoNombre';
            case 'prospectoApellidoP': return 'datoApellidoP';
            case 'prospectoApellidoM': return 'datoApellidoM';
            case 'prospectoRFC': return 'datoRFC';
            case 'prospectoCURP': return 'datoCURP';
            case 'prospectoNacimiento': return 'datoNacimiento';
            case 'prospectoEstadoCivil': return 'datoEstadoCivil';
            case 'prospectoEstadoCivil': return 'datoSexo';
            case 'prospectoEstadoCivil': return 'datoEscolaridad';
            case 'prospectoCelular': return 'datoCelular';
            case 'prospectoTelefono': return 'datoTelefono';
            case 'prospectoEmail': return 'datoEmail';
            case 'prospectoDireccion': return 'datoDireccion';
            case 'prospectoCP': return 'datoCP';
            case 'prospectoColonia': return 'datoColonia';
            case 'prospectoCiudad': return 'datoCiudad';
            case 'prospectoEstado': return 'datoEstado';
            case 'prospectoEmpresa': return 'datoEmpresa';
            case 'prospectoPuesto': return 'datoPuesto';
            case 'prospectoAntiguedad': return 'datoAntiguedad';
            case 'prospectoActividades': return 'datoActividades';
            case 'prospectoConyugue': return 'datoConyugue';
            case 'prospectoNumeroHijos': return 'datoNumeroHijos';
            case 'prospectoTipoVivienda': return 'datoTipoVivienda';
            case 'prospectoPasatiempo': return 'datoPasatiempo';
            case 'prospectoMascotas': return 'datoMascotas';
            case 'prospectoDeporte': return 'datoDeporte';
            case 'prospectoDesde': return 'datoDesde';
            case 'prospectoReferido': return 'datoReferido';
            case 'prospectoNotas': return 'datoNotas';
    
            case 'clienteNombre': return 'datoNombre';
            case 'clienteApellidoP': return 'datoApellidoP';
            case 'clienteApellidoM': return 'datoApellidoM';
            case 'clienteRFC': return 'datoRFC';
            case 'clienteCURP': return 'datoCURP';
            case 'clienteNacimiento': return 'datoNacimiento';
            case 'clienteEstadoCivil': return 'datoEstadoCivil';
            case 'clienteSexo': return 'datoSexo';
            case 'clienteEscolaridad': return 'datoEscolaridad';
            case 'clienteCelular': return 'datoCelular';
            case 'clienteTelefono': return 'datoTelefono';
            case 'clienteEmail': return 'datoEmail';
            case 'clienteDireccion': return 'datoDireccion';
            case 'clienteCP': return 'datoCP';
            case 'clienteColonia': return 'datoColonia';
            case 'clienteCiudad': return 'datoCiudad';
            case 'clienteEstado': return 'datoEstado';
            case 'clienteEmpresa': return 'datoEmpresa';
            case 'clientePuesto': return 'datoPuesto';
            case 'clienteAntiguedad': return 'datoAntiguedad';
            case 'clienteActividades': return 'datoActividades';
            case 'clienteConyugue': return 'datoConyugue';
            case 'clienteNumeroHijos': return 'datoNumeroHijos';
            case 'clienteTipoVivienda': return 'datoTipoVivienda';
            case 'clientePasatiempo': return 'datoPasatiempo';
            case 'clienteMascotas': return 'datoMascotas';
            case 'clienteDeporte': return 'datoDeporte';
            case 'clienteDesde': return 'datoDesde';
            case 'clienteReferido': return 'datoReferido';
            case 'clienteNotas': return 'datoNotas';
            case 'id': return 'id';
        }
    }

    if ( tipo === 2 ) {
        switch ( campo ) {
            case 'datoNombre': return 'clienteNombre';
            case 'datoApellidoP': return 'clienteApellidoP';
            case 'datoApellidoM': return 'clienteApellidoM';
            case 'datoRFC': return 'clienteRFC';
            case 'datoCURP': return 'clienteCURP';
            case 'datoNacimiento': return 'clienteNacimiento';
            case 'datoEstadoCivil': return 'clienteEstadoCivil'
            case 'datoSexo': return 'clienteSexo'
            case 'datoEscolaridad': return 'clienteEscolaridad'
            case 'datoCelular': return 'clienteCelular';
            case 'datoTelefono': return 'clienteTelefono';
            case 'datoEmail': return 'clienteEmail';
            case 'datoDireccion': return 'clienteDireccion';
            case 'datoCP': return 'clienteCP';
            case 'datoColonia': return 'clienteColonia';
            case 'datoCiudad': return 'clienteCiudad';
            case 'datoEstado': return 'clienteEstado';
            case 'datoEmpresa': return 'clienteEmpresa';
            case 'datoPuesto': return 'clientePuesto';
            case 'datoAntiguedad': return 'clienteAntiguedad';
            case 'datoActividades': return 'clienteActividades';
            case 'datoConyugue': return 'clienteConyugue';
            case 'datoNumeroHijos': return 'clienteNumeroHijos';
            case 'datoTipoVivienda': return 'clienteTipoVivienda';
            case 'datoPasatiempo': return 'clientePasatiempo';
            case 'datoMascotas': return 'clienteMascotas';
            case 'datoDeporte': return 'clienteDeporte';
            case 'datoDesde': return 'clienteDesde';
            case 'datoReferido': return 'clienteReferido';
            case 'datoNotas': return 'clienteNotas';
            case 'id': return 'id';
        }
    }

    if ( tipo === 3 ) {
        switch ( campo ) {
            case 'datoNombre': return 'prospectoNombre';
            case 'datoApellidoP': return 'prospectoApellidoP';
            case 'datoApellidoM': return 'prospectoApellidoM';
            case 'datoRFC': return 'prospectoRFC';
            case 'datoCURP': return 'prospectoCURP';
            case 'datoNacimiento': return 'prospectoNacimiento';
            case 'datoEstadoCivil': return 'prospectoEstadoCivil'
            case 'datoSexo': return 'prospectoSexo'
            case 'datoEscolaridad': return 'prospectoEscolaridad'
            case 'datoCelular': return 'prospectoCelular';
            case 'datoTelefono': return 'prospectoTelefono';
            case 'datoEmail': return 'prospectoEmail';
            case 'datoDireccion': return 'prospectoDireccion';
            case 'datoCP': return 'prospectoCP';
            case 'datoColonia': return 'prospectoColonia';
            case 'datoCiudad': return 'prospectoCiudad';
            case 'datoEstado': return 'prospectoEstado';
            case 'datoEmpresa': return 'prospectoEmpresa';
            case 'datoPuesto': return 'prospectoPuesto';
            case 'datoAntiguedad': return 'prospectoAntiguedad';
            case 'datoActividades': return 'prospectoActividades';
            case 'datoConyugue': return 'prospectoConyugue';
            case 'datoNumeroHijos': return 'prospectoNumeroHijos';
            case 'datoTipoVivienda': return 'prospectoTipoVivienda';
            case 'datoPasatiempo': return 'prospectoPasatiempo';
            case 'datoMascotas': return 'prospectoMascotas';
            case 'datoDeporte': return 'prospectoDeporte';
            case 'datoDesde': return 'prospectoDesde';
            case 'datoReferido': return 'prospectoReferido';
            case 'datoNotas': return 'prospectoNotas';
            case 'id': return 'id';
        }
    }
}

export const cambiaCampos = ( datos, tipo ) => {
    let nuevoDatos = {}
    let campoDato = ""
    
    Object.keys( datos ).forEach( campo => {
        
        campoDato = campoEquivalente( campo, tipo );        
        nuevoDatos[ campoDato ] = datos[ campo ];
    })    
    return nuevoDatos
}
