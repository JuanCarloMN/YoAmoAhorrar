import { useEffect } from "react"
import { useSelector } from "react-redux";
import moment from "moment";

export const NotasHistoricasPage = ( { tipo } ) => {
    
    const { notas } = useSelector( state => state.nota );
    
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
                            <div className="card-body">
                                <h5 className="card-title">{ nota.notaCategoria }</h5>
                                <hr />
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

