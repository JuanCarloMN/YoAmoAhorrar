
export const PerfilDatosUsuario = () => {

    const editaInformacion = () => {

    }

    const cambiaContrasena = () => {

    }
    return (
        <div className="card">
            <div className="card-body">
                <div className="accordion-item">
                    <div className="accordion-header" id="datosUsuario">
                        <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#contenidoDatosUsuario" aria-expanded="true" aria-controls="datosUsuario" >
                            <div className="col card-title text-center">
                                <h3>Datos del usuario</h3>
                            </div>
                        </button>
                    </div>
                </div>
                <div id="contenidoDatosUsuario" className="accordion-collapse collapse show" aria-labelledby="seccionDatosUsuario" data-bs-parent="#perfil" >
                    <div className="accordion-body">
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col align-item-center text-end me-3">
                                    <img className="img-thumbnail" src="perla.jpg" alt="" style={{width: 180, borderRadius: 75}} />
                                </div>
                                <div className="col">
                                    <div className="container">
                                        <div className="row mb-2">
                                            <div className="col">
                                                <h3 className="card-title">Perla Gabriela Maldonado</h3>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col">
                                                <h6 className="card-title text-muted">eMail: <a href="mailto:per.imagen@gmail.com" className="email table-light">per.imagen@gmail.com</a></h6>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col">
                                                <h6 className="card-title text-muted">Celular: <a target="window.open" href="https://wa.me/5215530411016" className="email table-light">55 3041 1016</a></h6>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <h6 className="card-title text-muted">Cumpleaños: 27 Febrero 1985</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col text-center">
                                    <button className="salir btn btn-outline-dark me-3" onClick={editaInformacion} >
                                        <i className="fa-solid fa-pen-to-square"></i>
                                        <span>&nbsp;Editar información</span>
                                    </button>

                                    <button className="salir btn btn-outline-dark" onClick={cambiaContrasena} >
                                        <i className="fa-solid fa-key"></i>
                                        <span>&nbsp;Cambiar contraseña</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
