
export const CabeceroPage = () => {
    return (
        <>
            <header className="container my-5">
                <div className="nav row g-0 justify-content-between d-flex rounded-top">
                    {/* Logotipo */}
                    <div className="logo w-50 col d-flex align-items-center ms-2 me-2 justify-content-center ">
                        <h2 className="fw-bold text-upercase mb-0">PERLA GABRIELA MALDONADO</h2>
                        <div className="icono">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                            </svg>
                        </div>
                        <p className="mb-0 me-2 text-start">Finanzas Personales</p>
                    </div>

                    {/* Enlaces */}
                    <nav className="menu col-12 col-lg-6 d-flex align-items-stretch justify-content-end ">
                        <a href="#acerca-de" className="c1 px-lg-4 d-flex align-items-center text-center text-white text-decoration-none ">
                            <div className="w-100">
                                <span>Acerca de</span>
                                <div className="icono">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>
                                </div>
                            </div>
                        </a>

                        <a href="#contactame" className="c2 px-lg-4 d-flex align-items-center text-center text-white text-decoration-none ">
                            <div className="w-100">
                                <span>Contáctame</span>
                                <div className="icono">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                                    </svg>
                                </div>
                            </div> 
                        </a>

                        <a href="blog" className="c3 px-lg-4 d-flex align-items-center text-center text-white text-decoration-none ">
                            <div className="w-100">
                                <span>Blog</span>
                                <div className="icono">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 512 512">
                                        <path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144L0 368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144l-16 0 0 96 16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48l0-224z"/>
                                    </svg>
                                </div>
                            </div> 
                        </a>

                        <a href="auth/login" className="c4 px-lg-4 d-flex align-items-center text-center text-white text-decoration-none ">
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
                                    <img src="./img/banner_ppr.jpg" className="d-block w-100 " />
                                </div>
                                <div className="carousel-item">
                                    <img src="./img/banner_seguro_vida.jpg" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src="./img/banner_vida_mujer.jpg" className="d-block w-100" />
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
                                <button type="button" data-bs-target="#slider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slideshow1"></button>
                                <button type="button" data-bs-target="#slider" data-bs-slide-to="1" aria-label="Slideshow2"></button>
                                <button type="button" data-bs-target="#slider" data-bs-slide-to="2" aria-label="Slideshow3"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
