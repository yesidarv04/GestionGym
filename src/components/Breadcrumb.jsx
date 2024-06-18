import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title }) => {
  return (
    <div className='breadcumb-wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='breadcumb-content'>
              <h1 className='breadcumb-title'>{title}</h1>
              <ul className='breadcumb-menu'>
                <li>
                  <Link to='/'>Inicio</Link>
                </li>
                <li className='active'>{title}</li>
              </ul>
            </div>
          </div>
          <div className='col-lg-6 d-lg-block d-none'>
            <div className='breadcumb-thumb'>
              <img src='https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/276106991_2171685846319074_5253352670423282738_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HT7xrHkwDT0Q7kNvgHxaAVa&_nc_ht=scontent.feoh1-1.fna&oh=00_AYBuFRvqnrD5G4Gy-BZoAmmrlHmW8I7BNNxjRjlb9qboTA&oe=6676B909' alt='Fixturbo' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
