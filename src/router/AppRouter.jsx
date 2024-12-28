import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';
import { AgendaPage, PerlaMaldonadoPage } from '../pantallas';

export const AppRouter = () => {
    
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
                        <Route path='/*' element={ <Navigate to='/portafolio' /> } />
                        <Route path='/auth/*' element={ <LoginPage /> } />
                        {/* <Route path='/*' element={ <Navigate to='/auth/login' /> } /> */}
                    </>
                )
                : (
                    <>
                        <Route path='/' element={ <AgendaPage /> } />
                        <Route path='/*' element={ <Navigate to='/' /> } />
                    </>
                )
            }
        </Routes>
    )
}
