import React  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Thumbs, EffectFade } from 'swiper';
import { Link } from 'react-router-dom';

const PortfolioTwo = () => {
  return (
    <div className='portfolio-area-1 space overflow-hidden'>
      <div className='container'>
        <div className='row justify-content-between align-items-end'>
          <div className='col-xl-5 col-lg-6'>
            <div className='title-area'>
              <span className='sub-title'>Nuestras Máquinas</span>
              <h2 className='sec-title'>
                Entrena Todo tu Cuerpo con las Mejores Máquinas <img className='title-bg-shape' src='assets/img/bg/title-bg-shape.png' alt='Fixturbo' />
              </h2>
            </div>
          </div>
          <div className='col-sm-auto'>
            <div className='title-area'>
              <div className='icon-box'>
                <button className='slick-arrow default portfolio-button-next'>
                  <i className='fas fa-arrow-left' />
                </button>
                <button className='slick-arrow default portfolio-button-prev'>
                  <i className='fas fa-arrow-right' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid p-0'>
        <div className='row global-carousel gx-30 portfolio-slider1'>
          <Swiper
            loop={true}
            navigation={{
              nextEl: '.portfolio-button-next',
              prevEl: '.portfolio-button-prev',
            }}
            spaceBetween={30}
            centeredSlides
            slidesPerView={1}
            slidesPerGroup={1}
            speed={2000}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            className='mySwiper'
            modules={[FreeMode, Navigation, Thumbs, EffectFade]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
            }}>
            <SwiperSlide>
              <div>
                <div className='portfolio-card style2'>
                  <div className='portfolio-card-thumb'>
                    <img src='https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/325377320_890576778920171_7015318314854881212_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MCS_rtXwxS8Q7kNvgGcnoTV&_nc_ht=scontent.feoh1-1.fna&oh=00_AYBc6u35kDNqbe9zLw0rR_57RuMD3RDLk6purJggeUWOZQ&oe=66769373' alt='Fixturbo' style={{ width: '700px', height: '480px' }} />
                  </div>
                  <div className='portfolio-card-details'>
                    <div className='media-left'>
                      <h4 className='portfolio-card-details_title'>
                        <Link to='/project-details'>Pesas Variadas</Link>
                      </h4>
                      <span className='portfolio-card-details_subtitle'>Tenemos pesas de todos los pesos y tamaños para que puedas entrenar con comodidad y seguridad.</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className='portfolio-card style2'>
                  <div className='portfolio-card-thumb'>
                    <img src='https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/325377320_890576778920171_7015318314854881212_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MCS_rtXwxS8Q7kNvgGcnoTV&_nc_ht=scontent.feoh1-1.fna&oh=00_AYBc6u35kDNqbe9zLw0rR_57RuMD3RDLk6purJggeUWOZQ&oe=66769373' alt='Fixturbo' style={{ width: '700px', height: '480px' }} />
                  </div>
                  <div className='portfolio-card-details'>
                    <div className='media-left'>
                      <h4 className='portfolio-card-details_title'>
                        <Link to='/project-details'>Pesas Variadas</Link>
                      </h4>
                      <span className='portfolio-card-details_subtitle'>Tenemos pesas de todos los pesos y tamaños para que puedas entrenar con comodidad y seguridad.</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className='portfolio-card style2'>
                  <div className='portfolio-card-thumb'>
                    <img src='https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/325377320_890576778920171_7015318314854881212_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MCS_rtXwxS8Q7kNvgGcnoTV&_nc_ht=scontent.feoh1-1.fna&oh=00_AYBc6u35kDNqbe9zLw0rR_57RuMD3RDLk6purJggeUWOZQ&oe=66769373' alt='Fixturbo' style={{ width: '700px', height: '480px' }} />
                  </div>
                  <div className='portfolio-card-details'>
                    <div className='media-left'>
                      <h4 className='portfolio-card-details_title'>
                        <Link to='/project-details'>Pesas Variadas</Link>
                      </h4>
                      <span className='portfolio-card-details_subtitle'>Tenemos pesas de todos los pesos y tamaños para que puedas entrenar con comodidad y seguridad.</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className='portfolio-card style2'>
                  <div className='portfolio-card-thumb'>
                    <img src='https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/325377320_890576778920171_7015318314854881212_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MCS_rtXwxS8Q7kNvgGcnoTV&_nc_ht=scontent.feoh1-1.fna&oh=00_AYBc6u35kDNqbe9zLw0rR_57RuMD3RDLk6purJggeUWOZQ&oe=66769373' alt='Fixturbo' style={{ width: '700px', height: '480px' }} />
                  </div>
                  <div className='portfolio-card-details'>
                    <div className='media-left'>
                      <h4 className='portfolio-card-details_title'>
                        <Link to='/project-details'>Pesas Variadas</Link>
                      </h4>
                      <span className='portfolio-card-details_subtitle'>Tenemos pesas de todos los pesos y tamaños para que puedas entrenar con comodidad y seguridad.</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className='portfolio-card style2'>
                  <div className='portfolio-card-thumb'>
                    <img src='https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/325377320_890576778920171_7015318314854881212_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MCS_rtXwxS8Q7kNvgGcnoTV&_nc_ht=scontent.feoh1-1.fna&oh=00_AYBc6u35kDNqbe9zLw0rR_57RuMD3RDLk6purJggeUWOZQ&oe=66769373' alt='Fixturbo' style={{ width: '700px', height: '480px' }} />
                  </div>
                  <div className='portfolio-card-details'>
                    <div className='media-left'>
                      <h4 className='portfolio-card-details_title'>
                        <Link to='/project-details'>Pesas Variadas</Link>
                      </h4>
                      <span className='portfolio-card-details_subtitle'>Tenemos pesas de todos los pesos y tamaños para que puedas entrenar con comodidad y seguridad.</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTwo;
