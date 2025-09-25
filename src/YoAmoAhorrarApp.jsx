import { Provider } from 'react-redux';
import { SeccionesRouter } from './router';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { isMobile, isDesktop } from 'react-device-detect'

export const YoAmoAhorrarApp = () => {
    const ua = navigator.userAgent.toLowerCase();
    let isMobile = false;
    if ((/mobile|android|iphone|ipod|blackberry|iemobile|opera mini/.test(ua)) || ((/ipad|tablet|playbook|silk/.test(ua)) || (window.innerWidth >= 600 && window.innerWidth <= 1024))) {
        isMobile = true;
    }

    localStorage.setItem( 'isMobile', isMobile );
    
    return (
        <Provider store={ store } >
            <BrowserRouter>
                <SeccionesRouter />
            </BrowserRouter>
        </Provider>
    )
}

