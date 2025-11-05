import { AreaSeries, createChart, ColorType } from 'lightweight-charts';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export const GraficaDolarPage = () => {

    const { indicadoresDolar } = useSelector( state => state.indicadores );

    const chartContainerStyle = {
        width: '100%',
        height: '300px',
    };
    const chartStyle = {
        position: 'relative',
        width: '100%',
        height: '100%',
        border: '1px solid #ccc',
    };

    const chartRef = useRef();

    useEffect(() => {
        if (chartRef.current) {
            const graficaDolar = createChart(chartRef.current,{
                layout: {
                    background: {color: '#F5EEF5'}
                }
            });

            const newSerie = graficaDolar.addSeries(AreaSeries, {
                topColor: '#F5EEF5',
                bottomColor: '#9B769A',
                lineColor: '#542052',
                lineWidth: 2,
            });
            const datosDolar = indicadoresDolar.map( indicador => (
                { time: `${indicador.fecha.substring(6,10)}-${indicador.fecha.substring(3,5)}-${indicador.fecha.substring(0,2)}`, value: parseFloat(indicador.dato) }));
            
            newSerie.setData( datosDolar );

            const myPriceFormatter = Intl.NumberFormat("es-MX", {
                style: "currency",
                currency: "MXN", 
            }).format;
      
            graficaDolar.applyOptions({
                localization: {
                priceFormatter: myPriceFormatter,
                },
            });

            return () => {
                graficaDolar.remove();
            };
        }
    }, [indicadoresDolar]);

    return (
        <div className='info'>
            <h2 className='grafica mb-1'>Valor del Dólar</h2>
            <div style={chartContainerStyle}>
                <div ref={chartRef} style={chartStyle}></div>
            </div>
        </div>
    )
}
