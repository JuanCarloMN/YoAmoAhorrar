
export const CabeceroPage = () => {
    return (
        <>
            <header className="container my-5">
                <div className="nav row g-0 justify-content-between rounded-top">
                    {/* Logotipo */}
                    <div className="logo col d-flex align-items-center ps-4">
                        <h2 className="fw-bold text-upercase mb-0 ">PERLA GABRIELA MALDONADO</h2>
                        <div className="icono">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                            </svg>
                        </div>
                        <p className="mb-0 me-2 text-start">Finanzas Personales</p>
                    </div>

                    {/* Enlaces */}
                    <nav className="menu col col-lg-auto d-flex align-items-stretch justify-content-between ">
                        <a href="#acerca-de" className="c1 px-4 d-flex align-items-center text-center text-white text-decoration-none ">
                            <div className="w-100">
                                <span>Acerca de</span>
                                <div className="icono">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>
                                </div>
                            </div>
                        </a>

                        <a href="#contactame" className="c2 px-4 d-flex align-items-center text-center text-white text-decoration-none ">
                            <div className="w-100">
                                <span>Contáctame</span>
                                <div className="icono">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                                    </svg>
                                </div>
                            </div> 
                        </a>

                        <a href="auth/login" className="c3 px-4 d-flex align-items-center text-center text-white text-decoration-none ">
                            <div className="w-100">
                                <span>Agenda</span>
                                <div className="icono">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </nav>
                </div>

                {/* Slider */}
                <div className="row">
                    <div className="col">
                        <div className="carousel slide" data-bs-ride="carousel" id="slider">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./img/ppr.jpg" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src="./img/segurovida.jpg" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src="./img/vidamujer.jpg" className="d-block w-100" />
                                </div>
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>

                            <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Siguiente</span>
                            </button>

                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#slider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slideshow1"
                                ></button>
                                <button type="button" data-bs-target="#slider" data-bs-slide-to="1" aria-label="Slideshow2"
                                ></button>
                                <button type="button" data-bs-target="#slider" data-bs-slide-to="2" aria-label="Slideshow3"
                                ></button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
