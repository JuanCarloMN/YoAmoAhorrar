import Swal from "sweetalert2";
import { blogSuscribirse } from "../../helpers";
import { useBlogStore } from "../../hooks";
import { useState } from "react";

export const BlogCabeceroPage = () => {

	const [ valoresFormulario, setValoresFormulario ] = useState( blogSuscribirse );
	const { startSuscribirse } = useBlogStore();
	const suscribirse = () => {
		Swal.fire(
				{
					title: "Suscripción al Blog",
					text: "Suscríbite a mi Blog para que puedas descargar mis plantillas de finanzas personales y ponerle órden financiero a tu vida",
					input: "email",
					inputPlaceholder: "correo electrónico",
					inputValue: "",
					showCancelButton: true,
					cancelButtonColor: "#7E6D86",
					confirmButtonText: "Aceptar",
					confirmButtonColor: "#542052",
				}
			).then( async ( result ) => 
				{
					if ( result.isConfirmed ) {
						if ( result.value.trim() === '' ) {
							Swal.fire( titulo, 'Información incorrecta', 'error' );
						} else {
							setValoresFormulario({
								...valoresFormulario,
								[ 'blogEmail' ]: result.value.trim()
							});
							await startSuscribirse( { suscriptorEmail: result.value.trim(), suscriptorFecha: new Date() } )
						}
					}
				}
			);
		
	}
    return (
        <header className="container py-3 ">
			<div className="row flex-nowrap justify-content-between align-items-center">
				<div className="col-4 col-lg-2">
					<button className="boton-seccion" onClick={ suscribirse }>Suscribirse</button>
				</div>
				<div className="col-4 col-lg-5 d-flex justify-content-center align-items-center">
					<h1 className=" me-lg-5">Blog</h1>
					<div className="ms-lg-2">
						<img src="./img/solo-logo.png" alt="Perla Maldonado" className="logo-encabezado-blog"/>
					</div>
					{/* <a href="#" className="text-dark logo">Blog - Perla Maldonado</a> */}
				</div>
				<div className="col-4 col-lg-2 d-flex justify-content-end align-items-center">
					{/* <a href="#" className="text-muted mx-3">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
						</svg>
					</a> */}
					<a href="/" >
						<button className="boton-seccion" type="button" >Regresar</button>
					</a>
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

