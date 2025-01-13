import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useBlogStore, useUiStore } from "../../hooks";

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { blogInicial } from "../../helpers";
import { MiBlogModal } from "./MiBlogModal";
import moment from "moment";
import { ListaSuscriptores } from "./ListaSuscriptores";

export const MiBlogPage = () => {

    const { openBlogModal, openSuscriptoresModal } = useUiStore()
    const { startCargarBlogs, setBlogActivo, startBorrarBlog } = useBlogStore();
    const { blogs } = useSelector( state => state.blog );
    
    const nuevoBlog= () => {        
        setBlogActivo( blogInicial );
        openBlogModal();
    }

    const eliminaBlog = ( blog ) => {
        Swal.fire({
            title: "¿Deseas eliminar la entrada?",
            text: blog.blogTitulo,
            icon: "question",
            iconColor: "#d33",
            showCancelButton: true,
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Eliminar",
            confirmButtonColor: "#d33"
        }).then( async ( result ) => {
            if ( result.isConfirmed ) {
                await startBorrarBlog( blog );
                Swal.fire({
                    title: "Entrada eliminada",
                    text: "Se eliminó la entrada del blog de forma correcta",
                    icon: "success"
                });
            }
        });
    }

    const editaBlog = ( blog ) => {
        setBlogActivo( blog );
        openBlogModal();
    }

    const verSuscriptores = () => {
        openSuscriptoresModal();
    }

    useEffect( () => {
        startCargarBlogs();
    }, []);

    return (
        <>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h1 className="mt-2">Mis Blogs</h1>

                            <div className="col text-end">
                                <button className="btn btn-outline-success me-3" onClick={ verSuscriptores }>Lista suscriptores</button>
                                <button className="btn btn-outline-primary" onClick={ nuevoBlog }>Agregar Entrada</button>
                        </div>
                    </div>
                    <div className="col-12">
                        <table className="table table-striped table-hover table-responsive col">
                            <caption>Lista de entradas del Blog</caption>
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
                                blogs.map( blog => (
                                    <tr className="table-light align-middle" key={ blog.id }>
                                        <td className="nowrap" >{ blog.blogTitulo }</td>
                                        <td className="nowrap">{ blog.blogCategoria }</td>
                                        <td className="nowrap">{ moment( blog.blogFecha ).format('DD MMMM YYYY') }</td>
                                        <td className="nowrap">{ blog.blogDetalle.substring(0, 100) }...</td>
                                        <td>
                                            <div className="d-flex justify-content-end">
                                                <button className="btn btn-outline-primary me-2" onClick={ () => editaBlog( blog ) } aria-label="Editar entrada" >
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                
                                                <button className="btn btn-outline-danger" onClick={ () => eliminaBlog( blog ) } aria-label="Eliminar entrada" >
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

            <MiBlogModal />
            <ListaSuscriptores />
        </>
    )
}

