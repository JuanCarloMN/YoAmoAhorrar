import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        isCargandoBlogs: true,
        blogs: [],
        blogActivo: null
    },
    reducers: {
        onSetBlogActivo: ( state, { payload } ) => {
            state.blogActivo = payload;
        },
        onNuevoBlog: (state, { payload } ) => {
            state.blogs.push( payload );
            state.blogActivo = null;
        },
        onActualizaBlog: ( state, { payload } ) => {
            state.blogs = state.blogs.map( blog => {
                if ( blog.id === payload.id ) {
                    return payload;
                }
                return blog;
            });
        },
        onBorrarBlog: ( state, { payload } ) => {
            state.blogs = state.blogs.filter( blog => blog.id !== payload.id );
            state.blogActivo = null;
        },
        onCargarBlogs: ( state, { payload } ) => {
            state.isCargandoBlogs = false;
            state.blogs = [];

            payload.forEach( blog => {
                const existe = state.blogs.some( dbBlog => dbBlog === blog.id );
                if ( !existe ){
                    state.blogs.push( blog );
                }
            });
        },
        onLogoutBlog: ( state ) => {
            state.isCargandoBlogs = true;
            state.blogs = [];
            state.blogActivo = null;
        },
        onSuscribirse: ( state ) => {
            state.blogs.push( payload );
            state.blogActivo = null;
        },
        onCargaListaSuscriptores: ( state, { payload } ) => {
            state.isCargandoBlogs = false;
            state.blogs = [];

            payload.forEach( blog => {
                const existe = state.blogs.some( dbBlog => dbBlog === blog.id );
                if ( !existe ){
                    state.blogs.push( blog );
                }
            });
        },
    }
});

export const { 
    onActualizaBlog,
    onBorrarBlog, 
    onCargarBlogs,
    onLogoutBlog,
    onNuevoBlog, 
    onSetBlogActivo, 
} = blogSlice.actions;
