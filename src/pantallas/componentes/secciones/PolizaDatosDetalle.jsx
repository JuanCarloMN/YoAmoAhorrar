import ReactDatePicker from "react-datepicker";
import { validaCampo } from "../../../helpers";

export const PolizaDatosDetalle = ( { valoresFormulario, setValoresFormulario, validaciones, setValidaciones, startBuscaPoliza, polizaActiva, tipoPoliza, tipoMoneda, tipoPago, estatus, aseguradoras }) => {

    const onInputChange = ({ target }) => {
        const valorValida = ( target.value ) ? '' : 'is-invalid'
        const campoValida = validaCampo( target.name );
        let valor = target.value;
        const campo = target.name;

        if ( campo === 'polizaMonto' || campo === 'polizaSumaAsegurada' || campo === 'polizaPrimaBasica' || campo === 'polizaPrimaPlaneada' || campo === 'polizaDeducible' || campo === 'polizaCoaseguro' || campo === 'polizaTope' || campo === 'polizaPlazo' ) {
            if ( isNaN( valor ) || valor.trim() === '' ) {
                valor = 0;
            }
        }

        setValoresFormulario({
            ...valoresFormulario,
            [ campo ]: valor
        });

        setValidaciones({
            ...validaciones,
            [ campoValida ]: valorValida
        });
    }

    const onFechaChange = ( fecha, changing ) => {
        setValoresFormulario({
            ...valoresFormulario,
            [ changing ]: fecha
        });
    }

    const buscaPoliza = async () => {
        if ( valoresFormulario.polizaClave.length > 0 ) {            
            const resultado = await startBuscaPoliza( valoresFormulario.polizaClave, 2 );
            if ( !resultado ) {
                setValoresFormulario({
                    ...valoresFormulario,
                    polizaClave: ''
                });
                setValidaciones({
                    ...validaciones,
                    validaClave: 'is-invalid'
                });
            } else {
                setValidaciones({
                    ...validaciones,
                    validaClave: ''
                });
            }
        }
    }

    return (
        <div className="card mb-2">
            <div className="card-header border-dark" id="seccionDetalle">
                <strong>Detalle de la póliza</strong>
            </div>
            <div className="card-body me-2">
                <div className="form-group d-flex p-1 justify-content-between align-items-center">
                    <div className="form-floating me-2 col-4">
                        <fieldset disabled hidden={ ( polizaActiva?.polizaClave === '' || polizaActiva?.polizaClave === undefined ) ? true : false }>
                            <div className="form-floating p-1 col" >
                                <input type="text" className="form-control" value={ valoresFormulario.polizaClave } readOnly />
                            </div>
                        </fieldset>
                        <input type="text" className={`form-control ${ validaciones.validaClave }`} value={ valoresFormulario.polizaClave } name="polizaClave" onChange={ onInputChange } onBlur={ buscaPoliza } hidden={ ( polizaActiva?.polizaClave === '' || polizaActiva?.polizaClave === undefined ) ? false : true } />
                        <label htmlFor="polizaClave">Número de póliza</label>
                    </div>
                    <div className="form-floating me-2 col-4">
                        <select className={`form-select ${ validaciones.validaTipo }`} name="polizaTipo" value={ valoresFormulario.polizaTipo } onChange={ onInputChange } >
                            <option key="0" value=""></option>
                            { tipoPoliza.map( ( catalogo ) => {
                                return (
                                    <option key={ catalogo._id } value={ catalogo.descripcion }>{ catalogo.descripcion }</option>
                                );
                            })}
                        </select>
                        <label htmlFor="polizaTipo">Tipo de póliza</label>
                    </div>
                    <div className="form-floating me-2 col-4">
                        <select className={`form-select ${ validaciones.validaAseguradora }`} name="polizaAseguradora" value={ valoresFormulario.polizaAseguradora } onChange={ onInputChange } >
                            <option key="0" value=""></option>
                            { aseguradoras.map( ( catalogo ) => {
                                return (
                                    <option key={ catalogo._id } value={ catalogo.descripcion }>{ catalogo.descripcion }</option>
                                );
                            })}
                        </select>
                        <label htmlFor="polizaAseguradora">Aseguradora</label>
                    </div>
                </div>
                <div className="form-group d-flex justify-content-between p-1 align-items-center">
                    <div className="form-floating me-2 col-4">
                        <select className={`form-select ${ validaciones.validaEstatus }`} name="polizaEstatus" value={ valoresFormulario.polizaEstatus } onChange={ onInputChange } >
                            <option key="0" value=""></option>
                            { estatus.map( ( catalogo ) => {
                                return (
                                    <option key={ catalogo._id } value={ catalogo.descripcion }>{ catalogo.descripcion }</option>
                                );
                            })}
                        </select>
                        <label htmlFor="polizaEstatus">Estatus de la póliza</label>
                    </div>
                    <div className="form-floating me-2 col-4">
                        <select className={`form-select ${ validaciones.validaTipoMoneda }`} name="polizaTipoMoneda" value={ valoresFormulario.polizaTipoMoneda } onChange={ onInputChange } >
                            <option key="0" value=""></option>
                            { tipoMoneda.map( ( catalogo ) => {
                                return (
                                    <option key={ catalogo._id } value={ catalogo.descripcion }>{ catalogo.descripcion }</option>
                                );
                            })}
                        </select>
                        <label htmlFor="polizaTipoMoneda">Tipo de moneda</label>
                    </div>
                    <div className="form-floating me-2 col-4">
                        <input type="text" className={`form-control ${ validaciones.validaAsesor }`} value={ valoresFormulario.polizaAsesor } name="polizaAsesor" onChange={ onInputChange } />
                        <label htmlFor="polizaAsesor">Asesor</label>
                    </div>
                </div>
                <div className="form-group d-flex justify-content-between p-1 align-items-center">
                    <div className="form-floating me-2 col-4">
                        <input type="text" className="form-control" value={ valoresFormulario.polizaPlazo } name="polizaPlazo" onChange={ onInputChange } />
                        <label htmlFor="polizaPlazo">Plazo de la póliza</label>
                    </div>
                    <div className="form-floating me-2 col-4">
                        <select className="form-select" name="polizaTipoPlazo" value={ valoresFormulario.polizaTipoPlazo } onChange={ onInputChange } >
                            <option key="0" value=""></option>
                            <option key="1" value="Año">Año</option>
                            <option key="2" value="Mes">Mes</option>
                            <option key="3" value="Otro">Otro</option>
                        </select>
                        <label htmlFor="polizaTipoPlazo">Tipo de plazo</label>
                    </div>
                    <div className="form-floating me-2 col-4">
                        <select className="form-select" name="polizaTipoPago" value={ valoresFormulario.polizaTipoPago } onChange={ onInputChange } >
                            <option key="0" value=""></option>
                            { tipoPago.map( ( catalogo ) => {
                                return (
                                    <option key={ catalogo._id } value={ catalogo.descripcion }>{ catalogo.descripcion }</option>
                                );
                            })}
                        </select>
                        <label htmlFor="polizaTipoPago">Tipo de pago</label>
                    </div>
                </div>
                <div className="form-group d-flex justify-content-between p-1 align-items-center">
                    <div className="form-floating me-1 col-3">
                        <input type="text" className={`form-control ${ validaciones.validaMonto }`} value={ valoresFormulario.polizaMonto } name="polizaMonto" onChange={ onInputChange } />
                        <label htmlFor="polizaMonto">Monto de la póliza</label>
                    </div>
                    <div className="form-floating me-1 col-3">
                        <input type="text" className="form-control" value={ valoresFormulario.polizaSumaAsegurada } name="polizaSumaAsegurada" onChange={ onInputChange } />
                        <label htmlFor="polizaSumaAsegurada">Suma asegurada</label>
                    </div>
                    <div className="form-floating me-1 col-3">
                        <input type="text" className="form-control" value={ valoresFormulario.polizaPrimaBasica } name="polizaPrimaBasica" onChange={ onInputChange } />
                        <label htmlFor="polizaPrimaBasica">Prima básica</label>
                    </div>
                    <div className="form-floating me-1 col-3">
                        <input type="text" className="form-control" value={ valoresFormulario.polizaPrimaPlaneada } name="polizaPrimaPlaneada" onChange={ onInputChange } />
                        <label htmlFor="polizaPrimaPlaneada">Prima planeada</label>
                    </div>
                </div>
                <div className="form-group d-flex justify-content-between p-1 align-items-center">
                    <div className="form-floating me-1 col-3">
                        <input type="text" className="form-control" value={ valoresFormulario.polizaPlan } name="polizaPlan" onChange={ onInputChange } />
                        <label htmlFor="polizaPlan">Tipo de plan</label>
                    </div>
                    <div className="form-floating me-1 col-3">
                        <input type="text" className="form-control" value={ valoresFormulario.polizaDeducible } name="polizaDeducible" onChange={ onInputChange } />
                        <label htmlFor="polizaDeducible">Deducible de la póliza</label>
                    </div>
                    <div className="form-floating me-1 col-3">
                        <input type="text" className="form-control" value={ valoresFormulario.polizaCoaseguro } name="polizaCoaseguro" onChange={ onInputChange } />
                        <label htmlFor="polizaCoaseguro">Coaseguro de la póliza</label>
                    </div>
                    <div className="form-floating me-1 col-3">
                        <input type="text" className="form-control" value={ valoresFormulario.polizaTope } name="polizaTope" onChange={ onInputChange } />
                        <label htmlFor="polizaTope">Tope de la póliza</label>
                    </div>
                </div>
                <div className="form-group d-flex justify-content-between p-1 align-items-center">
                    <div className="form-item me-3 col-4">
                        <label className="form-label mb-2" htmlFor="fecha" >Fecha de la póliza</label>
                        <ReactDatePicker selected={  valoresFormulario.polizaFecha } onChange={ ( fecha ) => onFechaChange( fecha, "polizaFecha" ) } dateFormat="dd MMMM yyyy" wrapperClassName="datePicker" dropdownMode="select" className={`form-control ${ validaciones.validaFecha }`} locale="es" registerLocale name="polizaFecha" popperPlacement="top-start" />
                    </div>
                    <div className="form-floating col-8">
                        <textarea type="text" className="notas form-control" style={{ height: 80 }} value={ valoresFormulario.polizaNotas } onChange={ onInputChange } name="polizaNotas" />
                        <label htmlFor="polizaNotas">Notas</label>
                    </div>
                </div>
            </div>
        </div> 
    )
}
