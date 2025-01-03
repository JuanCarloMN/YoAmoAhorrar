import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { ClientesPage, Navbar, PolizasPage, ProspectosPage, AgendaPage, PerfilPage, CatalogosPage, PerlaMaldonadoPage, BlogPage, MensajesPage } from "../pantallas"
import { LoginPage } from "../auth"
import { useAuthStore } from "../hooks"
import { PrivateRoute } from "./"

export const SeccionesRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect( () => {
        checkAuthToken();
    }, [])

    if ( status === 'checking' ) {
        return (
            <h3>Cargando...</h3>
        )
    }

    return (
        <Routes>
        {
            ( status === 'not-authenticated' )
            ? (
                <>
                    <Route path='/portafolio' element={ <PerlaMaldonadoPage /> } />
                    <Route path='/auth/*' element={ <LoginPage /> } />
                    <Route path='/blog/*' element={ <BlogPage /> } />
                    <Route path='/*' element={ <Navigate to='/portafolio' /> } />
                    {/* <Route path='/*' element={ <Navigate to='/auth/login' /> } /> */}
                </>
            )
            : (
                <>
                    <Route path='/agenda' element={ 
                        <PrivateRoute>
                            <Navbar />
                            <AgendaPage /> 
                        </PrivateRoute>
                        } />

                    <Route path='/clientes' element={ 
                        <PrivateRoute>
                            <Navbar />
                            <ClientesPage /> 
                        </PrivateRoute>
                        } />

                    <Route path='/prospectos' element={ 
                        <PrivateRoute>
                            <Navbar />
                            <ProspectosPage /> 
                        </PrivateRoute>
                        } />

                    <Route path='/polizas' element={ 
                        <PrivateRoute>
                            <Navbar />
                            <PolizasPage /> 
                        </PrivateRoute>
                        } />

                    <Route path='/perfil' element={ 
                        <PrivateRoute>
                            <Navbar />
                            <PerfilPage /> 
                        </PrivateRoute>
                        } />

                    <Route path='/catalogos' element={ 
                        <PrivateRoute>
                            <Navbar />
                            <CatalogosPage /> 
                        </PrivateRoute>
                        } />

                    <Route path='/mensajes' element={ 
                        <PrivateRoute>
                            <Navbar />
                            <MensajesPage /> 
                        </PrivateRoute>
                        } />

                    <Route path='/*' element={ <Navigate to='/agenda' /> } />
                </>
            )
        }
        </Routes>
    )
}

