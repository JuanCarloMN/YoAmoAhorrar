import { NavLink } from "react-router-dom";
import { useAuthStore } from "../../hooks";
import { useEffect, useState } from "react";
import { getEnvVariables } from "../../helpers";

const { VITE_URL_VALORES } = getEnvVariables();

export const Navbar = () => {

    const { starLogout, usuario } = useAuthStore();

    const [ valores, setValores ] = useState({
        fecha: new Date(),
        valorUDI: 0,
        valorDolar: 0
    })

    const obtenValores = async () => {
        const indicadores = await ( await fetch( VITE_URL_VALORES )).json();
        const indicador = indicadores.ListaIndicadores.filter( valor => (valor.codTipoIndicador === 158 || valor.codTipoIndicador === 159));

        setValores({
            valorDolar: indicador[0].valor,
            valorUDI: indicador[1].valor
        });
        
        localStorage.setItem( 'fechaIndicadores', indicador[0].fecha );
        localStorage.setItem( 'valorDolar', indicador[0].valor );
        localStorage.setItem( 'valorUDI', indicador[1].valor );
    }

    useEffect( () => {
        const fechaIndicadores = localStorage.getItem('fechaIndicadores');
        const localDolar = localStorage.getItem('valorDolar');
        const localUDI = localStorage.getItem('valorUDI');

        const fecha = new Date();
        let dia = fecha.getDate()
        let mes = fecha.getMonth() + 1
        let ano = fecha.getFullYear()
        let hoy = '';

        hoy = ( mes < 10 ) ? dia + '-0' + mes + '-' + ano : dia + '-' + mes + '-' + ano

        if ( !fechaIndicadores || !localDolar || !localUDI ) {
            obtenValores();
        } else {
            if ( hoy !== fechaIndicadores ) {
                obtenValores();
            } else {
                setValores({
                    valorDolar: localDolar,
                    valorUDI: localUDI
                });
            }
        }


    }, []);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-1 ">
            <div className="container-fluid d-flex align-items-center justify-content-between p-0">
                <NavLink className="btn btn-dark" to="/agenda?tipo=0">
                    <img className="logo col-10 col-sm-2 col-md-1 " src="img/logo2.png" alt="" />
                </NavLink>
                
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

                        {/* Vistas de la agenda - Agenda Personal */}
                        <li className="nav-item p-1">
                            <NavLink className="btn btn-dark" to="/agenda?tipo=1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" className="icono-agenda" viewBox="0 0 16 16">
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                </svg>
                            </NavLink>
                        </li>

                        {/* Vistas de la agenda - Cumpleaños */}
                        <li className="nav-item p-1">
                            <NavLink className="btn btn-dark" to="/agenda?tipo=2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" className="icono-agenda" viewBox="0 0 16 16">
                                    <path d="m7.399.804.595-.792.598.79A.747.747 0 0 1 8.5 1.806V4H11a2 2 0 0 1 2 2v3h1a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-4a2 2 0 0 1 2-2h1V6a2 2 0 0 1 2-2h2.5V1.813a.747.747 0 0 1-.101-1.01ZM12 6.414a.9.9 0 0 1-.646-.268 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0A.9.9 0 0 1 4 6.414v1c.49 0 .98-.187 1.354-.56a.914.914 0 0 1 1.292 0c.748.747 1.96.747 2.708 0a.914.914 0 0 1 1.292 0c.374.373.864.56 1.354.56zm2.646 5.732a.914.914 0 0 1-1.293 0 1.914 1.914 0 0 0-2.707 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0L1 11.793v1.34c.737.452 1.715.36 2.354-.28a.914.914 0 0 1 1.292 0c.748.748 1.96.748 2.708 0a.914.914 0 0 1 1.292 0c.748.748 1.96.748 2.707 0a.914.914 0 0 1 1.293 0 1.915 1.915 0 0 0 2.354.28v-1.34z"/>
                                </svg>
                            </NavLink>
                        </li>

                        {/* Vistas de la agenda - Renovaciones */}
                        <li className="nav-item p-1">
                            <NavLink className="btn btn-dark" to="/agenda?tipo=3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" className="icono-agenda" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/>
                                </svg>
                            </NavLink>
                        </li>

                        {/* Vistas de la agenda - Pendientes */}
                        <li className="nav-item p-1">
                            <NavLink className="btn btn-dark" to="/agenda?tipo=4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" className="icono-agenda" viewBox="0 0 16 16">
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
                                </svg>
                            </NavLink>
                        </li>

                        {/* Vistas de la agenda - Ocio */}
                        <li className="nav-item p-1">
                            <NavLink className="btn btn-dark" to="/agenda?tipo=5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" className="icono-agenda" viewBox="0 0 16 16">
                                    <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
                                    <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
                                </svg>
                            </NavLink>
                        </li>

                        {/* <!-- Agenda --> */}
                        {/* <li className="nav-item dropdown">
                            <a 
                                href="#" 
                                className="btn btn-dark dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                id="dropdown-agenda"
                            >
                                Agenda
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown-agenda">
                                <li><NavLink className="dropdown-item" to="/agenda?tipo=1">Agenda Personal</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/agenda?tipo=2">Cumpleaños</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/agenda?tipo=3">Renovaciones</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/agenda?tipo=4">Pendientes</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/agenda?tipo=5">Ocio</NavLink></li>
                            </ul>
                            
                        </li> */}

                        {/* <!-- Catálogos --> */}
                        <li className="nav-item dropdown mt-1">
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
                                <li><NavLink className="dropdown-item" to="/clientes">Clientes</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/prospectos">Prospectos</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/polizas">Pólizas</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a href="#" className="dropdown-item">Agentes</a></li>
                                <li><a href="#" className="dropdown-item">Promotorías</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a href="#" className="dropdown-item">Tipo de Pólizas</a></li>
                                <li><a href="#" className="dropdown-item">Tipo de Estatus</a></li>
                                <li><a href="#" className="dropdown-item">Tipo de Monedas</a></li>
                                <li><a href="#" className="dropdown-item">Tipo de Pago</a></li>
                            </ul>
                        </li>

                        {/* <!-- Utierías --> */}
                        <li className="nav-item dropdown mt-1">
                            <a 
                                href="#" 
                                className="btn btn-dark dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                id="dropdown-menu"
                            >
                                Utilerías
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown-menu">
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

                <div className="container menu-opciones">
                    <div className="row">
                        <div className="col">
                            <span className="text-light"><small>Valor de la UID: </small>${ valores.valorUDI }</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <span className="text-light"><small>Valor del Dólar: </small>${ valores.valorDolar }</span>
                        </div>
                    </div>
                </div>

                <div className="menu-opciones d-flex flex-fill justify-content-start align-items-center text-light">
                </div>
                <div className="d-flex col-12 col-sm-8 col-md-4 col-lg-3 col-xl-3 align-items-evenly justify-content-evenly justify-content-sm-between justify-content-md-center me-1 ">
                    <div className="perfil col text-sm-end ">
                        <NavLink className="perfil" to="/perfil">
                            <img src="perla.jpg" alt="" />
                            { usuario.nombre }
                        </NavLink>
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
