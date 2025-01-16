
export const NewsCabeceroPage = () => {
    return (
        <header className="container py-3 ">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 col-lg-2">
                <a href="/" >
                    <button className="boton-seccion" type="button" >Regresar</button>
                </a>
                </div>
				<div className="col-8 col-lg-10 d-lg-flex justify-content-lg-center align-items-center text-center">
                    <h1 className=" me-lg-5">Noticias</h1>
                    <div className="ms-lg-2">
                        <img src="../img/solo-logo.png" alt="Perla Maldonado" className="logo-encabezado-blog"/>
                    </div>
                    {/* <a href="#" className="text-dark logo">Blog - Perla Maldonado</a> */}
                </div>

            </div>

            <hr />
            {/* <div className="row">
                <nav className="nav justify-content-center">
                    <a href="#" className="nav-link text-muted">Últimas publicaciones</a>
                    <a href="#" className="nav-link text-muted">Seguros de vida</a>
                    <a href="#" className="nav-link text-muted">Seguros de ahorro</a>
                    <a href="#" className="nav-link text-muted">Plan Personal de Retiro</a>
                    <a href="#" className="nav-link text-muted">Mi vida</a>
                </nav>
            </div> */}
        </header>
    )
}

