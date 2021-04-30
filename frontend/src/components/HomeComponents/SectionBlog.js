import React from "react";
import { Button, Card } from "react-bootstrap";
import img1 from "../../img/hero-1.jpg";
import img2 from "../../img/hero-2.jpg";
import img3 from "../../img/hero-3.jpg";

const SectionBlog = () => {
  return (
    <section>
      <div className="container-fluid my-4">
        <h2 className="mb-4 ml-4">Lee nuestro blog: </h2>
        <div className="row justify-content-center">
          <div className="col-xl-4 d-flex justify-content-center">
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={img1} />
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
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={img2} />
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
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={img3} />
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
    </section>
  );
};

export default SectionBlog;
