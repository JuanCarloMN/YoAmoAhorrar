import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../hooks';
import { Navbar } from '../secciones';

export const PrivateRoute = ( { children } ) => {

    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem( 'lastPath', lastPath );

    const { status, checkAuthToken } = useAuthStore();

    return (
        ( status === 'authenticated' )
        ? children
        : <Navigate to='/auth/login' />
    )

}

