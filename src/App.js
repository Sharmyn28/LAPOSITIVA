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
import Process from "./components/process";

const App = ({successLogin, user, selectedSection, products}) => {
  return (
    <BrowserRouter>
      <div>
        <Menu successLogin={successLogin} user={user}/>
        <Switch>
          <Route exact path="/home" render={() => <Home />}/>
          <Route exact path="/logIn" render={() => <LogIn successLogin={successLogin}/>}/>
          <Route exact path="/signUp" render={() => <SignUp successLogin={successLogin}/>}/>
          <Route exact path="/sale" render={() => <Sale selectedSection={selectedSection} products={products}/>}/>
          <Route exact path="/aution" render={() => <Aution products={products}/>}/>
          <Route exact path="/process" render={() => <Process />} />
          <Route render={() => <Redirect  to={'/home'} />}/>
        </Switch>

      </div>
    </BrowserRouter>
  )
}

const mapToProps=({successLogin, user, selectedSection, products})=>({successLogin, user, selectedSection, products})
export default connect(mapToProps)(App)
