
export const PerfilInversorTestCabeceroPage = () => {
    return (
        <header className="container py-3 ">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 col-lg-2">
                <a href="/" >
                    <button className="boton-seccion" type="button" >Regresar</button>
                </a>
                </div>
				<div className="col-8 col-lg-10 d-lg-flex justify-content-lg-center align-items-center text-center">
                    <h1 className=" me-lg-5">Perfil de inversión</h1>
                    <div className="ms-lg-2">
                        <img src="../img/solo-logo.png" alt="Perla Maldonado" className="logo-encabezado-blog"/>
                    </div>
                </div>
            </div>
            <hr />
        </header>
    )
}
