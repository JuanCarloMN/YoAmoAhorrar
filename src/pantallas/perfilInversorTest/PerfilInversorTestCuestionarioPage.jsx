
export const PerfilInversorTestCuestionarioPage = ( { onRespuestaChange, resultado } ) => {
    return (
        <>
            {/* Pregunta 1 */}
            <div className="row d-flex align-items-center px-lg-4 mb-4" id="">
                <p className="alert alert-secondary"><b>1. Si tuvieras que elegir entre estas opciones de inversión, ¿cuál prefieres?</b></p>
                <div className="col">
                    <div className="form-check">
                        <input type="radio" name="pregunta1" className="form-check-input" id="pregunta1-1" onChange={ onRespuestaChange } value={ 1 } />
                        <label htmlFor="pregunta1-1" className="form-check-label">A) Que mi dinero crezca poco a poco pero con certeza</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta1" className="form-check-input" id="pregunta1-2" onChange={ onRespuestaChange } value={ 2 } />
                        <label htmlFor="pregunta1-2" className="form-check-label">B) Que mi dinero crezca más, aunque a veces tenga subidas y bajadas</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta1" className="form-check-input" id="pregunta1-3" onChange={ onRespuestaChange } value={ 3 } />
                        <label htmlFor="pregunta1-3" className="form-check-label">C) Apostar por un crecimiento alto aunque implique riesgos importantes</label>
                    </div>
                </div>
            </div>

            {/* Pregunta 2 */}
            <div className="row d-flex align-items-center px-lg-4 mb-4" id="">
                <p className="alert alert-secondary"><b>2. ¿Qué tan importante es para ti la seguridad de tu dinero?</b></p>
                <div className="col">
                    <div className="form-check">
                        <input type="radio" name="pregunta2" className="form-check-input" id="pregunta2-1" onChange={ onRespuestaChange } value={ 1 } />
                        <label htmlFor="pregunta2-1" className="form-check-label">A) Lo más importante, no quiero perder nada</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta2" className="form-check-input" id="pregunta2-2" onChange={ onRespuestaChange } value={ 2 } />
                        <label htmlFor="pregunta2-2" className="form-check-label">B) Importante, pero acepto algo de riesgo si hay buenas ganancias</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta2" className="form-check-input" id="pregunta2-3" onChange={ onRespuestaChange } value={ 3 } />
                        <label htmlFor="pregunta2-3" className="form-check-label">C) No me preocupa tanto, pienso en el largo plazo</label>
                    </div>
                </div>
            </div>

            {/* Pregunta 3 */}
            <div className="row d-flex align-items-center px-lg-4 mb-4" id="">
                <p className="alert alert-secondary"><b>3. ¿Cómo reaccionarías si tu inversión baja de valor en un mes?</b></p>
                <div className="col">
                    <div className="form-check">
                        <input type="radio" name="pregunta3" className="form-check-input" id="pregunta3-1" onChange={ onRespuestaChange } value={ 1 } />
                        <label htmlFor="pregunta3-1" className="form-check-label">A) Me preocuparía y preferiría retirarla</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta3" className="form-check-input" id="pregunta3-2" onChange={ onRespuestaChange } value={ 2 } />
                        <label htmlFor="pregunta3-2" className="form-check-label">B) Esperaría a que se recupere</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta3" className="form-check-input" id="pregunta3-3" onChange={ onRespuestaChange } value={ 3 } />
                        <label htmlFor="pregunta3-3" className="form-check-label">C) Vería si es oportunidad para invertir más</label>
                    </div>
                </div>
            </div>

            {/* Pregunta 4 */}
            <div className="row d-flex align-items-center px-lg-4 mb-4" id="">
                <p className="alert alert-secondary"><b>4. ¿Cuánto tiempo estás dispuesto a mantener tu inversión sin tocarla?</b></p>
                <div className="col">
                    <div className="form-check">
                        <input type="radio" name="pregunta4" className="form-check-input" id="pregunta4-1" onChange={ onRespuestaChange } value={ 1 } />
                        <label htmlFor="pregunta4-1" className="form-check-label">A) Menos de 2 años</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta4" className="form-check-input" id="pregunta4-2" onChange={ onRespuestaChange } value={ 2 } />
                        <label htmlFor="pregunta4-2" className="form-check-label">B) Entre 3 y 7 años</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta4" className="form-check-input" id="pregunta4-3" onChange={ onRespuestaChange } value={ 3 } />
                        <label htmlFor="pregunta4-3" className="form-check-label">C) Más de 8 años</label>
                    </div>
                </div>
            </div>

            {/* Pregunta 5 */}
            <div className="row d-flex align-items-center px-lg-4 mb-4" id="">
                <p className="alert alert-secondary"><b>5. ¿Cuál es tu objetivo principal al invertir?</b></p>
                <div className="col">
                    <div className="form-check">
                        <input type="radio" name="pregunta5" className="form-check-input" id="pregunta5-1" onChange={ onRespuestaChange } value={ 1 } />
                        <label htmlFor="pregunta5-1" className="form-check-label">A) Proteger mi dinero</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta5" className="form-check-input" id="pregunta5-2" onChange={ onRespuestaChange } value={ 2 } />
                        <label htmlFor="pregunta5-2" className="form-check-label">B) Hacerlo crecer de forma constante</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta5" className="form-check-input" id="pregunta5-3" onChange={ onRespuestaChange } value={ 3 } />
                        <label htmlFor="pregunta5-3" className="form-check-label">C) Obtener el mayor rendimiento posible</label>
                    </div>
                </div>
            </div>

            {/* Pregunta 6 */}
            <div className="row d-flex align-items-center px-lg-4 mb-4" id="">
                <p className="alert alert-secondary"><b>6. Si recibieras un bono anual de $100,000, ¿qué harías con él?</b></p>
                <div className="col">
                    <div className="form-check">
                        <input type="radio" name="pregunta6" className="form-check-input" id="pregunta6-1" onChange={ onRespuestaChange } value={ 1 } />
                        <label htmlFor="pregunta6-1" className="form-check-label">A) Lo guardo en una cuenta segura o seguro de ahorro</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta6" className="form-check-input" id="pregunta6-2" onChange={ onRespuestaChange } value={ 2 } />
                        <label htmlFor="pregunta6-2" className="form-check-label">B) Lo divido: una parte segura, otra en inversión</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta6" className="form-check-input" id="pregunta6-3" onChange={ onRespuestaChange } value={ 3 } />
                        <label htmlFor="pregunta6-3" className="form-check-label">C) Lo invierto en instrumentos de mayor riesgo</label>
                    </div>
                </div>
            </div>

            {/* Pregunta 7 */}
            <div className="row d-flex align-items-center px-lg-4 mb-4" id="">
                <p className="alert alert-secondary"><b>7. ¿Qué experiencia tienes invirtiendo?</b></p>
                <div className="col">
                    <div className="form-check">
                        <input type="radio" name="pregunta7" className="form-check-input" id="pregunta7-1" onChange={ onRespuestaChange } value={ 1 } />
                        <label htmlFor="pregunta7-1" className="form-check-label">A) Casi nada o solo en instrumentos seguros</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta7" className="form-check-input" id="pregunta7-2" onChange={ onRespuestaChange } value={ 2 } />
                        <label htmlFor="pregunta7-2" className="form-check-label">B) Alguna en fondos o CETES</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta7" className="form-check-input" id="pregunta7-3" onChange={ onRespuestaChange } value={ 3 } />
                        <label htmlFor="pregunta7-3" className="form-check-label">C) Variada: fondos, acciones, criptos, etc.</label>
                    </div>
                </div>
            </div>

            {/* Pregunta 8 */}
            <div className="row d-flex align-items-center px-lg-4 mb-4" id="">
                <p className="alert alert-secondary"><b>8. ¿Qué prefieres: dormir tranquilo o crecer rápido?</b></p>
                <div className="col">
                    <div className="form-check">
                        <input type="radio" name="pregunta8" className="form-check-input" id="pregunta8-1" onChange={ onRespuestaChange } value={ 1 } />
                        <label htmlFor="pregunta8-1" className="form-check-label">A) Dormir tranquilo siempre</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta8" className="form-check-input" id="pregunta8-2" onChange={ onRespuestaChange } value={ 2 } />
                        <label htmlFor="pregunta8-2" className="form-check-label">B) Dormir tranquilo pero crecer un poco más</label>
                    </div>

                    <div className="form-check">
                        <input type="radio" name="pregunta8" className="form-check-input" id="pregunta8-3" onChange={ onRespuestaChange } value={ 3 } />
                        <label htmlFor="pregunta8-3" className="form-check-label">C) Crecer rápido, aunque a veces me preocupe</label>
                    </div>
                </div>
            </div>

            {/* Resultado */}
            <div className="row d-flex align-items-center px-lg-4 mb-4" id="">
                <button className="boton-seccion" type="button" onClick={ resultado }>Resultado</button>
            </div>

        </>
    )
}
