import React from "react";

import { Table, Image, Row, Col, Container } from "react-bootstrap";

import poloverde from "../../img/ropa-mujer/polo-verde-corto-mujer.jpg";
import polerarayas from "../../img/ropa-mujer/polera-rayas-mujer.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Carrito = () => {
  const productos = [["Polo talla S", "S/59.90", "1"]];
  return (
    <IconContext.Provider value={{ size: "0.5em" }}>
      <div className="mx-5 my-3 ml-auto justify-content-center">
        <h2 className="text-center mt-5">Carrito de compras</h2>
        <Container>
          <Col></Col>
          <Col>
            <Table responsive className="table-light">
              <thead>
                <tr>
                  <th>#</th>
                  {/* {Array.from({ length: 12 }).map((_, index) => (
              <th key={index}>Producto</th>
            
            ))} */}
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td xs={2} md={3}>
                    1
                  </td>
                  <td xs={4} md={3}>
                    <tr>
                      <td>
                        <Image
                          rounded
                          src={poloverde}
                          style={{ height: "171px", width: "180px" }}
                        />
                      </td>
                      <td>
                        <h6>Polo verde</h6>
                        <a>Talla S</a>
                      </td>
                    </tr>
                  </td>
                  <td xs={2} md={3}>
                    S/75.00
                  </td>
                  <td xs={2} md={3}>
                    <tr>
                      <td>
                        <button className="btn btn-outline-dark">
                          <FaMinus></FaMinus>
                        </button>
                      </td>
                      <td>
                        <p className="my-2">1</p>
                      </td>
                      <td>
                        <button className="btn btn-outline-dark">
                          <FaPlus />
                        </button>
                      </td>
                    </tr>
                    <tr className="justify-content-center">
                      <small className="text-muted" size="sm">
                        Quitar
                      </small>
                    </tr>
                  </td>
                  <td xs={2} md={3}>
                    S/75.00
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td xs={4} md={3}>
                    <tr>
                      <td>
                        <Image
                          rounded
                          src={polerarayas}
                          style={{ height: "171px", width: "180px" }}
                        />
                      </td>
                      <td>
                        <h6>Polera rayas</h6>
                        <a>Talla M</a>
                      </td>
                    </tr>
                  </td>
                  <td>S/149.00</td>
                  <td xs={2} md={3}>
                    <tr>
                      <td>
                        <button className="btn btn-outline-dark">
                          <FaMinus></FaMinus>
                        </button>
                      </td>
                      <td>
                        <p className="my-2">1</p>
                      </td>
                      <td>
                        <button className="btn btn-outline-dark">
                          <FaPlus />
                        </button>
                      </td>
                    </tr>
                    <tr className="justify-content-center">
                      <small className="text-muted" size="sm">
                        Quitar
                      </small>
                    </tr>
                    
                  </td>
                  <td>S/149.00</td>
                </tr>
                {/* <tr>
                <td>3</td>
                <td>Mascarilla Azul Adulto</td>
                <td>S/14.90</td>
                <td>1</td>
                
              </tr> */}
              </tbody>
            </Table>
          </Col>
          <Col></Col>
          <hr></hr>
          <tr>
            <td>Subtotal</td>
            <td></td>
            <td></td>
            <td>S/224.00</td>
          </tr>
          <div>
            <a className="text-info mr-3" role="button">añadir más productos</a>
            <a className="btn btn-dark">Finalizar compra</a>
          </div>
        </Container>
      </div>
    </IconContext.Provider>
  );
};

export default Carrito;
