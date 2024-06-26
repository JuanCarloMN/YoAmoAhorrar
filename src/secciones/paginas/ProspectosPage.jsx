import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useProspectoStore, useUiStore } from "../../hooks";
import { ProspectoModal } from "../componentes/modal/ProspectoModal";

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const ProspectosPage = () => {

    const { openProspectoModal } = useUiStore()
    const { startCargaProspectos, setProspectoActivo, starBorrarProspecto } = useProspectoStore()
    const { prospectos } = useSelector( state => state.prospecto );
    
    const nuevoProspecto = () => {
        openProspectoModal();
    }

    const eliminaProspecto = ( prospecto ) => {
        Swal.fire({
            title: "Eliminar al prospecto",
            text: "¿Deseas eliminar al prospecto: " + prospecto.prospectoNombre + '?',
            icon: "question",
            showCancelButton: true,
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Eliminar",
            confirmButtonColor: "#d33"
        }).then( async ( result ) => {
            if ( result.isConfirmed ) {

                await starBorrarProspecto( prospecto );

                Swal.fire({
                    title: "Prospecto eliminado",
                    text: "Se eliminó al prospecto de forma correcta",
                    icon: "success"
                });
            }
        });
    }

    const editaProspecto = ( prospecto ) => {
        setProspectoActivo( prospecto );
        openProspectoModal();
    }

    useEffect( () => {
        startCargaProspectos();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h1 className="mt-2">Lista de Prospectos</h1>
                        <button className="btn btn-outline-primary" onClick={ nuevoProspecto }>Agregar Prospecto</button>
                    </div>
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover ">
                                <caption>Lista de prospectos</caption>
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
                                        prospectos.map( prospecto => (
                                            <tr className="table-light align-middle" >
                                                <td valign="center">{ prospecto.prospectoNombre + ' ' + prospecto.prospectoApellidoP + ' ' + prospecto.prospectoApellidoM }</td>
                                                <td valign="center">{ prospecto.prospectoCelular }</td>
                                                <td>{ prospecto.prospectoEmail }</td>
                                                <td>{ prospecto.prospectoDireccion }</td>
                                                <td>
                                                    <div className="d-flex">
                                                        <button
                                                            className="btn btn-outline-primary me-2"
                                                            onClick={ () => editaProspecto( prospecto ) }
                                                            aria-label="Editar prospecto"
                                                        >
                                                            <i className="fa-solid fa-pen-to-square"></i>
                                                        </button>
                                                        
                                                        <button
                                                            className="btn btn-outline-danger"
                                                            onClick={ () => eliminaProspecto( prospecto ) }
                                                            aria-label="Editar prospecto"
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

            <ProspectoModal />
        </>
    )
}

