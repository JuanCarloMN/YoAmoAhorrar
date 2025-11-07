import { useEffect } from "react";
import { useIndicadoresStore } from "../../hooks/useIndicadoresStore";
import { GraficaUDIPage } from "./GraficaUDIPage";
import { GraficaDolarPage } from "./GraficaDolarPage";

export const IndicadoresPage = () => {
    
    const { startCargarIndicadores } = useIndicadoresStore()
    
    useEffect( () => {
        startCargarIndicadores();
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
