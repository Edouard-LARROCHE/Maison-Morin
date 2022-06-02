import React from 'react';

const TotalShopCart = ({ gallery }) => {
  return (
    <div className='total-list'>
      <div className='total-price'>
        <h3>Total</h3>
        <h1> {gallery.price} € </h1>
      </div>
      <div className='jesaispas'></div>
      <div className='send-return'></div>
    </div>
  );
};

export default TotalShopCart;
