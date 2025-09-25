
export const FAQContenidoPage = () => {
    return (
        <div className="container">
            <div className="col">
                <div className="accordion accordion-flush" id="faqs">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-1">
                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#elemento-1" aria-expanded="true" aria-controls="elemento-1">
                                <b>1. ¿Qué pasa si fallezco antes de que termine mi plan?</b>
                            </button>
                        </h2>
                        <div id="elemento-1" className="accordion-collapse collapse show" aria-labelledby="encabezado-1" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    Si faltas antes del término del plan, tus beneficiarios recibirán la suma asegurada contratada por fallecimiento.
                                </p>
                                <p>
                                    <b>Cubre todos tus productos:</b> Vida Mujer, Imagina Ser, Nuevo Plenitud, Star Dotal.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#elemento-2" aria-expanded="true" aria-controls="elemento-2">
                                <b>2. ¿Y si fallezco después de retirarme (en productos con ahorro)?</b>
                            </button>
                        </h2>
                        <div id="elemento-2" className="accordion-collapse collapse" aria-labelledby="encabezado-2" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    En productos como Imagina Ser o Nuevo Plenitud, tus ingresos o ahorro pueden heredarse a un beneficiario según las condiciones de la póliza.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-3">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#elemento-3" aria-expanded="true" aria-controls="elemento-3">
                                <b>3. ¿Cómo funcionan los anticipos o retiros parciales?</b>
                            </button>
                        </h2>
                        <div id="elemento-3" className="accordion-collapse collapse" aria-labelledby="encabezado-3" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    <b>Vida Mujer:</b> a partir del 5.º año recibes el 5% de la suma asegurada, cada 2 años hasta el año 17; en el año 20 recibes el 80%.
                                </p>
                                <p>
                                    <b>Nuevo Plenitud:</b> puedes solicitar adelantos como 6 mensualidades o el 30 % de una mensualidad.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-4">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#elemento-4" aria-expanded="true" aria-controls="elemento-4">
                                <b>4. ¿Qué beneficios incluye Vida Mujer sin costo adicional?</b>
                            </button>
                        </h2>
                        <div id="elemento-4" className="accordion-collapse collapse" aria-labelledby="encabezado-4" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    <b>Incluye:</b>
                                    <br />
                                    <br />- Apoyo en vida por enfermedad terminal (25% de la suma asegurada, hasta $700,000 MXN).
                                    <br />- Asistencia médica en EE. UU. (consulta médicos o segunda opinión médica).
                                    <br />- Protección por cáncer femenino y más.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-5">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#elemento-5" aria-expanded="true" aria-controls="elemento-5">
                                <b>5. ¿Cómo puedo recibir el dinero al retirarme con Nuevo Plenitud?</b>
                            </button>
                        </h2>
                        <div id="elemento-5" className="accordion-collapse collapse" aria-labelledby="encabezado-5" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    <b>Opciones:</b>
                                    <br />
                                    <br />- Pago en una sola exhibición.
                                    <br />- Ingresos mensuales vitalicios (también con aguinaldos los primeros 5 años).
                                    <br />- Adelantos para proyectos especiales.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-6">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#elemento-6" aria-expanded="true" aria-controls="elemento-6">
                                <b>6. ¿Cuáles son los beneficios fiscales de Nuevo Plenitud?</b>
                            </button>
                        </h2>
                        <div id="elemento-6" className="accordion-collapse collapse" aria-labelledby="encabezado-6" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    Las aportaciones de ahorro pueden ser deducibles, según la Ley del ISR (máximo 5 UMAs o 10% del ingreso anual, hasta $152,000 MXN).
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-7">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#elemento-7" aria-expanded="true" aria-controls="elemento-7">
                                <b>7. ¿En qué monedas puedo ahorrar?</b>
                            </button>
                        </h2>
                        <div id="elemento-7" className="accordion-collapse collapse" aria-labelledby="encabezado-7" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    Productos como Se Adapta, Imagina Ser, Star Dotal permiten ahorro en USD o UDI, protegiendo valor ante inflación.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-8">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#elemento-8" aria-expanded="true" aria-controls="elemento-8">
                                <b>8. ¿Qué es Se Adapta y cómo funciona?</b>
                            </button>
                        </h2>
                        <div id="elemento-8" className="accordion-collapse collapse" aria-labelledby="encabezado-8" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    Es un seguro renovable cada 5 años hasta los 65 años. Luego puedes convertirlo en un seguro más completo.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-9">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#elemento-9" aria-expanded="true" aria-controls="elemento-9">
                                <b>9. ¿Qué pasa si me incapacito o soy inválido?</b>
                            </button>
                        </h2>
                        <div id="elemento-9" className="accordion-collapse collapse" aria-labelledby="encabezado-9" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    La mayoría de los planes ofrecen exención de pago de primas por invalidez total y permanente.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-10">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#elemento-10" aria-expanded="true" aria-controls="elemento-10">
                                <b>10. ¿Cómo funciona Star Dotal?</b>
                            </button>
                        </h2>
                        <div id="elemento-10" className="accordion-collapse collapse" aria-labelledby="encabezado-10" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    Un seguro de vida con ahorro: al término del plazo (5, 10, 15 o 20 años), recibes lo que ahorraste. Si falleces antes, tus beneficiarios reciben la suma asegurada.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-11">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#elemento-11" aria-expanded="true" aria-controls="elemento-11">
                                <b>11. ¿Puedo incluir a mi cónyuge en Star Dotal?</b>
                            </button>
                        </h2>
                        <div id="elemento-11" className="accordion-collapse collapse" aria-labelledby="encabezado-11" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    Sí, puedes contratar una póliza mancomunada para proteger a tu pareja.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-12">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#elemento-12" aria-expanded="true" aria-controls="elemento-12">
                                <b>12. ¿Qué pasa si quiero cambiar de plan?</b>
                            </button>
                        </h2>
                        <div id="elemento-12" className="accordion-collapse collapse" aria-labelledby="encabezado-12" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    Con Se Adapta, a partir del tercer año puedes migrar a otro seguro que te ofrezca mayores beneficios.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-13">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#elemento-13" aria-expanded="true" aria-controls="elemento-13">
                                <b>13. ¿Qué requisitos necesito para contratar?</b>
                            </button>
                        </h2>
                        <div id="elemento-13" className="accordion-collapse collapse" aria-labelledby="encabezado-13" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    <b>Requisitos generales:</b>
                                    <br />
                                    <br />- Ser residente de México.
                                    <br />- Tener entre 18 y 55/60/80 años, dependiendo del plan.
                                    <br />- Llenar solicitud y, si aplica, presentar exámenes médicos o documentación financiera.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-14">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#elemento-14" aria-expanded="true" aria-controls="elemento-14">
                                <b>14. ¿Cómo puedo pagar?</b>
                            </button>
                        </h2>
                        <div id="elemento-14" className="accordion-collapse collapse" aria-labelledby="encabezado-14" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    Tú eliges: pago mensual, trimestral, semestral o anual, según tu plan y comodidad financiera.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-15">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#elemento-15" aria-expanded="true" aria-controls="elemento-15">
                                <b>15. ¿Qué seguros ofrecen apoyo en vida por enfermedades graves?</b>
                            </button>
                        </h2>
                        <div id="elemento-15" className="accordion-collapse collapse" aria-labelledby="encabezado-15" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    Vida Mujer, Imagina Ser, Nuevo Plenitud y Star Dotal incluyen anticipos o apoyo en vida si te diagnostican enfermedad terminal o similares.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="encabezado-16">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#elemento-16" aria-expanded="true" aria-controls="elemento-16">
                                <b>16. ¿Cuánto cuesta cada paquete y en qué se diferencian?</b>
                            </button>
                        </h2>
                        <div id="elemento-16" className="accordion-collapse collapse" aria-labelledby="encabezado-16" data-bs-parent="#faqs">
                            <div className="accordion-body">
                                <p>
                                    <b>SMNYL</b> no publica precios fijos en el sitio: las primas se adaptan a tus necesidades, suma asegurada y posibilidades económicas. Se cotizan con un asesor. Sin embargo, cada plan tiene diferencias claras:
                                </p>
                                <p>
                                    <br /><b>Vida Mujer:</b> protección + ahorro con anticipos cada dos años y apoyo en enfermedades femeninas.
                                    <br /><b>Imagina Ser:</b> ahorro para retiro desde los 60 años, opción de ingreso vitalicio o pago único, ahorro en USD o UDI.
                                    <br /><b>Nuevo Plenitud:</b> ahorro para retiro con beneficios fiscales, forma flexible de retiro (lump sum o mensualidades), aguinaldos y adelantos.
                                    <br /><b>Star Dotal:</b> ahorro puro durante plazo definido, sumas en una exhibición al vencimiento, protección en vida.
                                    <br /><b>Se Adapta:</b> seguro renovable, flexible y escalable conforme cambian tus necesidades.
                                </p>
                                <p>
                                    Para obtener precios específicos, se requiere consultar con un asesor especializado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-0 align-items-center">
                <hr />
                <img src="../img/solo-logo.png" alt="Perla Maldonado" className="logo-footer"/>
                <br />
                <span className="fw-lighter">2025</span>
            </div>
        </div>
    )
}

