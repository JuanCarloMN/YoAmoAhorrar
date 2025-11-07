import { HerramientasCabeceroPage } from "./HerramientasCabeceroPage"
import { HerramientasDatosPage } from "./HerramientasDatosPage"

export const HerramientasPage = () => {
    return (
        <>
            <HerramientasCabeceroPage />
            <HerramientasDatosPage />
            <div className="text-center p-0 align-items-center">
                <hr />
                <img src="../img/solo-logo.png" alt="Perla Maldonado" className="logo-footer"/>
                <br />
                <span className="fw-lighter">2025</span>
            </div>
        </>
    )
}
