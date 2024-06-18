import React from 'react';
import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';
const AboutTwo = () => {
  return (
    <div className='space-top'>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-7 col-xl-6'>
            <div className='about-thumb2 mb-40 mb-xl-0'>
              <div className='about-img-1'>
                <img src='https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/301963492_596765775488494_1301953712273771697_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_XOazi6pRIMQ7kNvgEU-lNK&_nc_ht=scontent.feoh1-1.fna&oh=00_AYAm5WdpdrGDKMBczQJbwj_obrNT4tcxtUP_uW5sNLlSSQ&oe=6676A733' alt='Fixturbo' style={{ width: '471px', height: '325px' }} />
              </div>
              <div className='about-img-2'>
                <img src='https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/244558290_2044813149006345_321989715602335357_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AyMphoHm8hQQ7kNvgHyvwI-&_nc_ht=scontent.feoh1-1.fna&oh=00_AYBXaIsjRILcYkM3OOP6MG5kELDmTrhAfUEjKcKVk7v6WA&oe=667691C5' alt='Fixturbo' style={{ width: '325px', height: '325px' }}/>
              </div>
              <div className='about-counter-wrap jump-reverse'>
                <img src='assets/img/icon/about_icon2-1.svg' alt='Fixturbo' />
                <h3 className='about-counter'>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter-number'>
                          <CountUp delay={0} start={0} end={100} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <h4 className='about-counter-text'>Clientes Felices</h4>
              </div>
              <div className='about-year-wrap2 movingX'>
                <div className='about-year-grid-wrap'>
                  <div className='icon'>
                    <img src='assets/img/icon/about_icon2-2.png' alt='Fixturbo' />
                  </div>
                  <h3 className='about-counter'>
                    <span className='counter-number'>4</span>+
                  </h3>
                </div>
                <h4 className='about-year-text'>Años de Experiencia</h4>
              </div>
            </div>
          </div>
          <div className='col-xxl-5 col-xl-6'>
            <div className='about-content-wrap'>
              <div className='title-area mb-30'>
                <span className='sub-title'>Conócenos</span>
                <h2 className='sec-title'>
                  Somos el Mejor Equipo, Entrena con Nosotros <img className='title-bg-shape shape-center' src='assets/img/bg/title-bg-shape.png' alt='Fixturbo' />
                </h2>
                <p className='sec-text'>Nuestro objetivo es brindar un servicio para la satisfacción de nuestros usuarios y que se sientan como en casa.</p>
              </div>
              <div className='about-feature-wrap style-shadow'>
                <div className='icon'>
                  <img src='assets/img/icon/about_icon2-3.svg' alt='Fixturbo' />
                </div>
                <div className='about-feature-wrap-details'>
                  <h5 className='about-feature-title'>Siempre Actitud Positiva</h5>
                  <p className='about-feature-text'>En nuestras sedes siempre tendrás la mejor atención al cliente las 24 horas del día. </p>
                </div>
              </div>
              <div className='about-feature-wrap style-shadow'>
                <div className='icon'>
                  <img src='assets/img/icon/about_icon2-4.svg' alt='Fixturbo' />
                </div>
                <div className='about-feature-wrap-details'>
                  <h5 className='about-feature-title'>Entrena Cuando Quieras</h5>
                  <p className='about-feature-text'>Nuestras máquinas te permiten entrenar el tiempo que quieras, siempre con un buen servicio. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
