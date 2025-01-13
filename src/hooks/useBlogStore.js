import { useDispatch, useSelector } from 'react-redux';
import { blogApi } from '../api';
import { onActualizaBlog, onBorrarBlog, onCargarBlogs, onNuevoBlog, onSetBlogActivo } from '../store';
import { convierteFechaBlog } from '../helpers';

import Swal from 'sweetalert2';

export const useBlogStore = () => {

    const dispatch = useDispatch();

    const { blogs, blogActivo, state} = useSelector( state => state.blog );
    const { usuario } = useSelector( state => state.auth );
    
    const setBlogActivo = ( blog ) => {
        dispatch( onSetBlogActivo( blog ) );
    }

    const startSalvarBlog = async ( blog ) => {
        
        try {
            if ( blog.id ) {
                // Actualizar blog
                console.log({blog});
                
                await blogApi.put(`/blog/${ blog.id }`, blog );
                dispatch( onActualizaBlog( blog ) );
                return;
            } 
    
            // Agregar blog
            const { data } = await blogApi.post('/blog/nuevo', blog)
            dispatch( onNuevoBlog( { ...blog, id: data.blog.id, usuario } ) )
        } catch (error) {
            Swal.fire('Error al guardar el blog', error.response.data.msg, 'error' );
        }

    }

    const startBorrarBlog = async ( blog ) => {
        try {
            await blogApi.delete(`/blog/${ blog.id }` );
            dispatch( onBorrarBlog( blog ) );
        } catch (error) {
            Swal.fire('Error al eliminar el blog', error.response.data.msg, 'error' );
        }
    }

    const startCargarBlogs = async () => {
        try {
            const { data } = await blogApi.get('/libres/obtenerBlogs');            
            const blogs = convierteFechaBlog( data.blogs );
            dispatch( onCargarBlogs( blogs ) );
        } catch (error) {
            console.log('Error al cargar los blogs');
            console.log( error );
        }
    }

    const startSuscribirse = async ( mensaje ) => {
        try {
            const { data } = await blogApi.post('/libres/suscribirseBlog', mensaje)
            Swal.fire({title: "Suscripción al Blog", text: "Te has suscrito al Blog de forma correcta", icon: "success"});
        } catch (error) {
            console.log({error});
            
            Swal.fire('Error al suscribirse', error, 'error' );
        }
    }
    return {
        // Propiedades
        blogActivo,
        blogs,
        
        // Métodos
        setBlogActivo,
        startBorrarBlog,
        startCargarBlogs,
        startSalvarBlog,
        startSuscribirse,
    }
}
