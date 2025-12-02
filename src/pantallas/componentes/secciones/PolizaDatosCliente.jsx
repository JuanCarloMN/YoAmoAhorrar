import { useEffect, useState } from "react";
import { formularioDatos } from "../../../helpers";

import Swal from "sweetalert2";
import { useClienteStore } from "../../../hooks";

const inicioFormulario = formularioDatos;

export const PolizaDatosCliente = ( { valoresFormulario, setValoresFormulario, validaciones, setValidaciones } ) => {    
    const [ valoresCliente, setValoresCliente ] = useState( inicioFormulario );
    const { clientes, startBuscaCliente } = useClienteStore();    

    const onInputChange = ({ target }) => {
        const valor = ( target.value ) ? '' : 'is-invalid'
        setValoresFormulario({
            ...valoresFormulario,
            [ target.name ]: target.value
        });

        setValidaciones({
            ...validaciones,
            validaCliente: valor
        });
    }    

    const buscaCliente = () => {
        if ( !valoresFormulario.polizaCliente ) {
            Swal.fire( 'Información incorrecta', 'Necesitas ingresar un RFC para buscar el cliente', 'error' );
            return;
        }
        const cliente = startBuscaCliente( valoresFormulario.polizaCliente );
        
        if ( cliente ) {
            setValoresCliente({
                ...valoresCliente,
                datoRFC: cliente.clienteRFC,
                datoNombre: cliente.clienteNombre,
                datoApellidoP: cliente.clienteApellidoP,
                datoApellidoM: cliente.clienteApellidoM,
                datoCelular: cliente.clienteCelular,
                datoTelefono: cliente.clienteTelefono,
                datoEmail: cliente.clienteEmail,
                datoDireccion: cliente.clienteDireccion,
                datoCP: cliente.clienteCP,
            });
        } else {
            Swal.fire( 'Cliente no encontrado', 'No se encontró un cliente con ese RFC', 'error' );
        }
    }

    useEffect( () => {
        const cliente = clientes[0] || null;
        
        if ( !cliente ) return;
        setValoresCliente({
            ...valoresCliente,
            datoRFC: cliente.clienteRFC,
            datoNombre: cliente.clienteNombre,
            datoApellidoP: cliente.clienteApellidoP,
            datoApellidoM: cliente.clienteApellidoM,
            datoCelular: cliente.clienteCelular,
            datoTelefono: cliente.clienteTelefono,
            datoEmail: cliente.clienteEmail,
            datoDireccion: cliente.clienteDireccion,
            datoCP: cliente.clienteCP,
        });
    }, [ clientes ]);

    return (
        <div className="card mb-2">
            <div className="card-header border-dark" id="seccionCliente">
                <strong>Datos del cliente</strong>
            </div>
            <div className="card-body me-2">
                <div className="form-group d-flex p-1 justify-content-between align-items-center">
                    <div className="input-group col " hidden={ valoresFormulario.polizaClave === "" ? false : true }>
                        <input type="text" className={ `form-control ${ validaciones.validaCliente }` } autoComplete="on" value={ valoresFormulario.polizaCliente || '' } onChange={ onInputChange } name="polizaCliente" />
                        <button type="button" className="btn btn-outline-dark me-3" onClick={ buscaCliente }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cloud-arrow-down" viewBox="0 0 512 512">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <fieldset disabled>
                    <div className="form-floating p-1 col" hidden={ valoresFormulario.polizaClave === "" ? true : false }>
                        <input type="text" className="form-control" autoComplete="on" value={ valoresCliente.datoRFC || '' } readOnly />
                        <label htmlFor="rfc">RFC del cliente</label>
                    </div>
                    <div className="form-group col d-flex p-1 justify-content-between align-items-center">
                        <div className="form-floating me-2 col-4">
                            <input type="text" className="form-control" value={ valoresCliente.datoNombre || '' } readOnly />
                            <label htmlFor="nombre">Nombre(s)</label>
                        </div>
                        <div className="form-floating me-2 col-4">
                            <input type="text" className="form-control" value={ valoresCliente.datoApellidoP || '' } readOnly />
                            <label htmlFor="paterno">Apellido paterno</label>
                        </div>
                        <div className="form-floating col-4">
                            <input type="text" className="form-control" value={ valoresCliente.datoApellidoM || '' } readOnly />
                            <label htmlFor="materno">Apellido materno</label>
                        </div>
                    </div>
                    <div className="form-group col d-flex p-1 justify-content-between align-items-center">
                        <div className="form-floating me-2 col-3">
                            <input type="text" className="form-control" value={ valoresCliente.datoCelular || '' } readOnly />
                            <label htmlFor="celular">Celular</label>
                        </div>
                        <div className="form-floating me-2 col-3">
                            <input type="text" className="form-control" value={ valoresCliente.datoTelefono || '' } readOnly />
                            <label htmlFor="telefono">Teléfono fijo</label>
                        </div>
                        <div className="form-floating col-6">
                            <input type="email" className="form-control" value={ valoresCliente.datoEmail || '' } readOnly />
                            <label htmlFor="email">Correo electrónico</label>
                        </div>
                    </div>
                    <div className="form-group col d-flex p-1 justify-content-between align-items-center">
                        <div className="form-floating me-3 col-10">
                            <input type="text" className="form-control" value={ valoresCliente.datoDireccion || '' } readOnly />
                            <label htmlFor="direccion">Direccion</label>
                        </div>
                        <div className="form-floating col-2">
                            <input type="text" className="form-control" value={ valoresCliente.datoCP || '' } readOnly />
                            <label htmlFor="cp">C. P.</label>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div> 
    )
}
