import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../hooks';

export const PrivateRoute = ( { children } ) => {

    const { pathname, search } = useLocation();

    const ultimaRuta = pathname + search;
    localStorage.setItem( 'ultimaRuta', ultimaRuta );

    const { status, checkAuthToken } = useAuthStore();

    return (
        ( status === 'authenticated' )
        ? children
        : <Navigate to='/auth/login' />
    )
}
