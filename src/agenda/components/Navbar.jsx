import { useAuthStore } from "../../hooks/useAuthStore"

export const Navbar = () => {

    const { starLogout, user } = useAuthStore();

    return (
        <div className="navbar navbar-dark bg-dark mb-4 px-4">
            <div className="container">
                <div className="row">
                    <div className="col-11">
                        <span className="navbar-brand align-middle">
                            { user.name }
                        </span>
                        <button 
                            className="btn btn-dark"
                        >
                            <span className="navbar-brand">
                                <i className="fas fa-calendar-alt"></i>
                                &nbsp;Agenda
                                </span>
                        </button>

                        <button 
                            className="btn btn-dark"
                        >
                            <span className="navbar-brand">
                                <i className="fas fa-user-pen"></i>
                                &nbsp; Prospectos
                            </span>
                        </button>

                        <button 
                            className="btn btn-dark"
                        >
                            <span className="navbar-brand">
                                <i className="fas fa-user-pen"></i>
                                &nbsp; Clientes
                            </span>
                        </button>
                        <button 
                            className="btn btn-dark"
                        >
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle navbar-brand" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-list-ul"></i>
                                    &nbsp;Catálogos
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Tipo de Agente</a></li>
                                    <li><a class="dropdown-item" href="#">Tipo de Monedas</a></li>
                                    <li><a class="dropdown-item" href="#">Tipo de Notificación</a></li>
                                    <li><a class="dropdown-item" href="#">Tipo de Pago</a></li>
                                    <li><a class="dropdown-item" href="#">Tipo de Pólizas</a></li>
                                </ul>
                            </li>
                        </button>
                    </div>
                </div>

                <div className="col-1">
                    <form className="d-flex" role="search">
                        <button 
                            className="btn btn-outline-danger"
                            onClick={ starLogout }
                            >
                            <i className="fas fa-sign-out-alt"></i>
                            &nbsp;
                            <span>Salir</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

