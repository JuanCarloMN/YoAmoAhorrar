import { useEffect } from "react";
import { useIndicadoresStore } from "../../hooks/useIndicadoresStore";
import { GraficaUDIPage } from "./GraficaUDIPage";
import { GraficaDolarPage } from "./GraficaDolarPage";
import { useDispatch } from "react-redux";
import { onCargarIndicadoresDolar, onCargarIndicadoresUDI } from "../../store";

export const IndicadoresPage = () => {
    
    const dispatch = useDispatch();
    const { startCargarIndicadores } = useIndicadoresStore();
    const hoy = new Date();
    const fechaActual = `${hoy.getFullYear() - 1 }${ (hoy.getMonth() + 1).toString().padStart(2, '0') }${ hoy.getDate().toString().padStart(2, '0') }`;
    
    useEffect( () => {
        const datosIndicadores = localStorage.getItem("datosIndicadores");
        
        if ( !datosIndicadores ) {
            startCargarIndicadores();
        } else {
            const losIndicadores = JSON.parse( datosIndicadores );
            const fechaDatos = losIndicadores.fecha;
                        
            if ( fechaActual > fechaDatos ) {
                startCargarIndicadores();
            } else {
                const serieUDI = import.meta.env.VITE_API_BANXICO_SERIE_UDI;
                const serieDolar = import.meta.env.VITE_API_BANXICO_SERIE_DOLAR;
                const datosUDI = losIndicadores.data.bmx.series.filter( indicador => indicador.idSerie === serieUDI );
                const datosDolar = losIndicadores.data.bmx.series.filter( indicador => indicador.idSerie === serieDolar );
    
                dispatch( onCargarIndicadoresUDI( datosUDI[0] ) );
                dispatch( onCargarIndicadoresDolar( datosDolar[0] ) );
            }
        }
    }, []);

    return (
        <div className="container">
            {/* Graficas UDI y Dolar */}
            <div className="row acerca-de align-items-center mb-5 flex justify-content-between" id="graficas">
                <div className="col-12 col-lg-6 px-lg-2 px-3 mb-4 mb-lg-0">
                    <GraficaUDIPage />
                </div>
                <div className="col-12 col-lg-6 px-lg-2 px-3 mb-4 mb-lg-0">
                    <GraficaDolarPage />
                </div>
            </div>
        </div>
    )
}
