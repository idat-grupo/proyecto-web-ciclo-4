import React from "react";
import { Form, Button, Card, CardGroup } from "react-bootstrap";

const Register = () => {
  return (
    <CardGroup className="mt-4">
      <Card.Body></Card.Body>
      <Card className="mx-3" style={{ borderRadius: '8px' }}>
        <Card.Header style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px',textAlign: "center" , backgroundColor:'#FF9800', color: 'white', fontSize:'20px'}}>
          Registrarme
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Email" />
              <Form.Text className="text-muted">
                No compartiremos tu información con terceros.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirmar contraseña"
              />
            </Form.Group>
            <Button variant="outline-warning" type="submit" block>
                Registrar
              </Button>
          </Form>
        </Card.Body>
      </Card>

      <Card.Body></Card.Body>
    </CardGroup>
  );
};

export default Register;
