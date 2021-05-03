import React from "react";
import { FaLock, FaTruckMoving, FaHeadphonesAlt } from "react-icons/fa";

const SectionContacto = () => {
  return (
    <section>
      <div className="container-fluid bg-primary">
        <div className="row justify-content-around py-5">
          <div className="col-lg-4 text-center">
            <FaTruckMoving className="icon m-auto"></FaTruckMoving>
            <h3>Envíos a todo el Mundo</h3>
            <p>
              Recibe tus prendas favoritas en la comodidad de casa. Hacemos
              envíos internacionales. También puedes recibir tu pedido 100%
              Gratis *Ver terminos y condiciones*
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <FaHeadphonesAlt className="icon"></FaHeadphonesAlt>
            <h3>Atención al cliente las 24 horas</h3>
            <p>
              ¿Necesitas ayuda con tu compra? No te preocupes, nuestro equipo de
              personal shoppers te ayudaran en tu compra. Escribenos o llamanos
              al 954136181
            </p>
            <a className="btn btn-dark" href="#">
              CONTÁCTANOS
            </a>
          </div>
          <div className="col-lg-4 text-center">
            <FaLock className="icon "></FaLock>
            <h3>Compra 100% segura</h3>
            <p>
              Usa el medio de pago que prefieras, nuestras pasarelas son muy
              seguras! ¿No era tu talla? No te preocupes! Te ayudamos realizando
              el cambio a tu talla exacta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContacto;

//la seccion de iconos sociales en movil cambiarlo de lugar al final de la seccion
