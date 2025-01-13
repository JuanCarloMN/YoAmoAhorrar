import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useBlogStore } from "../../hooks";

import moment from "moment";

export const BlogEntradasPage = () => {

	const { startCargarBlogs } = useBlogStore();
    const { blogs } = useSelector( state => state.blog );

	useEffect( () => {
        startCargarBlogs();
    }, []);

    return (
        <main className="container">
			<div className="row">
				<div className="col pb-2">
					{
						blogs.map( blog => (
							<div className="mb-5 border-bottom pb-5" key={ blog.id }>
								<h2 className="titulo">{ blog.blogTitulo }</h2>
								<p className="text-muted mb-4">{ moment( blog.blogFecha ).format('DD MMMM YYYY') } por <a href="#">{ blog.blogUsuario }</a></p>
								<p className="blog-parrafo w-100">{ blog.blogDetalle }</p>
							</div>
						))
					}
				</div>
				<div className="text-center p-0 align-items-center">
					<img src="./img/Logo.png" alt="Perla Maldonado" className="logo-footer"/>
					<br />
					<span className="fw-lighter">2025</span>
				</div>
			</div>
		</main>
    )
}

