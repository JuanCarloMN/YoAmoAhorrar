

export const PerfilConfiguracion = () => {
    const editaInformacion = () => {

    }
    return (
        <div className="card mt-3">
            <div className="card-body">
                <div className="accordion-item">
                    <div className="accordion-header" id="configuracion">
                        <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#contenidoConfiguracion" aria-expanded="true" aria-controls="configuracion" >
                            <div className="col card-title text-center">
                                <h3>Configuración</h3>
                            </div>
                        </button>
                    </div>
                </div>
                <div id="contenidoConfiguracion" className="accordion-collapse collapse" aria-labelledby="seccionConfiguracion" data-bs-parent="#perfil" >
                    <div className="accordion-body">
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col card">
                                    <div className="card-body d-flex">
                                        <div className="col ">
                                            <div className="container">
                                                <div className="row ">
                                                    <div className="col text-center">
                                                        <h5>Template a utilizar</h5>
                                                    </div>
                                                </div>
                                                <div className="row d-flex">
                                                    <div className="col">
                                                        <div className="radio-title-group">
                                                            <div className="input-container">
                                                                <input type="radio" name="radioTemplate" id="templateOscuro" />
                                                                <div className="radio-title template-oscuro">
                                                                    <i className="fa-solid fa-calendar mb-2" name="templateOscuro"></i>
                                                                    <label htmlFor="templateOscuro" >Oscuro</label>
                                                                </div>
                                                            </div>
                                                            <div className="input-container">
                                                                <input type="radio" name="radioTemplate" id="templateClaro" />
                                                                <div className="radio-title template-claro">
                                                                    <i className="fa-solid fa-calendar mb-2"></i>
                                                                    <label htmlFor="templateClaro">Claro</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col d-flex align-items-center text-center">
                                            <div className="container ">
                                                <div className="row mb-2 ">
                                                    <div className="col form-switch d-flex">
                                                        <input className="form-check-input me-3" type="checkbox" role="switch" id="chkNotificacion" />
                                                        <h5>Notificaciones</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col form-switch d-flex ">
                                                        <input className="form-check-input me-3" type="checkbox" role="switch" id="chkAlerta" />
                                                        <h5>Alertas</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
