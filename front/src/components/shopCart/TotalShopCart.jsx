import React from 'react';

const TotalShopCart = ({ gallery }) => {
  return (
    <div className='total-list'>
      <div className='total-price'>
        <h3>Total</h3>
        <h1> {gallery.price} € </h1>
      </div>
      <div className='jesaispas'></div>

      <div className='send-return'>
        <div className='return-product'>
          <div className='btn-selection' style={{ marginTop: '1rem', width: '15.5rem' }}>
            <p>CONTINUER MES ACHATS</p>
          </div>
        </div>
        <h3>OU</h3>
        <div className='buy-product'>
          <div className='btn-selection'>
            <p>COMMANDER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalShopCart;
