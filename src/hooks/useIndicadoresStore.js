import { useDispatch, useSelector } from 'react-redux';
import { onCargarIndicadoresDolar, onCargarIndicadoresUDI } from '../store';
import { indicadoresApi } from '../api';

export const useIndicadoresStore = () => {

    const dispatch = useDispatch();

    const fechaActual = new Date();
    // const fechaInicio = `${fechaActual.getFullYear() - 1 }-${ (fechaActual.getMonth()+1).toString().padStart(2,'0') }-${ fechaActual.getDate().toString().padStart(2,'0') }`;
    const fechaInicio = "1995-04-04";
    const fechaFin = `${fechaActual.getFullYear() }-${ (fechaActual.getMonth()+1).toString().padStart(2,'0') }-${ fechaActual.getDate().toString().padStart(2,'0') }`;
    const serieUDI = import.meta.env.VITE_API_BANXICO_SERIE_UDI;
    const serieDolar = import.meta.env.VITE_API_BANXICO_SERIE_DOLAR;
    
    const startCargarIndicadores = async () => {
        try {
            const { data } = await indicadoresApi.get(`${ serieUDI },${ serieDolar }/datos/${ fechaInicio }/${ fechaFin }`);

            const datosUDI = data.bmx.series.filter( indicador => indicador.idSerie === serieUDI );
            const datosDolar = data.bmx.series.filter( indicador => indicador.idSerie === serieDolar );
            
            dispatch( onCargarIndicadoresUDI( datosUDI[0] ) );
            dispatch( onCargarIndicadoresDolar( datosDolar[0] ) );
        } catch (error) {
            console.log('Error al cargar los indicadores');
            console.log( error );
        }
    }

    return {
        // Propiedades

        // Métodos
        startCargarIndicadores,
    }
}
