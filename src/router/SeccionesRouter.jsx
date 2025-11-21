import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { ClientesPage, Navbar, PolizasPage, ProspectosPage, AgendaPage, PerfilPage, CatalogosPage, PerlaMaldonadoPage, BlogPage, MensajesPage, MiBlogPage, NoticiasPage, FAQPage, AcercaDePage, CitasPage, PresupuestoPage, PerfilInversorTestPage, PerfilInversorPage, InteresCompuestoPage, HerramientasPage } from "../pantallas"
import { LoginPage } from "../auth"
import { useAuthStore } from "../hooks"
import { PrivateRoute } from "./"
import { TestimonioPage } from "../pantallas/testimonios/TestimonioPage"
import { NewsPage } from "../pantallas/news/NewsPage"

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
                    <Route path='/testimonios/*' element={ <TestimonioPage /> } />
                    <Route path='/news/*' element={ <NewsPage /> } />
                    <Route path='/faq/*' element={ <FAQPage /> } />
                    <Route path='/acerca/*' element={ <AcercaDePage /> } />
                    <Route path='/citas/*' element={ <CitasPage /> } />
                    <Route path='/test_perfil_inversor/*' element={ <PerfilInversorTestPage /> } />
                    <Route path='/presupuesto/*' element={ <PresupuestoPage /> } />
                    <Route path='/interes_compuesto/*' element={ <InteresCompuestoPage /> } />
                    <Route path='/herramientas/*' element={ <HerramientasPage /> } />
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

                    <Route path='/perfiles' element={ 
                        <PrivateRoute>
                            <Navbar />
                            <PerfilInversorPage /> 
                        </PrivateRoute>
                        } />

                    <Route path='/miblog' element={ 
                        <PrivateRoute>
                            <Navbar />
                            <MiBlogPage /> 
                        </PrivateRoute>
                        } />

                    <Route path='/noticias' element={ 
                        <PrivateRoute>
                            <Navbar />
                            <NoticiasPage /> 
                        </PrivateRoute>
                        } />

                    <Route path='/faq' element={ 
                        <PrivateRoute>
                            <Navbar />
                            <FAQPage />
                        </PrivateRoute>
                        } />

                    <Route path='/acerca' element={ 
                        <PrivateRoute>
                            <Navbar />
                            <AcercaDePage />
                        </PrivateRoute>
                        } />

                    <Route path='/*' element={ <Navigate to='/agenda' /> } />
                </>
            )
        }
        </Routes>
    )
}
