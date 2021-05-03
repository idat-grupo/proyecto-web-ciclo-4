import React from "react";
import prod from "../../img/t-shirt.jpg";

const SectionProducto = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg mr-5">
          <img src={prod} className="img-fluid" alt="Responsive image." />
        </div>
        <div className="col-lg">
          <h3>Zapatillas</h3>
          <h3>SKU: 7080236521</h3>
          <hr />
          <div className="d-flex justify-content-between">
            <h4>Online</h4>
            <p>S/. 89.90</p>
          </div>

          <hr />
          <div className="d-flex justify-content-around mb-2">
            <div className="w-25 d-flex align-items-center">
              <button className="btn btn-light">-</button>
              <div> 1 </div>
              <button className="btn btn-light">+</button>
            </div>
            <button className="btn-dark w-75">AGREGAR AL CARRITO</button>
          </div>
          <button className="btn btn-primary btn-block">COMPRAR AHORA</button>
          <br />
          <h4>Descripción</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ab
            ducimus pariatur error accusamus illum qui nemo natus vel. Adipisci?
          </p>
          <h4>Características</h4>
          <ul>
            <li>Color : Rojo</li>
            <li>Material: Algodón</li>
            <li>Tipo: Pijamas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionProducto;
