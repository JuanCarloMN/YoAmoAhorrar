import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_BANXICO_URL, VITE_BANXICO_TOKEN_KEY } = getEnvVariables();

const indicadoresApi = axios.create ({
    baseURL: VITE_API_BANXICO_URL
});

indicadoresApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'Bmx-Token': VITE_BANXICO_TOKEN_KEY
    }
    return config;
});

export default indicadoresApi
