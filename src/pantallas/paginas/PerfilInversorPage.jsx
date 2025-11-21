import { usePerfilStore } from "../../hooks";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useEffect } from "react";
import moment from "moment";

export const PerfilInversorPage = () => {
    const { perfiles, startCargarPerfiles, startSalvarPerfil } = usePerfilStore();

    const atenderPerfil = ( perfil ) => {
        if ( perfil.perfilAtendido ) {
            Swal.fire({
                title: "¿Marcar como no atendido el Perfil Inversor?",
                html: perfil.perfilNombre + "<br>" + perfil.perfilResultado,
                icon: "question",
                iconColor: "#d33",
                showCancelButton: true,
                cancelButtonColor: "#3085d6",
                cancelButtonText: "Regresar",
                confirmButtonText: "No atendido",
                confirmButtonColor: "#d33"
            }).then( async ( result ) => {
                if ( result.isConfirmed ) {
                    const actualizaPerfil = {
                        id: perfil.id,
                        perfilNombre: perfil.perfilNombre,
                        perfilEmail: perfil.perfilEmail,
                        perfilTelefono: perfil.perfilTelefono,
                        perfilResultado: perfil.perfilResultado,
                        perfilAtendido: false,
                        perfilFecha: perfil.perfilFecha
                    }
                    await startSalvarPerfil( actualizaPerfil );
            
                    Swal.fire({
                        title: "Perfil actualizado",
                        text: "El Perfil Inversor se marcó como no atendido",
                        icon: "success"
                    });
                }
            });
        } else {
            Swal.fire({
                title: "¿Deseas marcar el perfil como atendido?",
                html: perfil.perfilNombre + "<br>" + perfil.perfilResultado,
                icon: "question",
                iconColor: "#125d0e",
                showCancelButton: true,
                cancelButtonColor: "#3085d6",
                cancelButtonText: "Cancelar",
                confirmButtonText: "Atender",
                confirmButtonColor: "#125d0e"
            }).then( async ( result ) => {
                if ( result.isConfirmed ) {

                    const actualizaPerfil = {
                        id: perfil.id,
                        perfilNombre: perfil.perfilNombre,
                        perfilEmail: perfil.perfilEmail,
                        perfilTelefono: perfil.perfilTelefono,
                        perfilResultado: perfil.perfilResultado,
                        perfilAtendido: true,
                        perfilFecha: perfil.perfilFecha
                    }
                    await startSalvarPerfil( actualizaPerfil );

                    Swal.fire({
                        title: "Perfil Inversor atendido",
                        text: "El Perfil Inversor ha sido atendido de forma correcta",
                        icon: "success"
                    });
                }
            });
        }
    }

    useEffect( () => {
        startCargarPerfiles();        
    }, []);

    return (
        <>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h1 className="mt-2">Lista de Perfiles Inversores</h1>
                    </div>
                    <div className="col-12">
                        <table className="table table-striped table-hover table-responsive">
                            <caption>Lista de Perfiles Inversores</caption>
                            <thead>
                                <tr className="table-dark">
                                    <th>Nombre</th>
                                    <th>eMail</th>
                                    <th>Teléfono</th>
                                    <th>Fecha</th>
                                    <th>Perfil</th>
                                    <th className="">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                perfiles.map( perfil => (
                                    <tr className="table-light align-middle" key={ perfil.id } >
                                        <td >{ perfil.perfilNombre }</td>
                                        <td className="nowrap"><a href={`mailto:${ perfil.perfilEmail }`} className="email table-light">{ perfil.perfilEmail }</a></td>
                                        <td ><a target="window.open" href={`https://wa.me/521${ perfil.perfilTelefono.replaceAll('-', '') }`} className="email table-light">{ perfil.perfilTelefono }</a></td>
                                        <td className="nowrap">{ moment(perfil.perfilFecha).format('DD MMMM YYYY') }</td>
                                        <td>{ perfil.perfilResultado }</td>
                                        <td >
                                            <div className="d-flex justify-content-end">
                                                <button className={`btn btn-outline-${perfil.perfilAtendido ? 'success' : 'danger'} me-2`} onClick={ () => atenderPerfil( perfil ) } aria-label="Atender Perfil Inversor" >
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
