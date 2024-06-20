import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AgendaPage } from "../agenda"
import { ClientesPage, Navbar, PolizasPage, ProspectosPage } from "../secciones"
import { LoginPage } from "../auth"
import { useAuthStore } from "../hooks"
import { PrivateRoute } from "./"

export const SeccionesRouter = () => {

    const { status, checkAuthToken } = useAuthStore();
    // const authStatus = 'not-authenticated';

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
                    <Route path='/auth/*' element={ <LoginPage /> } />
                    <Route path='/*' element={ <Navigate to='/auth/login' /> } />
                </>
            )
            : (
                <>
                    <Route path='/' element={ 
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


                    {/* <Route path="clientes" element={<ClientesPage />} />
                    <Route path="prospectos" element={<ProspectosPage />} />
                    <Route path="polizas" element={<PolizasPage />} /> */}

                    <Route path='/*' element={ <Navigate to='/' /> } />
                </>
            )
        }
        </Routes>
    )
}

