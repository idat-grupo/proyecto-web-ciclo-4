import React from "react";
import {
  FaBabyCarriage,
  FaLocationArrow,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCcDinersClub,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-success">
        <div className="container-fluid">
          <div className="row pt-3">
            <div className="col-lg-3 text-center">
              <FaBabyCarriage className="logo-footer my-2" />
              <h4 className="mt-3">Contacto</h4>
              <p>
                <FaLocationArrow className="mr-3" />
                Jr. Eleazar Blanco 350 - Pueblo Libre
              </p>
              <p>atencionalcliente@bbmutti.com.pe</p>
              <div className="mt-4">
                <h4 className="ml-5 mr-5">Síguenos en</h4>
                <ul className="d-flex mt-4 ml-5 mr-5">
                  <li>
                    <FaFacebook className="mx-4 social-icon" />
                  </li>
                  <li>
                    <FaInstagram className="mx-4 social-icon" />
                  </li>
                  <li>
                    <FaTwitter className="mx-4 social-icon" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 text-center">
              <h4>Atención al cliente</h4>

              <ul className="mt-4">
                <p>Como comprar</p>
                <p>Formas de pago</p>
                <p>Envíos</p>
                <p>Cambios y Devoluciones</p>
                <p>Tallas</p>
                <p>Preguntas frecuentes(FAQ)</p>
                <p>Contáctanos</p>
                <p>Libro de Reclamaciones</p>
              </ul>
            </div>
            <div className="col-lg-3 text-center">
              <h4>Sobre nosotros</h4>

              <ul className="mt-4">
                <p>Quienes somos</p>
                <p>Nuestras tiendas</p>
                <p>Trabaja con nosotros</p>
              </ul>
            </div>
            <div className="col-lg-3 text-center">
              <h4>Comunidad</h4>

              <ul className="mt-4">
                <p>Regala una Gift Card!</p>
                <p>Nuestros Clientes Felices</p>
                <p>Blog</p>
              </ul>
            </div>
          </div>
        </div>
        <hr
          className="mx-5"
          style={{ borderWidth: "4px", borderColor: "gold" }}
        />
        <div className="row text-center py-4">
          <div className="col-4">
            <FaCcVisa className="card-icon" />
          </div>
          <div className="col-4">
            <FaCcMastercard className="card-icon" />
          </div>
          <div className="col-4">
            <FaCcDinersClub className="card-icon" />
          </div>
        </div>
      </footer>
      <div className="bg-dark text-white">
        <div className="container text-center py-3">
          BBMutti 2021 &copy; Todos los derechos reservados
        </div>
      </div>
    </>
  );
};

export default Footer;
