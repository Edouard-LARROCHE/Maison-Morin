import React from 'react';

const ProductInfo = ({ gallery }) => {
  return (
    <div className='list-card'>
      <h2> CARACTÉRISTIQUES DU VIN : </h2>
      <div className='wine-info'>
        <div className='info-left'>
          <ul>
            <p>Domaine viticole : </p>
            <div className='line2' />
            <p>Cépages : </p>
            <div className='line2' />
            <p>Région : </p>
            <div className='line2' />
            <p>Style de vin : </p>
            <div className='line2' />
            <p>Teneur en alcool : </p>
            <div className='line2' />
          </ul>
        </div>
        <div className='info-right'>
          <ul>
            <p>{gallery.winery}</p>
            <div className='line2' />
            <p> {gallery.grapeVarieties}</p>
            <div className='line2' />
            <p> {gallery.region}</p>
            <div className='line2' />
            <p> {gallery.styleOfWine}</p>
            <div className='line2' />
            <p> {gallery.alcoholContent}%</p>
            <div className='line2' />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
