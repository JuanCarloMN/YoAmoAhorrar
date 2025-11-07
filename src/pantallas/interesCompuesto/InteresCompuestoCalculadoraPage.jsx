import { useEffect, useState } from "react"
import { InteresCompuestoGraficaPage } from "./InteresCompuestoGraficaPage";
import Swal from "sweetalert2";
import { InteresCompuestoResultadoPage } from "./InteresCompuestoResultadoPage";

const valoresIniciales = {
    depositoInicial: 0,
    tasaInteres: 0,
    anosInvertir: 0,
    frecuenciaInteres: 1,
    aportacionesAdicionales: 0,
}

const validacionIniciales = {
    depositoInicial: '',
    tasaInteres: '',
    anosInvertir: '',
}

const valoresGraficaIniciales = {
    datosGrafica: [ { time: 0, value: 0 }, ],
    datosInteres: [ { time: 0, value: 0 }, ],
    datosDeposito: [ { time: 0, value: 0 }, ],
    datosAportacion: [ { time: 0, value: 0 }, ],
}

const valoresTotalesIniciales = {
    deposito: 0,
    interes: 0,
    aportaciones: 0,
    total: 0,
    anos: 0,
}

export const InteresCompuestoCalculadoraPage = () => {

    const [ valoresFormulario, setValoresFormulario ] = useState( valoresIniciales );
    const [ validaciones, setValidaciones ] = useState( validacionIniciales);
    const [ valoresGrafica, setValoresGrafica ] = useState( valoresGraficaIniciales );
    const [ totales, setTotales ] = useState( valoresTotalesIniciales );

    const onInputChange = ({ target }) => {
        const valor = ( target.value ) ? '' : 'is-invalid'
        
        setValoresFormulario({
            ...valoresFormulario,
            [ target.name ]: parseInt( target.value ) || 0
        });

        setValidaciones({
            ...validaciones,
            [ target.name ]: valor
        });

    }

    const calculaInteres = () => {
        // Lógica para calcular interés compuesto
        if ( valoresFormulario.depositoInicial <= 0 || valoresFormulario.tasaInteres <= 0 || valoresFormulario.anosInvertir <= 0 || valoresFormulario.frecuenciaInteres <= 0 ) {
            return;
        }
        
        let datosGrafica = [];
        let datosInteres = [];
        let datosAportacion = [];
        let datosDeposito = [];
        let montoFinal = parseFloat( valoresFormulario.depositoInicial );
        
        const tasa = parseFloat( valoresFormulario.tasaInteres ) / 100;
        const anos = parseInt( valoresFormulario.anosInvertir );
        const aportacion = parseFloat( valoresFormulario.aportacionesAdicionales ) || 0;
        const frecuencia = ( () => {
            switch ( valoresFormulario.frecuenciaInteres ) {
                case 1: return 1;
                case 2: return 12;
                case 3: return 24;
                case 4: return 52;
                case 5: return 365;
                default: return 1;
            }
        })();
        
        for ( let i = 0; i <= anos ; i++ ) {
            if ( i > 0 ) {
                montoFinal = montoFinal * ( 1 + ( tasa * frecuencia ) ) + aportacion;
                if ( montoFinal > 90071992547409.91 ) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'El monto final excede el límite permitido.',
                        text: 'Por favor, ajusta los valores ingresados.',
                    });
                    setValoresFormulario( valoresIniciales );
                    setValoresGrafica( valoresGraficaIniciales );
                    setValidaciones( validacionIniciales );
                    return;
                }
                datosGrafica.push({ time: i, value: parseFloat( montoFinal.toFixed(2) ) });
                datosInteres.push({ time: i, value: parseFloat( ( montoFinal - valoresFormulario.depositoInicial - ( aportacion * i ) ).toFixed(2) ) });
                datosDeposito.push({ time: i, value: parseFloat( valoresFormulario.depositoInicial.toFixed(2) ) });
                datosAportacion.push({ time: i, value: parseFloat( ( aportacion * i ).toFixed(2) ) });
            }
        }
        const valoresTotales = {
            deposito: valoresFormulario.depositoInicial,
            interes: datosInteres[ anos - 1 ].value,
            aportacion: datosAportacion[ anos - 1 ].value,
            total: datosGrafica[ anos - 1 ].value,
            anos: valoresFormulario.anosInvertir
        };

        setTotales( valoresTotales );        
        setValoresGrafica({ datosGrafica, datosInteres, datosAportacion, datosDeposito });    
    }

    useEffect( () => {        
        calculaInteres();
    }, [ valoresFormulario ]);
    
    return (
        <div className="container">
            <div className="row mt-2 d-flex justify-content-between align-items-center">
                <div className="col-12 col-lg-3">
                    <div className="mb-4">
                        <h5 className="grafica">Datos para el cálculo</h5>
                    </div>
                    <div className="row mt-2 d-flex justify-content-between">
                        <div className="col-12 mb-4">
                            <label>Depósito inicial</label>
                            <input type="text" className={ `form-control ${ validaciones.depositoInicial }` } placeholder="Depósito inicial" value={ valoresFormulario.depositoInicial } onChange={ onInputChange } name="depositoInicial" />
                        </div>
                        <div className="col-12 mb-4">
                            <label>Tasa de interés anual</label>
                            <input type="text" className={ `form-control ${ validaciones.tasaInteres }` } placeholder="Tasa de interés anual" value={ valoresFormulario.tasaInteres } onChange={ onInputChange } name="tasaInteres" />
                        </div>
                        <div className="col-12 mb-4">
                            <label>Años a invertir</label>
                            <input type="text" className={ `form-control ${ validaciones.anosInvertir }` } placeholder="Años a invertir" value={ valoresFormulario.anosInvertir } onChange={ onInputChange } name="anosInvertir" />
                        </div>
                        <div className="col-12 mb-4">
                            <label>Frecuencia anual de interés</label>
                            <select className="form-select" name='frecuenciaInteres' aria-label="Frecuencia anual de interés" value={ valoresFormulario.frecuenciaInteres } onChange={ onInputChange } >
                                <option key="0" value={ 0 }>Selecciona la frecuencia</option>
                                <option key="1" value={ 1 }>Anual</option>
                                <option key="2" value={ 2 }>Mensual</option>
                                <option key="3" value={ 3 }>Quincenal</option>
                                <option key="4" value={ 4 }>Semanal</option>
                                <option key="5" value={ 5 }>Diaria</option>
                            </select>
                        </div>
                        <div className="col-12 mb-4">
                            <label>Aportaciones adicionales</label>
                            <input type="text" className="form-control" placeholder="Aportaciones adicionales" value={ valoresFormulario.aportacionesAdicionales } onChange={ onInputChange } name="aportacionesAdicionales" id='aportaciones' />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-9 px-lg-2 px-3 mb-4 mb-lg-0">
                    <InteresCompuestoGraficaPage valoresGrafica={ valoresGrafica } />
                </div>

                <div className="col-12 px-lg-2 px-3 mb-4 mb-lg-0">
                    <InteresCompuestoResultadoPage totales={ totales } />
                </div>
            </div>
        </div>
    )
}
