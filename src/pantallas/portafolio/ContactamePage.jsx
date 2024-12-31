import { useState } from "react"
import Swal from 'sweetalert2';
import { mensajeInicial } from "../../helpers";
import { useMensajeStore } from "../../hooks";

export const ContactamePage = () => {

    const [ valoresFormulario, setValoresFormulario ] = useState( mensajeInicial );
    const [ claseNombre, setClaseNombre ] = useState('');
    const [ claseEmail, setClaseEmail ] = useState('');
    const [ claseMensaje, setClaseMensaje ] = useState('');

    const { startSalvarMensaje } = useMensajeStore();

    const onInputChange = ({ target }) => {

        setValoresFormulario({
            ...valoresFormulario,
            [ target.name ]: target.value
        });

        if ( target.name === 'mensajeNombre' && target.value.length > 0 )
            setClaseNombre('');
        if ( target.name === 'mensajeEmail' && target.value.length > 0 )
            setClaseEmail('');
        if ( target.name === 'mensaje' && target.value.length > 9 )
            setClaseMensaje('');
        
    }

    const guardaMensaje = async () => {
        setClaseNombre('');
        setClaseEmail('')
        setClaseMensaje('');

        if ( valoresFormulario.mensajeNombre.length === 0 ) {
            Swal.fire( 'Información incorrecta', 'Es necesario proporciones tu nombre <br>antes de enviar el mensaje', 'error' );
            setClaseNombre('is-invalid');
            return;
        }
        if ( valoresFormulario.mensajeEmail.length === 0 ) {
            Swal.fire( 'Información incorrecta', 'Es necesario proporciones tu correo electrónico <br>antes de enviar el mensaje', 'error' );
            setClaseEmail('is-invalid');
            return;
        }
        if ( valoresFormulario.mensajeDetalle.length === 0 ) {
            Swal.fire( 'Información incorrecta', 'Es necesario escribir el mensaje antes de enviar la información', 'error' );
            setClaseMensaje('is-invalid');
            return;
        } else if ( valoresFormulario.mensajeDetalle.length< 10 ) {
            Swal.fire( 'Información incorrecta', 'El mensaje debe tener al menos 10 caractéres', 'error' );
            setClaseMensaje('is-invalid');
            return;
        }
        
        setValoresFormulario({
            ...valoresFormulario,
            ['mensajeFecha']: new Date()
        });
        
        await startSalvarMensaje( valoresFormulario )
        setValoresFormulario( mensajeInicial );
    }
    return (
        <>
            {/* Formulario de contacto */}
            <div className="row contacto justify-content-center py-5 mb-5" id="contactame">
                <div className="col-12 col-lg-8">
                    <h2 className="titulo">Contáctame</h2>
                    <form action="" className="formulario">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="form-floating mb-3">
                                    <input type="text" name="mensajeNombre" id="mensajeNombre" className={`form-control ` + claseNombre } placeholder="Tu nombre" autoComplete="off" value={ valoresFormulario.mensajeNombre } onChange={ onInputChange } />
                                    <label htmlFor="mensajeNombre">Nombre</label>
                                </div>
                            </div>
                            
                            <div className="col-12 col-lg-6 mb-3">
                                <div className="form-floating ">
                                    <input type="email" name="mensajeEmail" id="mensajeEmail" className={`form-control ` + claseEmail } placeholder="Tu correo" value={ valoresFormulario.mensajeEmail } onChange={ onInputChange } />
                                    <label htmlFor="mensajeEmail">Correo</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating mb-3">
                                    <textarea name="mensajeDetalle" id="mensajeDetalle" className={`form-control ` + claseMensaje } placeholder="Mensaje" value={ valoresFormulario.mensajeDetalle } maxLength="250" onChange={ onInputChange } ></textarea>
                                    <label htmlFor="mensajeDetalle">Mensaje</label>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button className="boton" type="button" onClick={ guardaMensaje }>Enviar</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
