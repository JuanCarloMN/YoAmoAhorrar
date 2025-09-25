
export const CabeceroPage = () => {
    return (
        <>
            <header className="container my-5">
                <section className="row nav g-0 justify-content-between rounded-top d-flex">
                    {/* Logotipo */}
                    <div className="col col-lg-4 d-flex justify-content-center">
                        <div className="ms-2 auto-col">
                            <img src="./img/pm-logo.png" alt="Perla Maldonado" className="logo-encabezado"/>
                        </div>
                    </div>

                    {/* Enlaces */}
                    <section className="col-12 menu col-lg-8 d-lg-flex justify-content-lg-end justify-content-center">
                        <div className="col-12 menu col-lg-6 d-flex justify-content-lg-between justify-content-center">
                            <a href="blog" className="opcion-menu border flex-fill px-lg-4 d-flex align-items-center col-4 col-lg-2 text-center">
                                <div className="w-100">
                                    <span>Blog</span>
                                    <div className="icono-perfil">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icono-perfil" viewBox="0 0 512 512">
                                            <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/>
                                        </svg>
                                    </div>
                                </div> 
                            </a>

                            <a href="news" className="opcion-menu border flex-fill px-lg-4 d-flex align-items-center col-4 col-lg-2 text-center">
                                <div className="w-100">
                                    <span>Noticias</span>
                                    <div className="icono-perfil">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                        </svg>
                                    </div>
                                </div> 
                            </a>

                            <a href="testimonios" className="opcion-menu border flex-fill px-lg-4 d-flex align-items-center col-4 col-lg-2 text-center">
                                <div className="w-100">
                                    <span>Testimonio</span>
                                    <div className="icono-perfil">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icono-perfil" viewBox="0 0 512 512">
                                        <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                                    </svg>
                                    </div>
                                </div> 
                            </a>
                        </div>

                        <div className="col-12 menu col-lg-6 d-flex justify-content-lg-between justify-content-center">
                            <a href="acerca" className="opcion-menu border flex-fill px-lg-4 d-flex align-items-center col-4 col-lg-2 text-center">
                                <div className="w-100 text-center">
                                    <span className="text-center">Acerca de...</span>
                                    <div className="icono-perfil">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                        <path d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z"/>
                                    </svg>
                                    </div>
                                </div> 
                            </a>

                            <a href="faq" className="opcion-menu border flex-fill px-lg-4 d-flex align-items-center col-4 col-lg-2 text-center">
                                <div className="w-100">
                                    <span>FAQ</span>
                                    <div className="icono-perfil">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                            <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM320 240C302.3 240 288 254.3 288 272C288 285.3 277.3 296 264 296C250.7 296 240 285.3 240 272C240 227.8 275.8 192 320 192C364.2 192 400 227.8 400 272C400 319.2 364 339.2 344 346.5L344 350.3C344 363.6 333.3 374.3 320 374.3C306.7 374.3 296 363.6 296 350.3L296 342.2C296 321.7 310.8 307 326.1 302C332.5 299.9 339.3 296.5 344.3 291.7C348.6 287.5 352 281.7 352 272.1C352 254.4 337.7 240.1 320 240.1zM288 432C288 414.3 302.3 400 320 400C337.7 400 352 414.3 352 432C352 449.7 337.7 464 320 464C302.3 464 288 449.7 288 432z"/>
                                        </svg>
                                    </div>
                                </div>
                            </a>

                            <a href="citas" className="opcion-menu border flex-fill px-lg-4 d-flex align-items-center col-4 col-lg-2 text-center">
                                <div className="w-100">
                                    <span>Citas</span>
                                    <div className="icono-perfil">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icono-perfil" viewBox="0 0 16 16">
                                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </section>
                </section>

                {/* Slider */}
                <div className="row">
                    <div className="col">
                        <div className="carousel slide" data-bs-ride="carousel" id="slider">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <a href="/blog#blog01">
                                        <img src="./img/banner_seguro_moderno.jpg" className="d-block w-100 " />
                                    </a>
                                </div>
                                <div className="carousel-item ">
                                    <a href="/blog#blog02">
                                        <img src="./img/banner_seguro_educacion.jpg" className="d-block w-100 " />
                                    </a>
                                </div>
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>

                            <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Siguiente</span>
                            </button>

                            {/* <div className="carousel-indicators">
                                <button type="button" data-bs-target="#slider" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slideshow1"></button>
                                <button type="button" data-bs-target="#slider" data-bs-slide-to="1" className="active bg-dark" aria-label="Slideshow2"></button>
                                <button type="button" data-bs-target="#slider" data-bs-slide-to="1" aria-label="Slideshow2"></button>
                                <button type="button" data-bs-target="#slider" data-bs-slide-to="2" aria-label="Slideshow3"></button>
                                <button type="button" data-bs-target="#slider" data-bs-slide-to="3" aria-label="Slideshow4"></button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
