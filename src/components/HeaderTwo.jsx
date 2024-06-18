import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const HeaderTwo = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById('offcanvas-navigation');
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML('beforebegin', "<span class='mean-expand-class'>+</span>");
    }

    var menuExpand = offCanvasNav.querySelectorAll('.mean-expand-class');
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains('active') === true) {
        this.parentElement.classList.remove('active');
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove('active');
        }
        this.parentElement.classList.add('active');
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener('click', sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  return (
    <header className='nav-header header-layout2'>
      <div className='header-top'>
        <div className='container'>
          <div className='row justify-content-center justify-content-lg-between align-items-center gy-2'>
            <div className='col-auto d-none d-lg-block'>
              <div className='header-logo'>
                <h1 className='hero-title text-white'>
                  <Link to='/'>Forma y Figura</Link>
                </h1>
              </div>
            </div>
            <div className='col-auto'>
              <div className='header-grid-info'>
                <ul>
                  <li>
                    <div className='icon'>
                      <i className='fas fa-clock' />
                    </div>
                    <div className='header-grid-info-details'>
                      <p>Lunes - Viernes:</p>
                      <h6>24 horas</h6>
                    </div>
                    <div className='header-grid-info-details'>
                      <p>Domingos y festivos:</p>
                      <h6>7am - 4pm</h6>
                    </div>
                  </li>
                  <li>
                    <div className='icon'>
                      <i className='fas fa-map-marker-alt' />
                    </div>
                    <div className='header-grid-info-details'>
                      <p>Cra 36 n 86b-94</p>
                      <h6>Medellín, Manrique - San Blas </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sticky-wrapper ${scroll && 'sticky'}`}>
        {/* Main Menu Area */}
        <div className='menu-area'>
          <div className='container'>
            <div className='row align-items-center justify-content-between'>
              <div className='col-auto header-navbar-logo'>
                  <h1 className='text-white'>
                    Forma y Figura
                  </h1>
              </div>
              <div className='col-auto'>
                <nav className='main-menu d-none d-lg-inline-block'>
                  <ul>
                    <li>
                      <NavLink to='/home-2' className={(navData) => (navData.isActive ? 'active' : '')}>
                        Inicio
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/shop' className={(navData) => (navData.isActive ? 'active' : '')}>
                        Tienda
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className='navbar-right d-inline-flex d-lg-none'>
                  <button type='button' className='menu-toggle icon-btn' onClick={mobileMenu}>
                    <i className='fas fa-bars' />
                  </button>
                </div>
              </div>
              <div className='col-auto d-xl-block d-none'>
                <div className='social-links'>
                  <Link to='https://www.facebook.com/formayfigura010/'>
                    <i className='fab fa-facebook-f' />
                  </Link>
                  <Link to='https://www.instagram.com/formayfigurapro/'>
                    <i className='fab fa-instagram' />
                  </Link>
                  <Link to='https://www.twitter.com/'>
                    <i className='fab fa-twitter' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-wrapper  ${active && 'body-visible'}`}>
          <div className='mobile-menu-area'>
            <div className='mobile-logo'>
              <Link to='/'>
                <img src='assets/img/logo.svg' alt='Fixturbo' />
              </Link>
              <button className='menu-toggle' onClick={mobileMenu}>
                <i className='fa fa-times' />
              </button>
            </div>
            <div className='mobile-menu'>
              <ul id='offcanvas-navigation'>
                <li>
                  <NavLink to='/home-2' className={(navData) => (navData.isActive ? 'active' : '')}>
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/shop' className={(navData) => (navData.isActive ? 'active' : '')}>
                    Tienda
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
