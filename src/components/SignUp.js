import React from 'react';
import './SignUp.css';
import { NavLink, Redirect } from 'react-router-dom';
import {signUp} from '../actions/actions'

const SignUp = ({ successLogin }) => {
    console.log('successLogin', successLogin)
    return (
        <div className='secction-signUp'>
            {
                successLogin && <Redirect to='/home' />
            }
            <div className="form">
                <ul className="tab-group">
                    <li className="tab active">
                        <a >Regístrate</a>
                    </li>
                    <li className="tab">
                        <NavLink to='/logIn'>Inicia Sesión</NavLink>
                    </li>
                </ul>
                <div className="tab-content">
                    <form onSubmit={(e) => {
                        e.preventDefault;
                        console.log('estsa en signUp')
                        signUp(this.nameInputRef.value, this.lastInputRef.value, this.emailInputRef.value, this.passwordInputRef.value);
                    }}>
                        <div className="top-row">
                            <div className="field-wrap">
                                <input type="text" required autoComplete="off" ref={(e) => {this.nameInputRef = e}} placeholder='Nombres*'/>
                            </div>
                            <div className="field-wrap">
                                <input type="text" required autoComplete="off" ref={(e) => {this.lastInputRef = e}} placeholder='Apellidos*'/>
                            </div>
                        </div>
                        <div className="field-wrap">
                            <input type="email" required autoComplete="off" ref={(e) => {this.emailInputRef = e}} placeholder='Correo Electrónico*' />
                        </div>
                        <div className="field-wrap">
                            <input type="password" required autoComplete="off" ref={(e) => {this.passwordInputRef = e}} placeholder='Contraseña*'/>
                        </div>
                        <button type="submit" className="button button-block">Regístrate</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;