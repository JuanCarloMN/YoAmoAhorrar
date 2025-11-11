import { useEffect } from "react"
import { useIndicadoresStore } from "../../hooks/useIndicadoresStore"
import { FAQPage } from "../faq/FAQPage"
import { IndicadoresPage } from "../indicadores/IndicadoresPage"
import { InteresCompuestoPage } from "../interesCompuesto/InteresCompuestoPage"
import { PerfilInversorTestContenidoPage } from "../perfilInversorTest/PerfilInversorTestContenidoPage"

export const HerramientasDatosPage = () => {

    // const { startCargarIndicadores } = useIndicadoresStore()
    
    // useEffect( () => {
    //     startCargarIndicadores();
    // }, []);

    return (
        <div className="container">
            <div className="col">
                <div className="accordion accordion-flush" id="herrmaientas">
                    {/* Graficas de indicadores */}
                    <div className="accordion-item ">
                        <h2 className="accordion-header" id="seccion-1">
                            <button className="accordion-button seccion" type="button" data-bs-toggle="collapse" data-bs-target="#dato-1" aria-expanded="true" aria-controls="dato-1">
                                <b>Gráficas de indicadores</b>
                            </button>
                        </h2>
                        <div id="dato-1" className="accordion-collapse collapse show" aria-labelledby="seccion-1" data-bs-parent="#herrmaientas">
                            <div className="accordion-body">
                                <IndicadoresPage />
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* Interés compuesto */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="seccion-2">
                            <button className="accordion-button seccion collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dato-2" aria-expanded="true" aria-controls="dato-2">
                                <b>Interés compuesto</b>
                            </button>
                        </h2>
                        <div id="dato-2" className="accordion-collapse collapse" aria-labelledby="seccion-2" data-bs-parent="#herrmaientas">
                            <div className="accordion-body">
                                <InteresCompuestoPage />
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* Test de perfil inversor */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="seccion-3">
                            <button className="accordion-button seccion collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dato-3" aria-expanded="true" aria-controls="dato-3">
                                <b>Test de perfil inversor</b>
                            </button>
                        </h2>
                        <div id="dato-3" className="accordion-collapse collapse" aria-labelledby="seccion-3" data-bs-parent="#herrmaientas">
                            <div className="accordion-body">
                                <PerfilInversorTestContenidoPage />
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* Preguntas frecuentes */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="seccion-4">
                            <button className="accordion-button seccion collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dato-4" aria-expanded="true" aria-controls="dato-4">
                                <b>Preguntas frecuentes</b>
                            </button>
                        </h2>
                        <div id="dato-4" className="accordion-collapse collapse" aria-labelledby="seccion-4" data-bs-parent="#herrmaientas">
                            <div className="accordion-body">
                                <FAQPage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}
