import { useDispatch, useSelector } from "react-redux"
import agendaApi from "../api/agendaApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/slice/authSlice";
import { onLogoutAgenda } from "../store/slice/agendaSlice";

export const useAuthStore = () => {
    
    const { status, usuario, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async ( { email, password } ) => {

        dispatch( onChecking() );

        try {
            const { data } = await agendaApi.post('/auth', { email, password });
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            localStorage.setItem( 'tipoEvento', 0 );
            dispatch( onLogin( {nombre: data.nombre, uid: data.uid } ) );
        } catch (error) {
            dispatch( onLogout( 'Credenciales incorrectas' ) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const startRegister = async ( { nombre, email, password} ) => {
        
        dispatch( onChecking() );
        
        try {
            const { data } = await agendaApi.post('/auth/nuevo', { nombre, email, password });
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( onLogin( {nombre: data.nombre, uid: data.uid } ) );
        } catch (error) {
            console.log(error);
            dispatch( onLogout( error.response.data?.msg || 'Error al registrar el ususario' ) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout() );

        try {
            const { data } = await agendaApi.get('/auth/renovar');
            localStorage.setItem('token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( onLogin( {nombre: data.nombre, uid: data.uid } ) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() )
        }
    }

    const starLogout = () => {
        localStorage.clear();
        dispatch( onLogoutAgenda() );
        dispatch( onLogout() );
    }

    return {
        // Propiedades
        status, 
        usuario, 
        errorMessage,

        // Métodos
        checkAuthToken,
        starLogout,
        startLogin,
        startRegister,
    }
}