import React from 'react'
import logo from '../../img/logo.png'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container, Row, Col} from 'react-bootstrap'
//import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            React Bootstrap
            </Navbar.Brand>
            <Nav className="ml-auto">
                <div className="text-white ml-5">Cart</div>
                <a href="" className="btn btn-primary ml-5">Sign in</a>
            </Nav>
            
        </Navbar>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img
                alt="logo"
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Categorías</Nav.Link>
                <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
                <Nav.Link href="#link">Contáctanos</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                
                <Form inline className="m-auto">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                
            </Navbar.Collapse>
        </Navbar>

        
        </>
    )
}

export default Header
