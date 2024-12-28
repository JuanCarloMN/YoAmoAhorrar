import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

import { useAuthStore, useForm } from '../../hooks';
import './LoginPage.css';

const camposLogin = {
    loginEmail: '',
    loginPassowrd: ''
}

const camposRegistro = {
    registroNombre: '',
    registroEmail: '',
    registroPassword: '',
    registroPassword2: '',
}

export const LoginPage = () => {

    const { startLogin, startRegister, errorMessage } = useAuthStore();
    
    const { loginEmail, loginPassowrd, onInputChange: onLoginInputChange } = useForm( camposLogin );
    const { registroNombre, registroEmail, registroPassword, registroPassword2,  onInputChange: onRegisterInputChange } = useForm( camposRegistro );

    const loginSubmit = ( event ) => {
        event.preventDefault();
        startLogin( { email: loginEmail, password: loginPassowrd } );
    }

    const registerSubmit = ( event ) => {
        event.preventDefault();
        
        if ( registroPassword !== registroPassword2 ) {
            Swal.fire('Error en registro', 'Las contraseñas no son iguales', 'error');
            return;
        }

        startRegister( { nombre: registroNombre, email: registroEmail, password: registroPassword })
    }

    useEffect( () => {
        if ( errorMessage !== undefined ){
            Swal.fire('Error en la autenticación', errorMessage, 'error' );
        }
    }, [ errorMessage ]);

    return (
        <div className="container login-container ">
            <div className="row g-0 d-flex justify-content-center">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ loginSubmit } className='form-group' >
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="loginEmail"
                                value={ loginEmail }
                                onChange={ onLoginInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="loginPassowrd"
                                value={ loginPassowrd }
                                onChange={ onLoginInputChange }
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <a href='/portafolio' 
                                type="button"
                                className="btnSubmit text-center"
                            >Regresar</a>
                        </div>
                    </form>
                </div>
{/* 
                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ registerSubmit } className='form-group' >
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="registroNombre"
                                value={ registroNombre }
                                onChange={ onRegisterInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="registroEmail"
                                value={ registroEmail }
                                onChange={ onRegisterInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="registroPassword"
                                value={ registroPassword }
                                onChange={ onRegisterInputChange }
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="registroPassword2"
                                value={ registroPassword2 }
                                onChange={ onRegisterInputChange }
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div> */}
            </div>
        </div>
    )
}