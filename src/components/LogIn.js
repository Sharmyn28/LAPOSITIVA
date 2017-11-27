import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

const LogIn = ({ successLogin }) => {
    return (
        <div className='secction-logIn'>
            {
                successLogin && <Redirect to='/home' />
            }
            <div className="form">
                <ul className="tab-group">
                    <li className="tab">
                        <NavLink to='/signUp'>Regístrate</NavLink>
                    </li>
                    <li className="tab active">
                        <a>Inicia Sesión</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <form onSubmit={(e) => {
                        e.preventDefault;
                    }}>
                        <div className="field-wrap">
                            <input type="email" required autoComplete="off" ref={e => this.emailInputRef = e} placeholder='Correo Electrónico*'/>
                        </div>
                        <div className="field-wrap">
                            <input type="password" required autoComplete="off" ref={e => this.passwordInputRef = e} placeholder='Contraseña*'/>
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