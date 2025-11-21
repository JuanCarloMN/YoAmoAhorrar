import { useEffect } from "react";
import { useClienteStore, useUiStore } from "../../hooks";
import { ClienteModal } from "../componentes/modal/ClienteModal"
import { NotaModal } from "../componentes/modal/NotaModal";

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { cambiaCampos, exportarExcel, formularioDatos } from "../../helpers";

export const ClientesPage = () => {

    const { openClienteModal, openNotaModal } = useUiStore()
    const { clientes, startCargaClientes, setClienteActivo, startBorrarCliente, startBuscaCliente } = useClienteStore()
    
    const nuevoCliente = () => {
        setClienteActivo( formularioDatos );
        openClienteModal();
    }

    const eliminaCliente = ( cliente ) => {
        Swal.fire({
            title: "¿Deseas eliminar al cliente?",
            text: cliente.clienteNombre + ' ' + cliente.clienteApellidoP + ' ' + cliente.clienteApellidoM,
            icon: "question",
            iconColor: "#d33",
            showCancelButton: true,
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Eliminar",
            confirmButtonColor: "#d33"
        }).then( async ( result ) => {
            if ( result.isConfirmed ) {
                await startBorrarCliente( cliente );
                Swal.fire({
                    title: "Cliente eliminado",
                    text: "Se eliminó al cliente de forma correcta",
                    icon: "success"
                });
            }
        });
    }

    const editaCliente = ( cliente ) => {
        const datoActivo = cambiaCampos( cliente, 1 );
        setClienteActivo( datoActivo );
        openClienteModal();
    }

    const agregarNota = ( cliente ) => {
        const datoActivo = cambiaCampos( cliente, 1 );
        setClienteActivo( datoActivo );
        openNotaModal();
    }

    const buscaCliente = () => {
        Swal.fire(
            {
                title: "Buscar cliente",
                input: "text",
                inputPlaceholder: "RFC del cliente a buscar",
                showCancelButton: true,
                showDenyButton: true,
                cancelButtonColor: "#405364ff",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#10A009",
                denyButtonText: "Todos",
                denyButtonColor: "#542052"
            }
        ).then( async ( result ) => 
            {
                if ( result.isDenied ){
                    startCargaClientes();
                } else {
                    if ( result.isConfirmed ) {
                        if ( result.value.trim() === '' ) {
                            Swal.fire( "Buscar cliente", 'Información incorrecta', 'error' );
                        } else {                        
                            startBuscaCliente( result.value.trim() );
                        }
                    }
                }
            }
        );
    }

    useEffect( () => {
        startCargaClientes();
    }, []);

    return (
        <>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h1 className="mt-2">Lista de Clientes</h1>

                        <div className="col text-end">
                            <button className="btn btn-outline-dark me-3" onClick={ buscaCliente }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cloud-arrow-down" viewBox="0 0 512 512">
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                                </svg>
                            </button>
                            <button className="btn btn-outline-success me-3" onClick={ exportarExcel }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"/>
                                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                </svg>
                            </button>
                            <button className="btn btn-outline-primary" onClick={ nuevoCliente }>Agregar Cliente</button>
                        </div>
                    </div>
                    <div className="col-12">
                        <table className="table table-striped table-hover table-responsive col">
                            <caption>Lista de clientes</caption>
                            <thead>
                                <tr className="table-dark">
                                    <th>Nombre</th>
                                    <th>Celular</th>
                                    <th>eMail</th>
                                    <th>Dirección</th>
                                    <th className="">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                clientes.map( cliente => (
                                    <tr className="table-light align-middle" key={ cliente.clienteEmail }>
                                        <td >{ cliente.clienteNombre + ' ' + cliente.clienteApellidoP + ' ' + cliente.clienteApellidoM }</td>
                                        <td className="nowrap"><a target="window.open" href={`https://wa.me/521${ cliente.clienteCelular.replaceAll('-', '') }`} className="email table-light">{ cliente.clienteCelular }</a></td>
                                        <td className="nowrap"><a href={`mailto:${ cliente.clienteEmail }`} className="email table-light">{ cliente.clienteEmail }</a></td>
                                        <td>{ cliente.clienteDireccion }</td>
                                        <td>
                                            <div className="d-flex justify-content-end">
                                                <button className="btn btn-outline-primary me-2" onClick={ () => editaCliente( cliente ) } aria-label="Editar cliente" >
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                
                                                <button className="btn btn-outline-dark me-2" onClick={ () => agregarNota( cliente ) } aria-label="Agregar nota de cliente" >
                                                    <i className="fa-regular fa-comment-dots"></i>
                                                </button>

                                                <button className="btn btn-outline-danger" onClick={ () => eliminaCliente( cliente ) } aria-label="Eliminar cliente" >
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <ClienteModal />
            <NotaModal tipo={ 1 } />
        </>
    )
}
