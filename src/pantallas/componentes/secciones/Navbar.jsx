import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthStore, useCatalogoStore } from "../../../hooks";
import { obtenIndicadores } from "../../../helpers";

export const Navbar = () => {

    const { starLogout, usuario } = useAuthStore();
    const { startCargaCatalogos } = useCatalogoStore();

    const [ valores, setValores ] = useState({
        fecha: new Date(),
        valorUDI: 0,
        valorDolar: 0
    })
    const obtenValores = async () => {
        await obtenIndicadores();

        setValores({
            valorDolar: localStorage.getItem('valorDolar'),
            valorUDI: localStorage.getItem('valorUDI')
        })
    }

    useEffect( () => {
        obtenValores();
        startCargaCatalogos();
    }, []);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-1 ">
            <div className="container-fluid d-flex align-items-center justify-content-between p-0">
                <NavLink className="" to="/agenda">
                    <img className="logo col-10 col-sm-2 col-md-1 " src="img/logo2.png" alt="" />
                </NavLink>
                
                {/* <!-- Boton para el menú móvil --> */}
                <div className="col-2 col-sm-2 d-block d-md-none ">
                    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Mostrar / Ocultar menú" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {/* <!-- Menú de navegacion --> */}
                <div className="menu-opciones collapse navbar-collapse col-1 col-md-6 flex-fill justify-content-md-evenly ms-3" id="menu">
                    <ul className="navbar-nav ">
                        <li className="nav-item mt-1">
                            <NavLink className="" to="/agenda">
                                <span className="btn btn-dark">Agenda</span>
                            </NavLink>
                        </li>

                        {/* <!-- Catálogos --> */}
                        <li className="nav-item dropdown mt-1">
                            <a href="#" className="btn btn-dark dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdown-menu" > Catálogos </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/clientes">Clientes</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/prospectos">Prospectos</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/polizas">Pólizas</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a href="#" className="dropdown-item">Agentes</a></li>
                                <li><a href="#" className="dropdown-item">Promotorías</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><NavLink className="dropdown-item" to="/catalogos">Catálogos</NavLink></li>
                            </ul>
                        </li>

                        {/* <!-- Utierías --> */}
                        <li className="nav-item dropdown mt-1">
                            <a href="#" className="btn btn-dark dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdown-menu" > Utilerías </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/mensajes">Revisar mensajes</NavLink></li>
                                <li><a href="#" className="dropdown-item">Opciones de Speech</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a href="#" className="dropdown-item">Exportar Clientes</a></li>
                                <li><a href="#" className="dropdown-item">Exportar Prospectos</a></li>
                                <li><a href="#" className="dropdown-item">Exportar Pólizas</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a href="#" className="dropdown-item">Respaldar Base de Datos</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="container menu-opciones text-light">
                    <div className="row">
                        <div className="col text-end">
                            <small>UDI:</small>
                        </div>
                        <div className="col text-start">
                            <span>${ valores.valorUDI }</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-end">
                            <small>Dólar:</small>
                        </div>
                        <div className="col text-start">
                            <span>${ valores.valorDolar }</span>
                        </div>
                    </div>
                </div>

                <div className="menu-opciones d-flex flex-fill justify-content-start align-items-center text-light">
                </div>
                <div className="d-flex col-12 col-sm-8 col-md-4 col-lg-3 col-xl-3 align-items-evenly justify-content-evenly justify-content-sm-between justify-content-md-center me-1 ">
                    <div className="perfil col text-sm-end ">
                        <NavLink className="perfil" to="/perfil" >
                            <img src="perla.jpg" alt="" />
                            <span className="btn btn-dark">
                                { usuario.nombre }
                            </span>
                        </NavLink>
                    </div>
                    <div className="col text-sm-end me-3">
                        <button className="salir btn btn-outline-danger" onClick={ starLogout } >
                            <i className="fas fa-sign-out-alt"></i>
                            <span>&nbsp;Salir</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
