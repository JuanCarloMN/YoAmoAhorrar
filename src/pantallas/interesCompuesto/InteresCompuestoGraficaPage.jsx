import { useEffect, useRef } from "react";
import { AreaSeries, createChart, LineSeries } from 'lightweight-charts';
import { formatoMoneda } from "../../helpers/funciones";

export const InteresCompuestoGraficaPage = ( { valoresGrafica }) => {

    const chartContainerStyle = {
        width: '100%',
        height: '500px',
    };
    const chartStyle = {
        position: 'relative',
        width: '100%',
        height: '100%',
        border: '1px solid #ccc',
    };

    const chartRef = useRef();

    function frecuenciaTexto( frecuencia ) {
        switch( frecuencia ) {
            case 1:
                return 'anuales';
            case 2:
                return 'mensuales';
            case 3:
                return 'quincenales';
            case 4:
                return 'semanales';
            case 5:
                return 'diarias';
            default:
                return '';
        }
    }
    
    useEffect(() => {
        if (chartRef.current) {
            const graficaInteresCompuesto = createChart(chartRef.current,{
                layout: {
                    background: {color: '#F5EEF5'}
                },
                crosshair: {
                    horzLine: {
                        visible: false,
                        labelVisible: false,
                    },
                    vertLine: {
                        visible: false,
                        labelVisible: false,
                    },
                },
                timeScale: {
                    tickMarkFormatter: (time) => {
                        return `Año ${time}`;
                    }
                },
            });

            const serieTotal = graficaInteresCompuesto.addSeries(AreaSeries, {
                topColor: '#F5EEF5',
                bottomColor: '#9B769A',
                lineColor: '#542052',
                lineWidth: 2,
            });
            const serieDeposito = graficaInteresCompuesto.addSeries(LineSeries, {
                color: '#d12525ff',
                lineWidth: 2,
            });
            const serieInteres = graficaInteresCompuesto.addSeries(LineSeries, {
                color: '#77ba86ff',
                lineWidth: 2,
            });
            const serieAportacion = graficaInteresCompuesto.addSeries(LineSeries, {
                color: '#2e0ee4ff',
                lineWidth: 2,
            });
                        
            serieTotal.setData( valoresGrafica.datosGrafica );
            serieInteres.setData( valoresGrafica.datosInteres );
            serieDeposito.setData( valoresGrafica.datosDeposito );
            serieAportacion.setData( valoresGrafica.datosAportacion );

            graficaInteresCompuesto.timeScale().fitContent();
            const myPriceFormatter = Intl.NumberFormat("es-MX", {
                style: "currency",
                currency: "MXN",
            }).format;
      
            graficaInteresCompuesto.applyOptions({
                localization: {
                priceFormatter: myPriceFormatter,
                },
            });

            const container = document.getElementById('graficaInteresCompuesto');
            
            let toolTipMarginW = 550;
            let toolTipMarginH = 930;
            if ( container.clientWidth < 700 ) {
                toolTipMarginW = 200;
                toolTipMarginH = 980;
            } 

            const toolTip = document.createElement('div');
            toolTip.style = `width: 320px; height: 300px; position: absolute; display: none; padding: 8px; z-index: 1000;`;
            toolTip.style.background = `rgba(${'255, 255, 255'}, 0.8)`;
            toolTip.style.color = 'black';
            toolTip.style.borderColor = 'rgba( 239, 83, 80, 1)';
            container.appendChild(toolTip);

            graficaInteresCompuesto.subscribeCrosshairMove(param => {
                if (
                    param.point === undefined ||
                    !param.time ||
                    param.point.x < 0 ||
                    param.point.x > container.clientWidth ||
                    param.point.y < 0 ||
                    param.point.y > container.clientHeight
                ) {
                    toolTip.style.display = 'none';
                } else {
                    const dateStr = param.time;
                    toolTip.style.display = 'block';
                    const data = param.seriesData.get(serieTotal);
                    const montoTotal = data.value !== undefined ? Math.round( 100 * data.value ) / 100 : Math.round( 100 * data.close ) / 100;
                    const montoInteres = Math.round( 100 * param.seriesData.get( serieInteres ).value ) / 100;
                    const montoAportacion = Math.round( 100 * param.seriesData.get( serieAportacion ).value ) / 100;
                    const montoDeposito = Math.round( 100 * param.seriesData.get( serieDeposito ).value ) / 100;
                    toolTip.innerHTML = `<div style="color: ${'rgba( 239, 83, 80, 1)'}" className="d-flex justify-content-center"><h4 className="text-center">Datos del año ${ dateStr }</h4></div>
                            <div style="font-size: 24px; margin: 4px 0px; color: ${'black'}">
                                <hr>
                                <p><h5>Con tu depósito inicial de <b>${ formatoMoneda( montoDeposito ) }</b>,
                                más el acumulado de tus aportaciones ${ frecuenciaTexto( 1 ) } de <b>${ formatoMoneda( montoAportacion ) }</b>,
                                has generado <b>${ formatoMoneda( montoInteres ) }</b> de intereses,
                                para un acumulado total en el año <b>${ dateStr }</b> de: </h5></p><p><h3>${ formatoMoneda( montoTotal ) }</h3></p>
                            </div>
                        <div style="color: ${'black'}">
                        </div>`;

                    let left = param.point.x + toolTipMarginW;
                    let top = param.point.y  + toolTipMarginH;

                    toolTip.style.left = left + 'px';
                    toolTip.style.top = top + 'px';
                }
            });
            
            return () => {
                graficaInteresCompuesto.remove();
            };
        }
    }, [ valoresGrafica ]);

    return (
        <div className="info mb-5" id="graficaInteresCompuesto">
            <h2 className="grafica mb-1">Calculadora de interés compuesto</h2>
            <div style={ chartContainerStyle }>
                <div ref={ chartRef } style={ chartStyle }></div>
                <div className="row mt-2 d-flex justify-content-between align-items-center">
                    <div className="col-6 col-lg-3">
                        <i className="fa-solid fa-minus" style={ { color: '#542052'} }><small>Total acumulado</small></i>
                    </div>
                    <div className="col-6 col-lg-3">
                        <i className="fa-solid fa-minus" style={ { color: '#d12525ff'} }><small>Depósito inicial</small></i>
                    </div>
                    <div className="col-6 col-lg-3">
                        <i className="fa-solid fa-minus" style={ { color: '#77ba86ff'} }><small> Intereses ganados</small></i>
                    </div>
                    <div className="col-6 col-lg-3">
                        <i className="fa-solid fa-minus" style={ { color: '#2e0ee4ff'} }><small> Aportaciones</small></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
