import React from 'react';
import '../styles/home.css';
import { Grid, Col, Row, Navbar, Carousel, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Col lgOffset={9} lg={3} md={3} sm={3} xs={3} className="nav">
            <ul>
                {/*<li>
                    <a class="logo" href="http://andytran.me">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/logo_(1).svg" />
                    </a>
                </li>
                <li>
                    <NavLink to="/sale"> Ventas</NavLink>
                </li>
                <li>
                    <NavLink to="/auction">Subasta</NavLink>
                </li>*/}
                <li>
                    <NavLink to='/logIn'>Log In</NavLink>
                </li>
                <li>
                    <NavLink to='/signUp'>Sign Up</NavLink>
                </li>

                <li>
                    <a><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
                </li>
            </ul>
        </Col>
    )
}


const Menu = () =>{
    return(
        <Nav bsStyle="pills">
            <NavItem href="/home">NavItem 1 content</NavItem>
            <NavItem title="Item">NavItem 2 content</NavItem>
            <NavItem >NavItem 3 content</NavItem>
        </Nav>
    )
}

const Slide = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

const Home = () => {
    return (
        <Grid fluid>
            <Grid>
                <Row>
                    <Menu />
                </Row>
            </Grid>
        </Grid>
    )
}

export default Home;