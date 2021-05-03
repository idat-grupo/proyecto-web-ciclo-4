import React from "react";
import logo from "../../img/logo.png";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import { FaBeer } from 'react-icons/fa';
import { BsPeopleCircle, BsSearch, BsBag } from "react-icons/bs";

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}

//import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="ml-auto justify-content-left">
        <Navbar.Brand href="#home">
          {/* <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          /> */}
          {" "} BBMUTTI
        </Navbar.Brand>

        <Navbar className="ml-auto justify-content-center" activeKey="/home" style={{ fontSize: "1.25rem"}}>
          <Nav.Item>
            <Nav.Link href="/home" >Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" >Ropa</Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link eventKey="link-2">Accesorios</Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link eventKey="link-2">Sobre Nosotros</Nav.Link>
          </Nav.Item>
        </Navbar>

        <Nav className="ml-auto justify-content-end">
          <Nav.Item className="mx-3 text-white" style={{ fontSize: "1.4rem" }}>
            <BsSearch></BsSearch>
          </Nav.Item>
          <Nav.Item className="mx-3 text-white" style={{ fontSize: "1.4rem" }}>
            <a href="/carrito"><BsBag></BsBag></a>
          </Nav.Item>
          <a href="/login" className="btn btn-light ml-3">
            Cuenta
          </a>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
