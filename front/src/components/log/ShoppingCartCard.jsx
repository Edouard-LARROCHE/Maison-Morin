import React from 'react';

const ShoppingCartCard = ({ gallery }) => {
  return (
    <div className='photos'>
      <img className='img-gallerie' src={gallery.pictureUrl} alt='MAISON-MORIN' />
      <div className='icones'></div>
      <div className='info-card'>
        <p> {gallery.name} </p>
        <p> {gallery.price} </p>
      </div>
    </div>
  );
};

export default ShoppingCartCard;
