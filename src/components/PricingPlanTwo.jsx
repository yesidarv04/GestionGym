import React from "react";
import { Link } from "react-router-dom";

const PricingPlanTwo = () => {
  return (
    <div className="pricing-area-2 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7">
            <div className="title-area text-center">
              <span className="sub-title">Escoge Plan</span>
              <h2 className="sec-title">
                Escoge Cuál Plan se Adapta a Tus Necesidades{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Fixturbo"
                />
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card style2">
              <div className="pricing-card-icon-wrap">
                <div className="pricing-card_icon">
                  <img src="assets/img/icon/picing-icon_2-1.svg" alt="Fixturbo" />
                </div>
                <h4 className="pricing-card_title">Plan Silver</h4>
              </div>
              <div className="pricing-card-details">
                <h3 className="pricing-card_price">15 DÍAS</h3>
                <h6 className="pricing-card_currency">30.000/COP </h6>
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Rutinas de Entrenamiento
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Funcionamiento Todos los Días
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      24 Horas de Servicio
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Plan de Alimentación
                    </li>
                  </ul>
                </div>
                <Link className="btn" to="#">
                  PREGUNTA POR EL PLAN
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card style2 pricing-card-active">
              <div className="pricing-card-icon-wrap">
                <div className="pricing-card_icon">
                  <img src="assets/img/icon/picing-icon_2-2.svg" alt="Fixturbo" />
                </div>
                <h4 className="pricing-card_title">Plan Platinum</h4>
              </div>
              <div className="pricing-card-details">
                <h3 className="pricing-card_price">MENSUAL</h3>
                <h6 className="pricing-card_currency">60.000/COP</h6>
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Rutinas de Entrenamiento
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Funcionamiento Todos los Días
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      24 Horas de Servicio
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Plan de Alimentación
                    </li>
                  </ul>
                </div>
                <Link className="btn" to="#">
                  PREGUNTA POR EL PLAN
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card style2">
              <div className="pricing-card-icon-wrap">
                <div className="pricing-card_icon">
                  <img src="assets/img/icon/picing-icon_2-3.svg" alt="Fixturbo" />
                </div>
                <h4 className="pricing-card_title">Plan Gold  </h4>
              </div>
              <div className="pricing-card-details">
                <h3 className="pricing-card_price">ANUAL</h3>
                <h6 className="pricing-card_currency">200.000/COP</h6>
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Rutinas de Entrenamiento
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Funcionamiento Todos los Días
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      24 Horas de Servicio
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Plan de Alimentación
                    </li>
                  </ul>
                </div>
                <Link className="btn" to="#">
                  PREGUNTA POR EL PLAN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanTwo;
