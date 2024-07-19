import codigoPostalApi from "../api/codigoPostalApi.js";

export const buscaCodigoPostal = async ( cp ) => {
    try {
        const { data } = await codigoPostalApi.get(`codigoPostal/${ cp }`);

        if ( data.ok ) {
            return data.codigoPostal;
        }
        return ''

    } catch (error) {
        Swal.fire('Error al obtener el código postal', error.response.data.msg, 'error');
    }
}