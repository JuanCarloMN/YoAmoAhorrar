import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';
import { AgendaPage } from '../secciones';

export const AppRouter = () => {
    
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
                        <Route path='/' element={ <AgendaPage /> } />
                        <Route path='/*' element={ <Navigate to='/' /> } />
                    </>
                )
            }

        </Routes>
    )
}

