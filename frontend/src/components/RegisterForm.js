import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const RegisterForm = () => {
  return (
    <Container className="my-5 form-container">
      <Form className="d-flex flex-column align-items-center form">
        <h2 className="mb-4">Crea tu cuenta</h2>
        <Form.Group controlId="formBasicPassword" className="w-75">
          <Form.Control
            type="text"
            placeholder="nombre"
            className="form-input"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="w-75">
          <Form.Control
            type="password"
            placeholder="apellido"
            className="form-input"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="w-75">
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
        <a href="#" className="mt-4">
          Volver al inicio
        </a>
      </Form>
    </Container>
  );
};

export default RegisterForm;
