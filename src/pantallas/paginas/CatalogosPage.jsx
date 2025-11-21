import { useEffect } from "react";

import { useCatalogoStore } from "../../hooks";
import { CatalogoCard } from "../componentes/secciones/CatalogoCard";

export const CatalogosPage = () => {

    const { catalogos, startCargaCatalogos } = useCatalogoStore()

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
                            <CatalogoCard tipo={ 3 } datos={ catalogos.filter( catalogo => catalogo.catalogoDescripcion === "Tipos de Póliza" ) } />
                        </div>
                        <div className="col">
                            <CatalogoCard tipo={ 4 } datos={ catalogos.filter( catalogo => catalogo.catalogoDescripcion === "Tipos de Estatus" ) } />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <CatalogoCard tipo={ 5 } datos={ catalogos.filter( catalogo => catalogo.catalogoDescripcion === "Tipos de Moneda" ) } />
                        </div>
                        <div className="col">
                            <CatalogoCard tipo={ 6 } datos={ catalogos.filter( catalogo => catalogo.catalogoDescripcion === "Tipos de Pago" ) } />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <CatalogoCard tipo={ 7 } datos={ catalogos.filter( catalogo => catalogo.catalogoDescripcion === "Tipos de Nota" ) } />
                        </div>
                        <div className="col">
                            <CatalogoCard tipo={ 8 } datos={ catalogos.filter( catalogo => catalogo.catalogoDescripcion === "Aseguradoras" ) } />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
