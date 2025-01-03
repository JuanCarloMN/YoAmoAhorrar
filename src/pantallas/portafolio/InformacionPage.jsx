import { ContactamePage } from "./ContactamePage"

export const InformacionPage = () => {
    return (
        <>
            <main>
                <div className="container">
                    {/* Acerca de */}
                    <div className="row acerca-de align-items-center px-lg-4 mb-5" id="acerca-de">
                        <div className="col-lg-5 col foto text-center">
                            <img src="img/perfil.jpg" alt="" className="rounded-circle mb-3 foto" />
                            <p className="nombre">Perla Gabriela Maldonado</p>
                        </div>
                        
                        <div className="col-lg-7 col-12 info">
                            <h2 className="titulo text-center text-lg-start">Acerca de</h2>
                            <p className="resumen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio dignissimos et autem natus quibusdam explicabo id minus consequuntur optio!</p>
                            <p className="resumen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad fugiat officiis veniam perspiciatis deleniti provident illo odio eum cumque.</p>

                            {/* <p className="label">SwiftUI</p>
                            <div className="progress mb-3">
                                <div className="progress-bar text-start"role="progressbar"aria-valuemin="0"aria-valuemax="100" aria-valuenow="75">
                                    75%
                                </div>
                            </div>

                            <p className="label">React</p>
                            <div className="progress mb-3">
                                <div className="progress-bar text-start"role="progressbar"aria-valuemin="0"aria-valuemax="100" aria-valuenow="95">
                                    95%
                                </div>
                            </div>

                            <p className="label">JavaScript</p>
                            <div className="progress mb-3">
                                <div className="progress-bar text-start"role="progressbar"aria-valuemin="0"aria-valuemax="100" aria-valuenow="85">
                                    85%
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <ContactamePage />
                </div>
            </main>
        </>
    )
}
