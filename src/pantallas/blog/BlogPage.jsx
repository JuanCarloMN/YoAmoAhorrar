import { BlogCabeceroPage } from "./BlogCabeceroPage"
import { BlogDestacadoPage } from "./BlogDestacadoPage"
import { BlogEntradasPage } from "./BlogEntradasPage"
import { BlogUltimoPostPage } from "./BlogUltimoPostPage"

export const BlogPage = () => {
    return (
        <>
            <BlogCabeceroPage />
            {/* <BlogUltimoPostPage />
            <BlogDestacadoPage /> */}
            <BlogEntradasPage />
        </>
    )
}
