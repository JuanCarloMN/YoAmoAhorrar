import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMensajeStore, useProspectoStore, useUiStore } from "../../hooks";

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { cambiaCampos, exportarExcel, formularioDatos } from "../../helpers";

export const MensajesPage = () => {
    const { openProspectoModal } = useUiStore()
    const { startCargarMensajes, startSalvarMensaje } = useMensajeStore();
    const { startCargaProspectos, setProspectoActivo, starBorrarProspecto, startConvierteProspecto } = useProspectoStore()
    const { mensajes } = useSelector( state => state.mensaje );
    
    const nuevoProspecto = () => {
        setProspectoActivo( formularioDatos );
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

    const atenderMensaje = ( mensaje ) => {
        Swal.fire({
            title: "¿Deseas marcar como atendido el mensaje?",
            text: mensaje.mensajeDetalle,
            icon: "question",
            iconColor: "#125d0e",
            showCancelButton: true,
            cancelButtonColor: "#3085d6",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Atender",
            confirmButtonColor: "#125d0e"
        }).then( async ( result ) => {
            if ( result.isConfirmed ) {

                await startSalvarMensaje( mensaje );

                Swal.fire({
                    title: "Mensaje atendido",
                    text: "El mensaje ha sido atendido de forma correcta",
                    icon: "success"
                });
            }
        });
    }

    useEffect( () => {
        startCargarMensajes();
    }, []);

    return (
        <>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h1 className="mt-2">Lista de Mensajes</h1>
                    </div>
                    <div className="col-12">
                        <table className="table table-striped table-hover table-responsive">
                            <caption>Lista de mensajes</caption>
                            <thead>
                                <tr className="table-dark">
                                    <th>Nombre</th>
                                    <th>eMail</th>
                                    <th>Fecha</th>
                                    <th>Mensaje</th>
                                    <th className="">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                mensajes.map( mensaje => (
                                    <tr className="table-light align-middle" key={ mensaje.mensajeEmail } >
                                        <td >{ mensaje.mensajeNombre }</td>
                                        <td className="nowrap"><a href={`mailto:${ mensaje.mensajeEmail }`} className="email table-light">{ mensaje.mensajeEmail }</a></td>
                                        <td className="nowrap">27 Diciembre 2024</td>
                                        <td>{ mensaje.mensajeDetalle }</td>
                                        <td >
                                            <div className="d-flex justify-content-end">
                                                <button className={`btn btn-outline-${mensaje.mensajeAtendido ? 'success' : 'danger'} me-2`} onClick={ () => atenderMensaje( mensaje ) } aria-label="Atender mensaje" >
                                                    <i className="fa-solid fa-check-to-slot"></i>
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
        </>
    )

}

