import React from 'react';
import './SignUp.css'
const SignUp = ({successLogin}) => {
    return (
        <div className='secction-signUp'>  
            <div className="form">
                <ul className="tab-group">
                    <li className="tab active">
                        <a >Regístrate</a>
                    </li>
                    <li className="tab">
                        <a>Inicia Sesión</a>
                    </li>
                </ul>
                <div className="tab-content">
                        <form>
                            <div className="top-row">
                                <div className="field-wrap">
                                    <label>
                                        Nombres<span className="req">*</span>
                                    </label>
                                    <input type="text" required autocomplete="off" ref={e => this.nameInputRef = e} />
                                </div>
                                <div className="field-wrap">
                                    <label>
                                        Apellidos<span className="req">*</span>
                                    </label>
                                    <input type="text"required autocomplete="off" ref={e => this.lastInputRef = e} />
                                </div>
                            </div>
                            <div className="field-wrap">
                                <label>
                                Dirección de correo electrónico<span className="req">*</span>
                                </label>
                                <input type="email"required autocomplete="off" ref={e => this.emailInputRef = e} /> 
                            </div>
                            <div className="field-wrap">
                                <label>
                                Contraseña<span className="req">*</span>
                                </label>
                                <input type="password"required autocomplete="off" ref={e => this.passwordInputRef = e} />
                            </div>
                            <button type="submit" className="button button-block">Regístrate</button>
                        </form>
                </div>
            </div> 
        </div>
    )
}

export default SignUp;