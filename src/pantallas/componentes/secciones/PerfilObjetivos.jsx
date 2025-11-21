
export const PerfilObjetivos = () => {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <div className="accordion-item">
                    <div className="accordion-header" id="objetivos">
                        <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#contenidoObjetivos" aria-expanded="true" aria-controls="objetivos" >
                            <div className="col card-title text-center">
                                <h3>Objetivos</h3>
                            </div>
                        </button>
                    </div>
                </div>
                <div id="contenidoObjetivos" className="accordion-collapse collapse " aria-labelledby="seccionObjetivos" data-bs-parent="#perfil" >
                    <div className="accordion-body">
                        <div className="col card-text">
                            <h2>Mi meta anual</h2>
                        </div>
                        <div className="col card-text">
                            <h2>Bono Semestral</h2>
                        </div>
                        <div className="col card-text">
                            <h2>Medalla SMNYL</h2>
                        </div>
                        <div className="col card-text">
                            <h2>MDRT</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
