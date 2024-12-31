import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMensajeStore } from "../../hooks";

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import moment from "moment";

moment.locale('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
  }
  );

export const MensajesPage = () => {
    const { startCargarMensajes, startSalvarMensaje } = useMensajeStore();
    const { mensajes } = useSelector( state => state.mensaje );

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

                const actualizaMensaje = {
                    id: mensaje.id,
                    mensajeNombre: mensaje.mensajeNombre,
                    mensajeEmail: mensaje.mensajeEmail,
                    mensajeDetalle: mensaje.mensajeDetalle,
                    mensajeAtendido: true,
                    mensajeFecha: mensaje.mensajeFecha
                }
                await startSalvarMensaje( actualizaMensaje );

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
                                    <tr className="table-light align-middle" key={ mensaje.id } >
                                        <td >{ mensaje.mensajeNombre }</td>
                                        <td className="nowrap"><a href={`mailto:${ mensaje.mensajeEmail }`} className="email table-light">{ mensaje.mensajeEmail }</a></td>
                                        <td className="nowrap">{ moment(mensaje.mensajeFecha).format('DD MMMM YYYY') }</td>
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

