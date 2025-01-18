import { useSelector } from "react-redux";
import { noticiaInicial } from "../../helpers";
import { useUiStore } from "../../hooks";
import { useNoticiaStore } from "../../hooks/useNoticiaStore";
import { NoticiasModal } from "./NoticiasModal"
import { useEffect } from "react";
import moment from "moment";
import Swal from "sweetalert2";

export const NoticiasPage = () => {
    const { openNoticiaModal } = useUiStore();
    const { startCargarNoticias, setNoticiaActiva, startBorrarNoticia} = useNoticiaStore()
    const { noticias } = useSelector( state => state.noticia );
    
    const nuevaNoticia= () => {        
        setNoticiaActiva( noticiaInicial );
        openNoticiaModal();
    }

        const eliminaNoticia = ( noticia ) => {
            Swal.fire({
                title: "¿Deseas eliminar la noticia?",
                text: noticia.noticiaTitulo,
                icon: "question",
                iconColor: "#d33",
                showCancelButton: true,
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Eliminar",
                confirmButtonColor: "#d33"
            }).then( async ( result ) => {
                if ( result.isConfirmed ) {
                    await startBorrarNoticia( noticia );
                    Swal.fire({
                        title: "Noticia eliminada",
                        text: "Se eliminó la noticia de forma correcta",
                        icon: "success"
                    });
                }
            });
        }
    
        const editaNoticia = ( noticia ) => {
            setNoticiaActiva( noticia );
            openNoticiaModal();
        }
    
        useEffect( () => {
            startCargarNoticias();
        }, []);

    return (
        <>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h1 className="mt-2">Mis Noticias</h1>
                        <div className="col text-end">
                            <button className="btn btn-outline-primary" onClick={ nuevaNoticia }>Agregar Noticia</button>
                        </div>                    
                    </div>
                    <div className="col-12">
                        <table className="table table-striped table-hover table-responsive col">
                            <caption>Lista de Noticias</caption>
                            <thead>
                                <tr className="table-dark">
                                    <th>Titulo</th>
                                    <th>Categoría</th>
                                    <th>Fecha</th>
                                    <th>Detalle</th>
                                    <th className="">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                noticias.map( noticia => (
                                    <tr className="table-light align-middle" key={ noticia.id }>
                                        <td className="nowrap" >{ noticia.noticiaTitulo }</td>
                                        <td className="nowrap">{ noticia.noticiaCategoria }</td>
                                        <td className="nowrap">{ moment( noticia.noticiaFecha ).format('DD MMMM YYYY') }</td>
                                        <td className="nowrap">{ noticia.noticiaDetalle.substring(0, 100) }...</td>
                                        <td>
                                            <div className="d-flex justify-content-end">
                                                <button className="btn btn-outline-primary me-2" onClick={ () => editaNoticia( noticia ) } aria-label="Editar entrada" >
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                
                                                <button className="btn btn-outline-danger" onClick={ () => eliminaNoticia( noticia ) } aria-label="Eliminar entrada" >
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

            <NoticiasModal />
        </>
    )
}

