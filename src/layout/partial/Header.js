import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import './Header.scss'

function Header() {
    return (
        <Navbar bg="info" varient="dark" expand="md">
            <Container>
            <Navbar.Brand><img className="logo" src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Dashboard</Nav.Link>
                    <Nav.Link href="/">Ticket</Nav.Link>
                    <Nav.Link href="/">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;