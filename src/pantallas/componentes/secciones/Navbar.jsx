import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthStore, useCatalogoStore } from "../../../hooks";
import { useIndicadoresStore } from "../../../hooks/useIndicadoresStore";
import { useDispatch, useSelector } from "react-redux";
import { onCargarIndicadoresDolar, onCargarIndicadoresUDI } from "../../../store";
import { obtenerDatosExportar } from "../../../helpers";

export const Navbar = () => {

    const dispatch = useDispatch();
    const { starLogout, usuario } = useAuthStore();
    const { startCargaCatalogos } = useCatalogoStore();
    const { startCargarIndicadores } = useIndicadoresStore();
    const { actualUDI, actualDolar } = useSelector( state => state.indicadores );
    const hoy = new Date();
    const fechaActual = `${hoy.getFullYear() - 1 }${ (hoy.getMonth() + 1).toString().padStart(2, '0') }${ hoy.getDate().toString().padStart(2, '0') }`;

    const [ valores, setValores ] = useState({
        valorUDI: 0,
        valorDolar: 0
    })

    const excel = ( tipo ) => {
        obtenerDatosExportar( tipo );
    }

    const obtenValores = async () => {

        const datosIndicadores = localStorage.getItem("datosIndicadores");

        if ( !datosIndicadores ) {
            startCargarIndicadores();
        } else {
            const losIndicadores = JSON.parse( datosIndicadores );
            const fechaDatos = losIndicadores.fecha;
                        
            if ( fechaActual > fechaDatos ) {
                startCargarIndicadores();
            } else {
                const serieUDI = import.meta.env.VITE_API_BANXICO_SERIE_UDI;
                const serieDolar = import.meta.env.VITE_API_BANXICO_SERIE_DOLAR;
                const datosUDI = losIndicadores.data.bmx.series.filter( indicador => indicador.idSerie === serieUDI );
                const datosDolar = losIndicadores.data.bmx.series.filter( indicador => indicador.idSerie === serieDolar );
    
                dispatch( onCargarIndicadoresUDI( datosUDI[0] ) );
                dispatch( onCargarIndicadoresDolar( datosDolar[0] ) );
            }
        }
    }

    useEffect( () => {
        obtenValores();
        startCargaCatalogos();
    }, []);

    useEffect( () => {
        setValores({
            valorDolar: actualDolar,
            valorUDI: actualUDI
        });
    }, [ actualDolar ])

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-1 ">
            <div className="container-fluid d-flex align-items-center justify-content-between p-0 ms-2">
                <NavLink className="" to="/agenda">
                    <img className="logo col-10 col-sm-2 col-md-1 " src="img/solo-logo.png" alt="" />
                </NavLink>
                
                {/* <!-- Boton para el menú móvil --> */}
                <div className="col-2 col-sm-2 d-block d-md-none ">
                    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Mostrar / Ocultar menú" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {/* <!-- Menú de navegacion --> */}
                <div className="menu-opciones collapse navbar-collapse col-1 col-md-7 flex-fill justify-content-md-evenly ms-3" id="menu">
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
                                {/* <li><a href="#" className="dropdown-item">Agentes</a></li>
                                <li><a href="#" className="dropdown-item">Promotorías</a></li>
                                <li><hr className="dropdown-divider" /></li> */}
                                <li><NavLink className="dropdown-item" to="/catalogos">Catálogos</NavLink></li>
                            </ul>
                        </li>

                        {/* <!-- Utierías --> */}
                        <li className="nav-item dropdown mt-1">
                            <a href="#" className="btn btn-dark dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdown-menu" > Utilerías </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown-menu">
                                {/* <li><NavLink className="dropdown-item" to="/reportes">Reportes</NavLink></li>
                                <li><hr className="dropdown-divider" /></li> */}
                                <li><NavLink className="dropdown-item" to="/miblog">Entradas de Mi Blogs</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/noticias">Administrar Noticias</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/mensajes">Revisar Mensajes</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/perfiles">Revisar Perfiles Inversores</NavLink></li>
                                {/* <li><hr className="dropdown-divider" /></li>
                                <li><a href="#" className="dropdown-item">Opciones de Speech</a></li>
                                <li><button onClick={ excel( 1 )} className="dropdown-item">Exportar Clientes</button></li>
                                <li><a href="#" className="dropdown-item">Exportar Prospectos</a></li>
                                <li><a href="#" className="dropdown-item">Exportar Pólizas</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a href="#" className="dropdown-item">Respaldar Base de Datos</a></li> */}
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="container menu-opciones text-light">
                    <div className="row d-flex p-0">
                        <div className="col-4 text-start text-md-end p-0">
                            <small>UDI:</small>
                        </div>
                        <div className="col-8 text-start">
                            <small><span>${ valores.valorUDI }</span></small>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-4 text-start text-md-end p-0">
                            <small>Dólar:</small>
                        </div>
                        <div className="col-8 text-start">
                            <small><span>${ valores.valorDolar }</span></small>
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
