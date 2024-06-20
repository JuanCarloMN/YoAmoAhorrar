import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../hooks';

export const PublicRoute = ( { children } ) => {

    const { status, checkAuthToken } = useAuthStore();

    return ( status === 'not-authenticated' )
        ? <Navigate to='/auth/login' />
        : children
}

