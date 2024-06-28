import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useProspectoStore, useUiStore } from "../../hooks";
import { ProspectoModal } from "../componentes/modal/ProspectoModal";

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const ProspectosPage = () => {

    const { openProspectoModal } = useUiStore()
    const { startCargaProspectos, setProspectoActivo, starBorrarProspecto, startConvierteProspecto } = useProspectoStore()
    const { prospectos } = useSelector( state => state.prospecto );
    
    const nuevoProspecto = () => {
        openProspectoModal();
    }

    const convertirCliente = ( prospecto ) => {
        Swal.fire({
            title: "¿Deseas convertirlo en cliente?",
            text: prospecto.prospectoNombre + ' ' + prospecto.prospectoApellidoP + ' ' + prospecto.prospectoApellidoM,
            icon: "question",
            iconColor: "#10A009",
            showCancelButton: true,
            cancelButtonColor: "#3085d6",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Convertir",
            confirmButtonColor: "#10A009"
        }).then( async ( result ) => {
            if ( result.isConfirmed ) {

                await startConvierteProspecto( prospecto );

                Swal.fire({
                    title: "Prospecto convertido a cliente",
                    icon: "success",
                    confirmButtonColor: "#10A009"
                });
            }
        });
    }

    const eliminaProspecto = ( prospecto ) => {
        Swal.fire({
            title: "¿Deseas eliminar al prospecto?",
            text: prospecto.prospectoNombre + ' ' + prospecto.prospectoApellidoP + ' ' + prospecto.prospectoApellidoM,
            icon: "question",
            iconColor: "#d33",
            showCancelButton: true,
            cancelButtonColor: "#3085d6",
            cancelButtonText: "Cancelar",
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
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h1 className="mt-2">Lista de Prospectos</h1>
                        <button className="btn btn-outline-primary" onClick={ nuevoProspecto }>Agregar Prospecto</button>
                    </div>
                    <div className="col-12">
                        {/* <div className="table-responsive"> */}
                            <table className="table table-striped table-hover table-responsive">
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
                                            <td >{ prospecto.prospectoNombre + ' ' + prospecto.prospectoApellidoP + ' ' + prospecto.prospectoApellidoM }</td>
                                            <td className="nowrap">{ prospecto.prospectoCelular }</td>
                                            <td className="nowrap"><a href={`mailto:${ prospecto.prospectoEmail }`} className="email table-light">{ prospecto.prospectoEmail }</a></td>
                                            <td>{ prospecto.prospectoDireccion }</td>
                                            <td >
                                                <div className="d-flex justify-content-end">
                                                    <button
                                                        className="btn btn-outline-primary me-2"
                                                        onClick={ () => editaProspecto( prospecto ) }
                                                        aria-label="Editar prospecto"
                                                    >
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </button>
                                                    
                                                    <button
                                                        className="btn btn-outline-success me-2"
                                                        onClick={ () => convertirCliente( prospecto ) }
                                                        aria-label="Convertir a cliente"
                                                    >
                                                        <i className="fa-solid fa-circle-dollar-to-slot"></i>
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
                        {/* </div> */}
                    </div>
                </div>
            </div>

            <ProspectoModal />
        </>
    )
}
