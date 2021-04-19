import React from "react";
import { Form, Button, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <CardGroup className="mt-4">
      <Card.Body></Card.Body>
      <Card className="mx-3" style={{ borderRadius: '8px' }}>
        <Card.Header style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px',backgroundColor:'#FF9800',textAlign: "center" ,  color: 'white', fontSize:'20px'}}>Login</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Email" />
              <Form.Text className="text-muted">
                <small>No compartiremos tu información con terceros.</small>
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recordarme" />
            </Form.Group>
            <Form.Group controlId="formBasicRegister">
                <Form.Label className="text-muted"><small><Link to="/register">Crear una cuenta</Link></small></Form.Label>
            </Form.Group>
            <Button variant="outline-info" type="submit" block>
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Card.Body></Card.Body>
    </CardGroup>
  );
};

export default Login;
