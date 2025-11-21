import moment from "moment";
import { useNotaStore } from "../../../hooks";

export const NotasHistoricasPage = ( { tipo } ) => {
    
    const { notas } = useNotaStore();
    
    return (
        <div className="col">
            <div className="row mb-0">
                <h4>Historial de notas del { tipo === 1 ? "cliente" : "prospecto" }</h4>
            </div>
            { 
            notas.map( nota => (
                <div className="row mb-3" key={ nota.id }>
                    <div className="col">
                        <div className="card">
                            <h5 className="card-header border-dark">{ nota.notaCategoria }</h5>
                            <div className="card-body border-dark">
                                <p className="card-text" style={{ whiteSpace: 'pre-wrap' }}>{ nota.notaDetalle }</p>
                                <p className="card-text"><small className="text-muted">Creado por: { nota.notaUsuario } - { moment(nota.notaFecha).format('DD MMMM YYYY') + " " + moment(nota.notaFecha).format('hh:mma') } </small></p>
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}
