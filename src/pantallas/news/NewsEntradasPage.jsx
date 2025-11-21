import { useEffect } from "react";
import { useNoticiaStore } from "../../hooks";
import moment from "moment";

const NewsEntradasPage = () => {
    const { noticias, startCargarNoticias } = useNoticiaStore();

	useEffect( () => {
        startCargarNoticias();
    }, []);

    return (
        <main className="container">
            <div className="row">
                <div className="col pb-2">
                    {
                        noticias.map( noticia => (
                            <div className="mb-5 border-bottom pb-5" key={ noticia.id } id={ noticia.noticiaCategoria }>
                                <img src="../img/noticias/lore.jpg" className="imagen-noticia rounded" alt="lore" />
                                <h2 className="titulo">{ noticia.noticiaTitulo }</h2>
                                <p className="text-muted mb-4">{ moment( noticia.noticiaFecha ).format('DD MMMM YYYY') }</p>
                                <p className="noticia-parrafo w-100">{ noticia.noticiaDetalle }</p>
                            </div>
                        ))
                    }
                </div>
                <div className="text-center p-0 align-items-center">
                    <img src="../img/solo-logo.png" alt="Perla Maldonado" className="logo-footer"/>
                    <br />
                    <span className="fw-lighter">2025</span>
                </div>
            </div>
        </main>
  )
}

export default NewsEntradasPage
