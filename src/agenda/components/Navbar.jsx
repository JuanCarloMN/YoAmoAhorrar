import { useAuthStore } from "../../hooks/useAuthStore"

export const Navbar = () => {

    const { starLogout, user } = useAuthStore();

    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark p-3 align-items-center">
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <img class="logo" src="img/logo2.png" alt="" />
                
                {/* <!-- Boton para el menú móvil --> */}
                <button 
                    class="navbar-toggler" 
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                    aria-controls="menu"
                    aria-expanded="false"
                    aria-label="Mostrar / Ocultar menú"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* <!-- Menú de navegacion --> */}
                <div class="menu-opciones collapse navbar-collapse align-items-center" id="menu">
                    <ul class="navbar-nav me-auto ">
                        <li class="nav-item"><a href="#" class="btn btn-dark">Agenda</a></li>
                        <li class="nav-item"><a href="#" class="btn btn-dark">Clientes</a></li>
                        <li class="nav-item"><a href="#" class="btn btn-dark">Prospectos</a></li>
                        <li class="nav-item"><a href="#" class="btn btn-dark">Pólizas</a></li>
                        
                        {/* <!-- Dropdown --> */}
                        <li class="nav-item dropdown">
                            <a 
                                href="#" 
                                class="btn btn-dark dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                id="dropdown-menu"
                            >
                                Catálogos
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdown-menu">
                                <li><a href="#" class="dropdown-item">Agentes</a></li>
                                <li><a href="#" class="dropdown-item">Promotorías</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a href="#" class="dropdown-item">Tipo de Pólizas</a></li>
                                <li><a href="#" class="dropdown-item">Tipo de Estatus</a></li>
                                <li><a href="#" class="dropdown-item">Tipo de Monedas</a></li>
                                <li><a href="#" class="dropdown-item">Tipo de Pago</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
                    <div className="perfil">
                        <a href="#" class="perfil">
                            <img src="img/perla.jpg" alt="" />
                            { user.name }
                        </a>
                    </div>
                    <div>
                        <button 
                            className="btn btn-outline-danger"
                            onClick={ starLogout }
                            >
                            <i className="fas fa-sign-out-alt"></i>
                            &nbsp;
                            <span>Salir</span>
                        </button>
                    </div>
            </div>
        </nav>
    )
}

