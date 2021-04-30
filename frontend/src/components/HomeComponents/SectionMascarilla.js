import React from "react";
import mascarillas from "../../img/mascarillas.jpg";
import { Jumbotron, Button } from "react-bootstrap";

const SectionMascarilla = () => {
  return (
    <section>
      <Jumbotron>
        <div className="row text-center py-4">
          <div className="col-lg-7 d-flex flex-column py-4">
            <h1>Especial de Mascarillas</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="warning" className="text-danger">
                Ver Mascarillas
              </Button>
            </p>
          </div>
          <div className="col-lg-5">
            <img src={mascarillas} className="img-fluid" />
          </div>
        </div>
      </Jumbotron>
    </section>
  );
};

export default SectionMascarilla;
