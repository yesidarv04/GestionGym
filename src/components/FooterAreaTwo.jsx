import React from "react";
import { Link } from "react-router-dom";

const FooterAreaTwo = () => {
  return (
    <footer
      className="footer-wrapper footer-layout2"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg2-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget widget-about">
                <h3 className="widget_title">Acerca de Nosotros</h3>
                <p className="footer-text mb-30">
                  Somos un negocio dedicado a ayudar a las personas con su fisico.
                </p>
                <div className="social-btn style3">
                  <Link to="https://www.instagram.com/formayfigurapro/" tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://twitter.com/" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="https://www.facebook.com/formayfigura010" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Páginas</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/home-2">Inicio</Link>
                    </li>
                    <li>
                      <Link to="/shop">Tienda</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Ubícanos</h3>
                <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Dirección</p>
                      <h6>
                      Cra 36 n 86b-94, <br />Medellín, Manrique - San Blas
                        <p />
                      </h6>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contáctanos</h3>
                <div className="widget-contact2">
                  
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Whatsapp</p>
                      <h6>
                        <Link to="tel:888123456765">+57 300-000-000</Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Correo Electrónico</p>
                      <h6>
                        <Link to="mailto:infoname@mail.com">
                          abcd@gmail.com
                        </Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link to="#">Gmanage</Link> 2024 | All Rights Reserved
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link to="tel:3008662798">Contáctanos</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaTwo;
