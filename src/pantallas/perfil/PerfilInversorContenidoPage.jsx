import { useState } from "react";
import Swal from "sweetalert2";
import { perfilInicial } from "../../helpers";
import { usePerfilStore } from "../../hooks";
import { PerfilInversorCuestionarioPage } from "./PerfilInversorCuestionarioPage";
import { PerfilInversorFormularioPage } from "./PerfilInversorFormularioPage";

export const PerfilInversorContenidoPage = () => {

    const [ valoresFormulario, setValoresFormulario ] = useState( perfilInicial );
    const [ claseNombre, setClaseNombre ] = useState('');
    const [ claseEmail, setClaseEmail ] = useState('');
    const [ claseTelefono, setClaseTelefono ] = useState('');
    const { startSalvarPerfil } = usePerfilStore();

    const resultado = () => {
        let lasRespuestas = valoresFormulario.perfilRespuestas;
        let resultado = 0;
        let perfil = '';
        let descripcion = '';
        let todoBien = true;

        lasRespuestas.map( ( respuesta ) => {
            if ( respuesta === 0 ) {
                Swal.fire({ title: 'Completa el cuestionario', html: 'Por favor responde todas las preguntas <br>para obtener tu resultado', icon: 'error', confirmButtonColor: '#542052' });
                todoBien = false;
            };
            resultado += respuesta;
        });
        if ( !todoBien ) return;

        if ( resultado >= 8 && resultado <= 12 ) {
            perfil = 'Protector del Patrimonio';
            descripcion = 'Prefieres seguridad y certeza antes que asumir riesgos. Para ti, lo mejor son estrategias que protejan tu dinero y lo hagan crecer de forma estable.';
        } else if ( resultado >= 13 && resultado <= 18 ) {
            perfil = 'Equilibrado Estratégico';
            descripcion = "Buscas un balance: seguridad pero también crecimiento. Este perfil combina inversiones seguras con otras de mayor potencial."
        } else if ( resultado >= 19 && resultado <= 24 ) {
            perfil = 'Visionario de Alto Potencial';
            descripcion = "Tienes tolerancia al riesgo y miras a largo plazo. Te interesan estrategias con rendimientos más altos aunque impliquen altibajos."
        }

        setValoresFormulario({
            ...valoresFormulario,
            [ "perfilResultado" ]: perfil
        }); 

        Swal.fire({ title: perfil, html: descripcion, icon: 'success', confirmButtonColor: '#542052'});
    }

    const onRespuestaChange = ({ target }) => {
        let respuesta = target.name.substring(8);
        let lasRespuestas = valoresFormulario.perfilRespuestas;
        lasRespuestas[respuesta - 1] = parseInt(target.value);
        setValoresFormulario({
            ...valoresFormulario,
            [ "perfilRespuestas" ]: lasRespuestas
        });
    }
        
    const onInputChange = ({ target }) => {

        if (target.name === 'perfilPrivacidad') {
            setValoresFormulario({
                ...valoresFormulario,
                [ target.name ]: target.checked
            });
        } else {
            setValoresFormulario({
                ...valoresFormulario,
                [ target.name ]: target.value
            });
        }
        
        if ( target.name === 'perfilNombre' && target.value.length > 0 )
            setClaseNombre('');
        if ( target.name === 'perfilEmail' && target.value.length > 0 )
            setClaseEmail('');
        if ( target.name === 'perfilTelefono' && target.value.length > 0 )
            setClaseTelefono('');
        if ( target.name === 'perfilPrivacidad' && target.value )
            setClaseTelefono('');
    }

    const enviarPropuesta = async() => {
        let lasRespuestas = valoresFormulario.perfilRespuestas;
        let todoBien = true;
        setClaseNombre('');
        setClaseEmail('');
        setClaseTelefono('');
        
        lasRespuestas.map( ( respuesta ) => {
            if ( respuesta === 0 ) {
                Swal.fire({ title: 'Completa el cuestionario', html: 'Por favor primero responde el cuestionario <br>antes de solicitar tu propuesta', icon: 'error', confirmButtonColor: '#542052' });
                todoBien = false;
            };
        });
        if ( !todoBien ) return;
        
        if ( valoresFormulario.perfilResultado.length === 0 ) {
            Swal.fire({ title: 'Información incorrecta', html: 'Es necesario obtener el resultado <br>de tu perfil antes de enviar el mensaje<br><br>Da clic en el botón "Resultado"', icon: 'error', confirmButtonColor: '#542052' });
            setClaseNombre('is-invalid');
            return;
        }
        if ( valoresFormulario.perfilNombre.length === 0 ) {
            Swal.fire({ title: 'Información incorrecta', html: 'Es necesario proporciones tu nombre <br>antes de enviar el mensaje', icon: 'error', confirmButtonColor: '#542052' });
            setClaseNombre('is-invalid');
            return;
        }
        if ( !valoresFormulario.perfilEmail.includes('@') && valoresFormulario.perfilEmail.length > 0) {
            Swal.fire({ title: 'Información incorrecta', html: 'El correo electrónico proporcionado no es válido', icon: 'error', confirmButtonColor: '#542052' });
            setClaseEmail('is-invalid');
            return;
        }
        if ( valoresFormulario.perfilEmail.length === 0 && valoresFormulario.perfilTelefono.length === 0 ) {
            Swal.fire({ title: 'Información incorrecta', html: 'Es necesario proporciones tu eMail <br>o Teléfono antes de enviar el mensaje', icon: 'error', confirmButtonColor: '#542052' });
            setClaseEmail('is-invalid');
            setClaseTelefono('is-invalid');
            return;
        }
        if ( !valoresFormulario.perfilPrivacidad ) {
            Swal.fire({ title: 'Información incorrecta', html: 'Es necesario aceptes el aviso de privacidad <br>antes de enviar el mensaje', icon: 'error', confirmButtonColor: '#542052' });
            return;
        }
        setValoresFormulario({
            ...valoresFormulario,
            ['perfilFecha']: new Date()
        });

        await startSalvarPerfil( valoresFormulario )
        setValoresFormulario( perfilInicial );
        Swal.fire({ title: "Perfil de inversión",  html: "Los datos han sido enviados de forma exitosa. <br><br>Pronto recibirás tu propuesta personalizada <br>de acuerdo a tu perfil: <br><br><b>" + valoresFormulario.perfilResultado + "</b>",  icon: "success",  confirmButtonColor: '#542052' });
    }

    return (
        <div className="container">

            {/* Encabezado */}
            <div className="row d-flex align-items-center px-lg-4" id="">
                <div className="col">
                    <h4>¿Tienes identificado tu estilo o perfil financiero? ¿Sabes si tu personalidad financiera se inclina más hacia la toma de riesgos o hacia la estabilidad?</h4>
                    <p>Te invitamos a que realices el siguiente test para averiguar qué tipo de perfil inversor te define</p>
                </div>
            </div>
            <hr />

            <div className="row d-flex justify-content-center my-4 p-2 p-lg-0">
                {/* Preguntas */}
                <div className="col-lg-8 col-12 info">
                    <PerfilInversorCuestionarioPage onRespuestaChange={ onRespuestaChange } resultado={ resultado } />
                </div>

                {/* Formulario */}
                <div className="col-lg-4 col-12 info">
                    <PerfilInversorFormularioPage onInputChange={ onInputChange } valoresFormulario={ valoresFormulario } enviarPropuesta={ enviarPropuesta } claseNombre={ claseNombre } claseEmail={ claseEmail } claseTelefono={ claseTelefono } />
                </div>
            </div>

            {/* Footer */}
            <div className="text-center p-0 align-items-center">
                <hr />
                <img src="../img/solo-logo.png" alt="Perla Maldonado" className="logo-footer"/>
                <br />
                <span className="fw-lighter">2025</span>
            </div>
        </div>
    )
}
