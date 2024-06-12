import { useAuthStore } from "../../hooks/useAuthStore"

export const Navbar = () => {

    const { starLogout, user } = useAuthStore();

    return (
        <div className="navbar navbar-dark bg-dark mb-4 px-4">
            <div className="wd-80 no-salto">
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
            </div>
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
    )
}

