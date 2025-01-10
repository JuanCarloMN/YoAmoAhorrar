export const BlogCabeceroPage = () => {
    return (
        <header className="container py-3 ">
			<div className="row flex-nowrap justify-content-between align-items-center">
				<div className="col-4 col-lg-2">
					<a href="#" className="btn btn-outline-dark btn-sm">Suscribirse</a>
				</div>
				<div className="col-4 col-lg-5 d-flex justify-content-center align-items-center">
					<h1 className=" me-lg-5">Blog</h1>
					<div className="ms-lg-2">
						<img src="./img/Logo.png" alt="Perla Maldonado" className="logo-encabezado-blog"/>
					</div>
					{/* <a href="#" className="text-dark logo">Blog - Perla Maldonado</a> */}
				</div>
				<div className="col-4 col-lg-2 d-flex justify-content-end align-items-center">
					{/* <a href="#" className="text-muted mx-3">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
						</svg>
					</a> */}
					<a href="/" className="btn btn-outline-dark btn-sm">Regresar</a>
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

