import React from 'react';

const AddShopCart = ({ gallery }) => {
  return (
    <div className='add-shop-cart'>
      <div className='price'>
        <h1> € {gallery.price} </h1>
        <p>Prix à l'unité</p>
      </div>
    </div>
  );
};

export default AddShopCart;
