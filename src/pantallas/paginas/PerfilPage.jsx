import { PerfilDatosUsuario, PerfilConfiguracion, PerfilObjetivos } from "../componentes/secciones";

export const PerfilPage = () => {
    return (
        <>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <h1 className="mt-2">Perfil del usuario</h1>
                    </div>
                    <div className="container p-1">
                        <div className="accordion accordion-flush" id="perfil">
                            <PerfilDatosUsuario />
                            <PerfilConfiguracion />
                            <PerfilObjetivos />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
