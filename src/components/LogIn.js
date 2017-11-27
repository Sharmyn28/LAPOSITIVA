import React from 'react';

const LogIn = ({ successLogin }) => {
    return (
        <div className='secction-logIn'>  
        <div className="form">
            <ul className="tab-group">
                <li className="tab">
                    <a>Regístrate</a>
                </li>
                <li className="tab active">
                    <a>Inicia Sesión</a>
                </li>
            </ul>
            <div className="tab-content">
                    <form action="/" method="post">
                        <div className="field-wrap">
                            <label>
                                Correo Electrónico<span className="req">*</span>
                            </label>
                            <input type="email" required autocomplete="off" />
                        </div>
                        <div className="field-wrap">
                            <label>
                                Contraseña<span className="req">*</span>
                            </label>
                            <input type="password" required autocomplete="off" />
                        </div>
                        <p className="forgot"><a>¿Olvidaste tu contraseña?</a></p>
                        <button className="button button-block">Inicia Sesión</button>
                    </form>
            </div>
        </div> 
    </div>
    )
}

export default LogIn;