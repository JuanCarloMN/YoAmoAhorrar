import { useEffect } from "react";
import { ClienteModal } from "../componentes/modal/ClienteModal"
import { useSelector } from "react-redux";
import { useClienteStore, useUiStore } from "../../hooks";

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const ClientesPage = () => {

    const { openClienteModal } = useUiStore()
    const { startCargaClientes, setClienteActivo, starBorrarCliente } = useClienteStore()
    const { clientes } = useSelector( state => state.cliente );
    
    const nuevoCliente = () => {
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

                await starBorrarCliente( cliente );

                Swal.fire({
                    title: "Cliente eliminado",
                    text: "Se eliminó al cliente de forma correcta",
                    icon: "success"
                });
            }
        });
    }

    const editaCliente = ( cliente ) => {
        setClienteActivo( cliente );
        openClienteModal();
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
                        <button className="btn btn-outline-primary" onClick={ nuevoCliente }>Agregar Cliente</button>
                    </div>
                    <div className="col-12">
                        {/* <div className="table-responsive"> */}
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
                                            <td className="nowrap"><a target="window.open" href={`https://api.whatsapp.com/send/?phone=${ cliente.clienteCelular.replaceAll('-', '') }`} className="email table-light">{ cliente.clienteCelular }</a></td>
                                            <td className="nowrap"><a href={`mailto:${ cliente.clienteEmail }`} className="email table-light">{ cliente.clienteEmail }</a></td>
                                            <td>{ cliente.clienteDireccion }</td>
                                            <td>
                                                <div className="d-flex justify-content-end">
                                                    <button
                                                        className="btn btn-outline-primary me-2"
                                                        onClick={ () => editaCliente( cliente ) }
                                                        aria-label="Editar cliente"
                                                    >
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </button>
                                                    
                                                    <button
                                                        className="btn btn-outline-danger"
                                                        onClick={ () => eliminaCliente( cliente ) }
                                                        aria-label="Editar cliente"
                                                    >
                                                        <i className="fa-solid fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        {/* </div> */}
                    </div>
                </div>
            </div>

            <ClienteModal />
        </>
    )
}

