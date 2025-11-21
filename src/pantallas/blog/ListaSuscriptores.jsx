import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useSuscriptoresStore, useUiStore } from '../../hooks';
import { estiloModal } from '../../helpers';
import moment from 'moment';

const customStyles = estiloModal;

export const ListaSuscriptores = () => {
        const { isSuscriptoresModalOpen, closeSuscriptoresModal } = useUiStore();
        const { suscriptores, startCargarSuscriptores, setSuscriptorActivo, startSalvarSuscriptor, startBorrarSucriptor } = useSuscriptoresStore();


        const onCloseModal = () => {
            setSuscriptorActivo( null );
            closeSuscriptoresModal();
        }

        const editaSuscriptor = ( suscriptor ) => {
            if ( suscriptor.suscriptorActivo ) {
                Swal.fire({
                    title: "¿Cancelar suscripción?",
                    text: suscriptor.suscriptorEmail,
                    icon: "question",
                    iconColor: "#d33",
                    showCancelButton: true,
                    cancelButtonColor: "#3085d6",
                    cancelButtonText: "Regresar",
                    confirmButtonText: "Cancelar",
                    confirmButtonColor: "#d33"
                }).then( async ( result ) => {
                    if ( result.isConfirmed ) {
        
                        const actualizaSuscriptor = {
                            id: suscriptor.id,
                            suscriptorEmail: suscriptor.suscriptorEmail,
                            suscriptorActivo: false,
                            suscriptorFecha: suscriptor.suscriptorFecha
                        }
                        await startSalvarSuscriptor( actualizaSuscriptor );
        
                        Swal.fire({
                            title: "Suscripción cancelada",
                            text: "Se canceló la suscripción de forma correcta",
                            icon: "success"
                        });
                    }
                });
            } else {
                Swal.fire({
                    title: "¿Reactivar suscripción?",
                    text: suscriptor.suscriptorEmail,
                    icon: "question",
                    iconColor: "#125d0e",
                    showCancelButton: true,
                    cancelButtonColor: "#3085d6",
                    cancelButtonText: "Regresar",
                    confirmButtonText: "Reactivar",
                    confirmButtonColor: "#125d0e"
                }).then( async ( result ) => {
                    if ( result.isConfirmed ) {
        
                        const actualizaSuscriptor = {
                            id: suscriptor.id,
                            suscriptorEmail: suscriptor.suscriptorEmail,
                            suscriptorActivo: true,
                            suscriptorFecha: suscriptor.suscriptorFecha
                        }
                        await startSalvarSuscriptor( actualizaSuscriptor );
        
                        Swal.fire({
                            title: "Suscripción reactivada",
                            text: "Se reactivó la suscripción de forma correcta",
                            icon: "success"
                        });
                    }
                });
            }
        }

        const eliminarSuscriptor = ( suscriptor ) => {
            Swal.fire({
                title: "¿Eliminar suscriptor?",
                text: suscriptor.suscriptorEmail,
                icon: "question",
                iconColor: "#d33",
                showCancelButton: true,
                cancelButtonColor: "#3085d6",
                cancelButtonText: "Regresar",
                confirmButtonText: "Eliminar",
                confirmButtonColor: "#d33"
            }).then( async ( result ) => {
                if ( result.isConfirmed ) {

                    await startBorrarSucriptor( suscriptor );
    
                    Swal.fire({
                        title: "Suscripción eliminado",
                        text: "Se eliminó el suscriptor de forma correcta",
                        icon: "success"
                    });
                }
            });
        }

        useEffect( () => {
            startCargarSuscriptores();
        }, []);
    return (
        <Modal isOpen={ isSuscriptoresModalOpen } style={ customStyles } overlayClassName="modal-fondo" closeTimeoutMS={ 200 } >
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h1 className="mt-2">Lista de suscriptores</h1>
                        <button type="button" className="btn btn-outline-secondary btn-block" onClick={ onCloseModal } >
                            <span> Cerrar</span>
                        </button>
                    </div>
                    <div className="col-12">
                        <table className="table table-striped table-hover table-responsive col">
                            <caption>Lista de suscriptores</caption>
                            <thead>
                                <tr className="table-dark">
                                    <th>Correo Electrónico</th>
                                    <th>Fecha suscripción</th>
                                    <th className="">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                suscriptores.map( suscriptor => (
                                    <tr className="table-light align-middle" key={ suscriptor.id }>
                                        <td className="nowrap">{ suscriptor.suscriptorEmail }</td>
                                        <td className="nowrap">{ moment( suscriptor.suscriptorFecha ).format('DD MMMM YYYY') }</td>
                                        <td>
                                            <div className="d-flex justify-content-end">
                                                <button className={`btn btn-outline-${suscriptor.suscriptorActivo ? 'success' : 'danger'} me-2`} onClick={ () => editaSuscriptor( suscriptor ) } aria-label="Editar entrada" >
                                                    <i className="fa-solid fa-check-to-slot"></i>
                                                </button>
                                                
                                                <button className="btn btn-outline-danger" onClick={ () => eliminarSuscriptor( suscriptor ) } aria-label="Eliminar entrada" >
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
        </Modal>
    )
}

