import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const LoginForm = () => {
  return (
    <Container className="my-5 form-container">
      <Form className="d-flex flex-column align-items-center form">
        <h2 className="mb-4">Ingresar</h2>
        <Form.Group controlId="formBasicEmail" className="w-75">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            type="email"
            placeholder="correo electrónico"
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="w-75">
          <Form.Control
            type="password"
            placeholder="contraseña"
            className="form-input"
          />
        </Form.Group>

        <Button variant="dark" type="submit" block className="w-75 form-button">
          INGRESAR
        </Button>
        <a href="#" className="mt-3">
          Crear una cuenta
        </a>
        <a href="#" className="mt-3">
          Volver al inicio
        </a>
      </Form>
    </Container>
  );
};

export default LoginForm;
