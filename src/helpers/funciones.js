import { getEnvVariables } from "./getEnvVariables";

// Regresa la fecha en formato dd-MM-aaaa
export const formatoFecha = ( fecha ) => {

    const dia = ( fecha.getDate() < 10 ) ? '0' + fecha.getDate() : fecha.getDate();
    const mes = mesTexto( fecha.getMonth(), 1 );
    const anio = fecha.getFullYear();

    return dia + '-' + mes + '-' + anio;
}

// Regresa la fecha con el formato dia, mes, año separada con el signo que se le envíe
export const fechaCorta = ( fecha, signo = '-' ) => {

    const dia = ( fecha.getDate() < 10 ) ? '0' + fecha.getDate() : fecha.getDate();
    const mes = ( ( fecha.getMonth() + 1 ) < 10 ) ? '0' + ( fecha.getMonth() + 1 ) : fecha.getMonth() + 1;
    const anio = fecha.getFullYear();

    return dia + signo + mes + signo + anio
}

// Convierte el número de mes a texto largo o corto
export const mesTexto = ( mes, tipo ) => {

    switch ( mes ) {
        case 0: return ( tipo === 1 ) ? 'Enero' : 'Ene';
        case 1: return ( tipo === 1 ) ? 'Febrero' : 'Feb';
        case 2: return ( tipo === 1 ) ? 'Marzo' : 'Mar';
        case 3: return ( tipo === 1 ) ? 'Abril' : 'Abr';
        case 4: return ( tipo === 1 ) ? 'Mayo' : 'May';
        case 5: return ( tipo === 1 ) ? 'Junio' : 'Jun';
        case 6: return ( tipo === 1 ) ? 'Julio' : 'Jul';
        case 7: return ( tipo === 1 ) ? 'Agosto' : 'Ago';
        case 8: return ( tipo === 1 ) ? 'Septiembre' : 'Sep';
        case 9: return ( tipo === 1 ) ? 'Octubre' : 'Oct';
        case 10: return ( tipo === 1 ) ? 'Noviembre' : 'Nov';
        case 11: return ( tipo === 1 ) ? 'Diciembre' : 'Dic';
    }
}

// Regresa la fecha desde una fecha de MongoDB
export const fechaMongo = ( fecha ) => {

    // 1970-01-01

    // const dia = 
    // const anio = 
    // return dia + '-' + mes + '-' + anio;
}

// Obtiene el valor del dólar y la UDI al día de hoy
// export const obtenIndicadores = async () => {
//     const { VITE_URL_VALORES } = getEnvVariables();
//     const hoy = fechaCorta( new Date(), '-' );
//     let indicadores, indicador;

//     const fechaIndicadores = localStorage.getItem('fechaIndicadores');
//     const localDolar = localStorage.getItem('valorDolar');
//     const localUDI = localStorage.getItem('valorUDI');

//     if ( !fechaIndicadores || !localDolar || !localUDI ) {
//         indicadores = await ( await fetch( VITE_URL_VALORES )).json();
//         indicador = indicadores.ListaIndicadores.filter( valor => ( valor.codTipoIndicador === 158 || valor.codTipoIndicador === 159 ) );
//     } else {
//         if ( hoy !== fechaIndicadores ) {
//             indicadores = await ( await fetch( VITE_URL_VALORES )).json();
//             indicador = indicadores.ListaIndicadores.filter( valor => ( valor.codTipoIndicador === 158 || valor.codTipoIndicador === 159 ) );
//         } 
//     }
    
//     if ( indicador ){
//         localStorage.setItem( 'fechaIndicadores', indicador[0].fecha );
//         localStorage.setItem( 'valorDolar', indicador[0].valor );
//         localStorage.setItem( 'valorUDI', indicador[1].valor );
//     }
   
// }

// Formatea un número a moneda mexicana
export function formatoMoneda( valor ) {
    const formatter = new Intl.NumberFormat( 'es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2,
        } );
    return formatter.format( valor );
}
