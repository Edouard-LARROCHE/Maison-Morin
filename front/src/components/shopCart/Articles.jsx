import React from 'react';

const Articles = ({ gallery }) => {
  return (
    <div className='articles'>
      <div className='grid-article'>
        <div className='picture-article'>
          <img src={gallery.pictureUrl} alt='produit' />
        </div>
        <div className='article'>
          <p> {gallery.name} </p>
          <p>Bouteille 75cl</p>
        </div>
        <div className='price-more-less'></div>
      </div>
    </div>
  );
};

export default Articles;
