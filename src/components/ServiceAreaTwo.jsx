import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaTwo = () => {
  return (
    <div className="service-area-2 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Nuestros Servicios</span>
              <h2 className="sec-title">
                Confía en Forma y Figura Para tu Crecimiento Físico{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Fixturbo"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/324755829_6648691025159282_8173826934543253497_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_QsLVKZlEokQ7kNvgHkzWww&_nc_ht=scontent.feoh1-1.fna&oh=00_AYDJ5g2bSXxZKiwRMflae8J7lbvSJdG4vdBA7jns4CSZ4Q&oe=66768C59)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-1.svg" alt="Fixturbo" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service-details">Asesoramiento Personalizado</Link>
                  </h4>
                  <p className="service-card_text">
                    La satisfacción en tus entrenamientos es esencial para
                    nosotros, por eso te ayudamos a tomar las mejores decisiones.{" "}
                  </p>
                </div>
              </div>
              <Link to="#" className="btn style4">
                Leer más <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/359700800_799505988547804_1353747279026764361_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-NPGtYeCVgEQ7kNvgEOfAjL&_nc_ht=scontent.feoh1-1.fna&oh=00_AYBw_akzzY-4zBpjs4g3SZpE-8hlnEqDPX6W4IiMts3YpQ&oe=6676A9D3)",
                  backgroundPosition: 'center',
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-2.svg" alt="Fixturbo" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="#">Las Mejores Maquinas</Link>
                  </h4>
                  <p className="service-card_text">
                    Las máquinas que tenemos son las mejores, para cada
                    tipo de ejercicio que necesites.{" "}
                  </p>
                </div>
              </div>
              <Link to="#" className="btn style4">
                Leer más <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/328536315_574757808012509_2932356917621471547_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JRFUDwiga5cQ7kNvgE8wvcB&_nc_ht=scontent.feoh1-1.fna&oh=00_AYCFZuEgOYnWsSK5SwyhgNmFCwnGH7z8xLw4IJvrAYVgGw&oe=667695F6)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-3.svg" alt="Fixturbo" />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="/service-details">Spinning</Link>
                  </h4>
                  <p className="service-card_text">
                    Nuestras clases de Spinning grupales son las mejores,
                    no puedes perderte de esta gran experiencia.{" "}
                  </p>
                </div>
              </div>
              <Link to="/service-details" className="btn style4">
                Leer más <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaTwo;
