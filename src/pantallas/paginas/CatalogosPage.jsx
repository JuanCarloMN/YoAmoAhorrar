import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useCatalogoStore } from "../../hooks";
import { CatalogoCard } from "../componentes/secciones/CatalogoCard";

export const CatalogosPage = () => {

    const { startCargaCatalogos } = useCatalogoStore()
    const { catalogos } = useSelector( state => state.catalogo );

    useEffect( () => {
        startCargaCatalogos();
    }, []);

    return (
        <>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <h1 className="mt-2">Catálogos</h1>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <CatalogoCard tipo={ 1 } datos={ catalogos.filter( catalogo => catalogo.catalogoDescripcion === "Estado Civil" ) } />
                        </div>
                        <div className="col">
                            <CatalogoCard tipo={ 2 } datos={ catalogos.filter( catalogo => catalogo.catalogoDescripcion === "Escolaridad" ) } />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <CatalogoCard tipo={ 3 } datos={ catalogos.filter( catalogo => catalogo.catalogoDescripcion === "Tipo de Pólizas" ) } />
                        </div>
                        <div className="col">
                            <CatalogoCard tipo={ 4 } datos={ catalogos.filter( catalogo => catalogo.catalogoDescripcion === "Tipo de Estatus" ) } />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <CatalogoCard tipo={ 5 } datos={ catalogos.filter( catalogo => catalogo.catalogoDescripcion === "Tipo de Monedas" ) } />
                        </div>
                        <div className="col">
                            <CatalogoCard tipo={ 6 } datos={ catalogos.filter( catalogo => catalogo.catalogoDescripcion === "Tipo de Pagos" ) } />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

