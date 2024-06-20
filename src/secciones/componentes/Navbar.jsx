import { NavLink } from "react-router-dom";
import { useAuthStore } from "../../hooks";

export const Navbar = () => {

    const { starLogout, user } = useAuthStore();

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-1 ">
            <div className="container-fluid d-flex align-items-center justify-content-between p-0">
                <img className="logo col-10 col-sm-2 col-md-1 " src="img/logo2.png" alt="" />
                
                {/* <!-- Boton para el menú móvil --> */}
                <div className="col-2 col-sm-2 d-block d-md-none ">
                    <button 
                        className="navbar-toggler" 
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#menu"
                        aria-controls="menu"
                        aria-expanded="false"
                        aria-label="Mostrar / Ocultar menú"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {/* <!-- Menú de navegacion --> */}
                <div className="menu-opciones collapse navbar-collapse col-1 col-md-6 flex-fill justify-content-md-evenly" id="menu">
                    <ul className="navbar-nav me-auto ">
                        <li className="nav-item"><NavLink className="btn btn-dark" to="/agenda">Agenda</NavLink></li>
                        <li className="nav-item"><NavLink className="btn btn-dark" to="/clientes">Clientes</NavLink></li>
                        <li className="nav-item"><NavLink className="btn btn-dark" to="/prospectos">Prospectos</NavLink></li>
                        <li className="nav-item"><NavLink className="btn btn-dark" to="/polizas">Pólizas</NavLink></li>

                        {/* <li className="nav-item"><a href="#" className="btn btn-dark">Agenda</a></li>
                        <li className="nav-item"><a href="#" className="btn btn-dark">Clientes</a></li>
                        <li className="nav-item"><a href="#" className="btn btn-dark">Prospectos</a></li>
                        <li className="nav-item"><a href="#" className="btn btn-dark">Pólizas</a></li> */}
                        
                        {/* <!-- Dropdown --> */}
                        <li className="nav-item dropdown">
                            <a 
                                href="#" 
                                className="btn btn-dark dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                id="dropdown-menu"
                            >
                                Catálogos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown-menu">
                                <li><a href="#" className="dropdown-item">Agentes</a></li>
                                <li><a href="#" className="dropdown-item">Promotorías</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a href="#" className="dropdown-item">Tipo de Pólizas</a></li>
                                <li><a href="#" className="dropdown-item">Tipo de Estatus</a></li>
                                <li><a href="#" className="dropdown-item">Tipo de Monedas</a></li>
                                <li><a href="#" className="dropdown-item">Tipo de Pago</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="d-flex col-12 col-sm-8 col-md-4 col-lg-3 col-xl-3 align-items-evenly justify-content-evenly justify-content-sm-between justify-content-md-center ">
                    <div className="perfil col text-sm-end ">
                        <a href="#" className="perfil ">
                            <img src="img/perla.jpg" alt="" />
                            { user.name }
                        </a>
                    </div>
                    <div className="col text-sm-end ">
                        <button 
                            className="salir btn btn-outline-danger"
                            onClick={ starLogout }
                            >
                            <i className="fas fa-sign-out-alt"></i>
                            &nbsp;
                            <span>Salir</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

{/* <nav className="navbar navbar-expand-md navbar-dark bg-dark p-3 align-items-center justify-content-between">
            <div className="container-fluid d-flex ">
                <img className="logo" src="img/logo2.png" alt="" />
                
                <button 
                    className="navbar-toggler" 
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                    aria-controls="menu"
                    aria-expanded="false"
                    aria-label="Mostrar / Ocultar menú"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="menu-opciones collapse navbar-collapse " id="menu">
                    <ul className="navbar-nav me-auto ">
                        <li className="nav-item"><a href="#" className="btn btn-dark">Agenda</a></li>
                        <li className="nav-item"><a href="#" className="btn btn-dark">Clientes</a></li>
                        <li className="nav-item"><a href="#" className="btn btn-dark">Prospectos</a></li>
                        <li className="nav-item"><a href="#" className="btn btn-dark">Pólizas</a></li>
                        
                        <li className="nav-item dropdown">
                            <a 
                                href="#" 
                                className="btn btn-dark dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                id="dropdown-menu"
                            >
                                Catálogos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown-menu">
                                <li><a href="#" className="dropdown-item">Agentes</a></li>
                                <li><a href="#" className="dropdown-item">Promotorías</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a href="#" className="dropdown-item">Tipo de Pólizas</a></li>
                                <li><a href="#" className="dropdown-item">Tipo de Estatus</a></li>
                                <li><a href="#" className="dropdown-item">Tipo de Monedas</a></li>
                                <li><a href="#" className="dropdown-item">Tipo de Pago</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="perfil ">
                    <a href="#" className="perfil">
                        <img src="img/perla.jpg" alt="" />
                        { user.name }
                    </a>
                </div>
                <button 
                    className="salir btn btn-outline-danger "
                    onClick={ starLogout }
                    >
                    <i className="fas fa-sign-out-alt"></i>
                    &nbsp;
                    <span>Salir</span>
                </button>
            </div>
        </nav> */}