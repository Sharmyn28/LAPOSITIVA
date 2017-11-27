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

const App = ({successLogin}) => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/home" render={() => <Home />}/>
          <Route exact path="/logIn" render={() => <LogIn />}/>
          <Route exact path="/signUp" render={() => <SignUp />}/>
          <Route exact path="/sale" render={() => <Sale />}/>
          <Route exact path="/aution" render={() => <Aution />}/>
          <Route render={() => <Redirect  to={'/home'} />}/>
        </Switch>

      </div>
    </BrowserRouter>
  )
}

const mapToProps=({successLogin})=>({successLogin})
export default connect(mapToProps)(App)
