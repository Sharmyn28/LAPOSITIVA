import React from 'react';
import '../styles/home.css';
import { Grid, Col, Row, Navbar, Carousel, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import oferta1 from '../img/oferta1.jpg';
import oferta2 from '../img/oferta2.jpg';
import oferta3 from '../img/oferta3.gif';
import { signOut } from "../actions/actions";

export const Menu = ({ successLogin, user }) => {
    return (
        <Navbar inverse collapseOnSelect id='navbar-inverse'>
            <Navbar.Header>
                <Navbar.Brand>
                    <NavLink to='/home'> TAM </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem><NavLink to='/sale'> Ventas </NavLink></NavItem>
                    <NavItem><NavLink to='/aution'> Subasta </NavLink></NavItem>
                    <NavItem><NavLink to='/process'> Proceso </NavLink></NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem>{ successLogin == true ? <a>Bienvenido {user.name}</a> : <NavLink to='/logIn'>Log In</NavLink>}</NavItem>
                    <NavItem>{ successLogin == true ? <a onClick={()=> signOut ()}>Sign Out</a> : <NavLink to='/signUp'>Sign Up</NavLink>}</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Slide = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img width={700} height={500} alt="900x500" src={oferta1} />    
            </Carousel.Item>
            <Carousel.Item>
                <img width={700} height={500} alt="900x500" src={oferta2} />
            </Carousel.Item>
            <Carousel.Item>
                <img width={700} height={500} alt="900x500" src={oferta3} />
            </Carousel.Item>
        </Carousel>
    )
}

const Timmer = () => {
    return(
        <div>
          timmer  
        </div>
    )
}

const Home = () => {
    return (
        <Grid fluid>
            <Grid>
                <Row>
                    <Col lgOffset={2} mdOffset={2} smOffset={2} xsOffset={2} xs={7} sm={7} lg={7} md={7}>
                        <Slide />
                    </Col>
                </Row>

            </Grid>
        </Grid>
    )
}


export default Home;