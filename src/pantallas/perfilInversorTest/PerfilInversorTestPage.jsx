import { PerfilInversorTestCabeceroPage } from "./PerfilInversorTestCabeceroPage"
import { PerfilInversorTestContenidoPage } from "./PerfilInversorTestContenidoPage"

export const PerfilInversorTestPage = () => {
    return (
        <>
            <PerfilInversorTestCabeceroPage />
            <PerfilInversorTestContenidoPage />
            {/* Footer */}
            <div className="container text-center p-0 align-items-center">
                <hr />
                <img src="../img/solo-logo.png" alt="Perla Maldonado" className="logo-footer"/>
                <br />
                <span className="fw-lighter">2025</span>
            </div>
        </>
    )
}

