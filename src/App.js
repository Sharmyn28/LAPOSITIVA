import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Sale from './components/Sale';
import Aution from './components/Aution';
import {connect} from 'redux-zero/react';
import { Menu } from "./components/Home";

const App = ({successLogin, user}) => {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/home" render={() => <Home />}/>
          <Route exact path="/logIn" render={() => <LogIn successLogin={successLogin}/>}/>
          <Route exact path="/signUp" render={() => <SignUp successLogin={successLogin}/>}/>
          <Route exact path="/sale" render={() => <Sale />}/>
          <Route exact path="/aution" render={() => <Aution />}/>
          <Route render={() => <Redirect  to={'/home'} />}/>
        </Switch>

      </div>
    </BrowserRouter>
  )
}

const mapToProps=({successLogin, user})=>({successLogin, user})
export default connect(mapToProps)(App)
