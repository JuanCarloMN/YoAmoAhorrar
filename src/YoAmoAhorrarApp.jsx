import { Provider } from 'react-redux';
import { AppRouter, SeccionesRouter } from './router';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';

export const YoAmoAhorrarApp = () => {
    return (
        <Provider store={ store } >
            <BrowserRouter>
                <SeccionesRouter />
            </BrowserRouter>
        </Provider>
    )
}

