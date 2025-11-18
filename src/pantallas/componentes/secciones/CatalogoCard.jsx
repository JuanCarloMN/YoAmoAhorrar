import { editaDato, eliminaDato, nuevoDato } from "../../../helpers";
import { useCatalogoStore } from "../../../hooks";

export const CatalogoCard = ( { tipo = 0, datos = [] } ) => {
    let datosCatalogo = [];
    let catalogoDescripcion = '';
    let catalogoId = 0;
    let tituloNuevo = 'Agregar ';
    let tituloEditar = 'Editar ';
    let tituloEliminar = 'Eliminar ';
    
    if ( datos.length > 0 ){
        datosCatalogo = datos[0].catalogoDatos;
        catalogoId = datos[0].id;
        catalogoDescripcion = datos[0].catalogoDescripcion;
        tituloNuevo = 'Agregar ' + catalogoDescripcion;
        tituloEditar = 'Editar ' + catalogoDescripcion;
        tituloEliminar = 'Eliminar ' + catalogoDescripcion;
    }

    const { startSalvarDato, starBorrarDato, setDatoActivo } = useCatalogoStore();
    
    const catalogo = ( tipo ) => {
        switch ( tipo ) {
            case 1: return 'EdoCivil';
            case 2: return 'Escolaridad';
            case 3: return 'TipoPoliza';
            case 4: return 'TipoEstatus';
            case 5: return 'TipoMoneda';
            case 6: return 'TipoPago';
            case 7: return 'TipoNota';

            default:
                return '';
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="accordion accordion-flush" id="catalogos">
                    <div className="accordion-item">
                        <div className="accordion-header" id={ `seccion${ catalogo( tipo ) }` }>
                            <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target={`#contenido${ catalogo( tipo ) }`} aria-expanded="true" aria-controls={ `contenido${ catalogo( tipo ) }` } >
                                <div className="col card-title text-center">
                                    <h4>{ catalogoDescripcion }</h4>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div id={ `contenido${ catalogo( tipo ) }` } className="accordion-collapse collapse" aria-labelledby={ `seccion${ catalogo( tipo ) }` } data-bs-parent="#catalogos" >
                    <div className="accordion-body">
                        <div className="col card-text">
                            <div className="table-responsive mt-3">
                            {
                                <table className="table">
                                    <thead>
                                        <tr className="align-middle">
                                            <th>Descripción</th>
                                            <th className="text-end">
                                                <button className="btn btn-outline-success" onClick={ () => nuevoDato( catalogoId, tituloNuevo, startSalvarDato ) } aria-label={ tituloNuevo } >
                                                    <i className="fa-solid fa-plus"></i>
                                                </button></th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                    {   
                                        datosCatalogo.map( dato => (
                                            <tr className="align-middle" key={ dato._id }>
                                                <td className="col">{ dato.descripcion }</td>
                                                <td className="col text-end">
                                                    <button className="btn btn-outline-primary me-2" onClick={ () => editaDato( datos, dato._id, catalogoId, tituloEditar, dato.descripcion, startSalvarDato, setDatoActivo ) } aria-label={ tituloEditar } >
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </button>
                                                    
                                                    <button className="btn btn-outline-danger" onClick={ () => eliminaDato( catalogoId, dato._id, tituloEliminar, dato.descripcion, starBorrarDato, setDatoActivo ) } aria-label={ tituloEliminar } >
                                                        <i className="fa-solid fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
