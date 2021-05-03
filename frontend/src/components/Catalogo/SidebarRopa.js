import React from "react";
import { Card } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import logo from "../../img/logo.png";

const SidebarRopa = () => {
  const isOpen = true;
  return (
    <div className="row">
      <div className="col-md-3">
        <aside className="bg-primary pb-3 sticky-top">
          <h4 className="ml-2"># / Mujer</h4>
          <div className="d-flex flex-md-column">
            <div className="d-flex flex-column bg-warning mb-3 mx-2 w-75">
              <h4>Talla</h4>

              <ul className="align-self-center">
                <li>_ XS</li>
                <li>_ S</li>
                <li>_ M</li>
                <li>_ L</li>
              </ul>
            </div>

            <div className="d-flex flex-column bg-warning mb-3 mx-2 w-75">
              <h4>Tipo</h4>

              <ul className="align-self-center">
                <li>_ Polo</li>
                <li>_ Pantalon</li>
                <li>_ Pijamas</li>
                <li>_ Bvd</li>
              </ul>
            </div>

            <div className="d-flex flex-column bg-warning mb-3 mx-2 w-75">
              <h4>Material</h4>

              <ul className="align-self-center">
                <li>_ Algodón</li>
                <li>_ Lana</li>
              </ul>
            </div>

            <div className="d-flex flex-column bg-warning mx-2 w-75">
              <h4>Color</h4>

              <ul className="align-self-center">
                <li>_ Beige</li>
                <li>_ Morado</li>
                <li>_ Verde</li>
                <li>_ Crema</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
      <div className="col-md-9">
        <div className="row">
          <div className="col-xl-4 d-flex justify-content-center mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={logo} alt="gaaaaa" />
              <Card.Body>
                <Card.Title>Polo en v</Card.Title>
                <span className="">S/ 89.90</span>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-4 d-flex justify-content-center mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="" alt="gaaaaa" />
              <Card.Body>
                <Card.Title>
                  9 Mantras que te ayudaran a reducir la ansiedad
                </Card.Title>
                <Card.Text>
                  La ansiedad es un tema universal y varios han sido victimas de
                  ésta forma consciente o inconsciente. Tal vez por alguna razón
                  laboral, familiar, te...
                </Card.Text>
                <small>26 DE JUNIO DEL 2017</small>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-4 d-flex justify-content-center mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="" alt="gaaaaa" />
              <Card.Body>
                <Card.Title>
                  9 Mantras que te ayudaran a reducir la ansiedad
                </Card.Title>
                <Card.Text>
                  La ansiedad es un tema universal y varios han sido victimas de
                  ésta forma consciente o inconsciente. Tal vez por alguna razón
                  laboral, familiar, te...
                </Card.Text>
                <small>26 DE JUNIO DEL 2017</small>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-4 d-flex justify-content-center">
            <Card style={{ width: "17rem" }}>
              <Card.Img variant="top" src="" alt="gaaaaa" />
              <Card.Body>
                <Card.Title>
                  9 Mantras que te ayudaran a reducir la ansiedad
                </Card.Title>
                <Card.Text>
                  La ansiedad es un tema universal y varios han sido victimas de
                  ésta forma consciente o inconsciente. Tal vez por alguna razón
                  laboral, familiar, te...
                </Card.Text>
                <small>26 DE JUNIO DEL 2017</small>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarRopa;
