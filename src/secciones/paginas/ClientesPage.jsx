import { useEffect } from "react";
import { ClienteModal } from "../componentes/modal/ClienteModal"
import { useSelector } from "react-redux";
import { useClienteStore, useUiStore } from "../../hooks";

export const ClientesPage = () => {

    const { openClienteModal } = useUiStore()
    const { startCargaClientes, setClienteActivo } = useClienteStore()
    const { clientes } = useSelector( state => state.cliente );
    
    const nuevoCliente = () => {
        openClienteModal();
    }

    const eliminaCliente = ( cliente ) => {
        console.log({cliente});
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
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h1 className="mt-2">Lista de Clientes</h1>
                        <button className="btn btn-outline-primary" onClick={ nuevoCliente }>Agregar Cliente</button>
                    </div>
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover ">
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
                                            <tr className="table-light align-middle" >
                                                <td valign="center">{ cliente.clienteNombre + ' ' + cliente.clienteApellidoP + ' ' + cliente.clienteApellidoM }</td>
                                                <td valign="center">{ cliente.clienteCelular }</td>
                                                <td>{ cliente.clienteEmail }</td>
                                                <td>{ cliente.clienteDireccion }</td>
                                                <td>
                                                    <div className="d-flex">
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
                        </div>
                    </div>
                </div>
            </div>

            <ClienteModal />
        </>
    )
}

