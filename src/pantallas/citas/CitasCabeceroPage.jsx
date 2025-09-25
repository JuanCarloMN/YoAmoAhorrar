
export const CitasCabeceroPage = () => {
    return (
        <header className="p-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 col-lg-2">
                    <a href="/" >
                        <button className="boton-seccion" type="button" >Regresar</button>
                    </a>
                </div>
				<div className="col-8 col-lg-10 d-lg-flex justify-content-lg-center align-items-center text-center">
                    <h1 className=" me-lg-5">Citas</h1>
                    <div className="ms-lg-2">
                        <img src="../img/solo-logo.png" alt="Perla Maldonado" className="logo-encabezado-blog"/>
                    </div>
                    {/* <a href="#" className="text-dark logo">Blog - Perla Maldonado</a> */}
                </div>
            </div>
            <hr />
        </header>
    )
}

