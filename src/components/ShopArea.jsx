import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShopArea = () => {
  const [product, setProduct] = useState([]);
  const [productCount, setProductCount] = useState(0)

  const fetchData = async () => {
    try {
      const response = await fetch('https://pcfihowspcyjxshfognk.supabase.co/rest/v1/Product', {
        headers: {
          'Content-Type': 'application/json',
          apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjZmlob3dzcGN5anhzaGZvZ25rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxNDE2MDgsImV4cCI6MjAzMzcxNzYwOH0.qCjhjMwtPujiaI_NIEE3TqZJsSftVjTEK4_ibt37fRM',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjZmlob3dzcGN5anhzaGZvZ25rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxNDE2MDgsImV4cCI6MjAzMzcxNzYwOH0.qCjhjMwtPujiaI_NIEE3TqZJsSftVjTEK4_ibt37fRM',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProduct(data);
      setProductCount(data.length); 
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatNumber = (number) => {
    if (typeof number !== 'number' || isNaN(number)) {
      return '0';
    }
    return new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: true
    }).format(number);
  };
  
  
  return (
    <section className='space-top space-extra-bottom'>
      <div className='container'>
        <div className='col-xl-9 col-lg-8'>
          <div className='shop-sort-bar'>
            <div className='row justify-content-between align-items-center'>
              <div className='col-md'>
                <p className='woocommerce-result-count'>Mostrando un total de {productCount} {productCount === 1 ? 'producto' : 'productos'}{' '}</p>
              </div>
            </div>
          </div>
          
          <div className='row gy-4'>
          {product.map((product) => (
            <div className='col-xl-4 col-md-6' key={product.id}>
              <div className='product-card style2'>
                <div className='product-img'>
                  <img src={product.image} alt={product.name} style={{ width: '200px', height: '250px', objectFit: 'cover' }} />
                </div>
                <div className='product-content'>
                  <h3 className='product-title'>
                    <Link to='/shop-details'>{product.name}</Link>
                  </h3>
                  <span className='price my-2'>
                  {
                    product.priceDisscount ? (
                      <>
                        <del>${formatNumber(product.price)}</del> ${formatNumber(product.priceDisscount)}
                      </>
                    ) : (
                      <span>${formatNumber(product.price)}</span>
                    )
                  }
                  </span >
                    <p className='my-2'>{product.description} <i className='fas fa-arrow-right mx' /></p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopArea;
