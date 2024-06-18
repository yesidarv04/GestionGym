import React from 'react';
import { Link } from 'react-router-dom';

const HeroTwo = () => {
  return (
    <div
      className='hero-wrapper hero-2'
      id='hero'
      style={{
        backgroundImage: "url('ttps://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/357150711_794634262368310_5217222281588570451_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cJEadNXUcIMQ7kNvgHksyBV&_nc_ht=scontent.feoh1-1.fna&oh=00_AYAZwUoqvWBqP3LRi0WgoDc41FjXxU6Bfg_C_oTRb0tg3Q&oe=6676A636')",
        backgroundPosition: 'center',
      }}>
      <div className='hero-shape2-1'>
        <span className='hero-shape2-2' />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-6 col-xl-5 col-lg-8'>
            <div className='hero-style2'>
              <span className='sub-title text-white'>#elmejorgymdemanrique</span>
              <h1 className='hero-title text-white'>
                Creando los{' '}
                <span>
                  <img src='assets/img/hero/hero_shape_2.png' alt='Fixturbo' />
                  Mejores
                </span>{' '}
                Físicos de Manrique
              </h1>
              <p className='hero-text text-white'>
                Confía en nosotros para tu mejoramiento físico en Manrique. <br />
                Somos tu mejor alternativa al momento de entrenar.
              </p>
              <div className='btn-group'>
                <Link to='/about' className='btn'>
                  Nuestros Planes
                </Link>
                <div className='call-media-wrap'>
                  <div className='icon'>
                    <img src='assets/img/icon/phone-1.svg' alt='Fixturbo' />
                  </div>
                  <div className='media-body'>
                    <h6 className='title text-white'>Llámanos:</h6>
                    <h4 className='link'>
                      <Link className='text-white' to='tel:300 000 0000'>
                        +57 300 000 0000
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
