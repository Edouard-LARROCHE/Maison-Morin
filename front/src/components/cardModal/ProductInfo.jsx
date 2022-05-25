import React from 'react';

const ProductInfo = ({ gallery }) => {
  return (
    <div className='list-card'>
      <h2> CARACTÉRISTIQUES DU VIN : </h2>
      <div className='wine-info'>
        <div className='info-left'>
          <ul>
            <div className='icons-wine'>
              <img src='/assets/icons-domain.svg' alt='domain' />
              <p>Domaine viticole : </p>
            </div>
            <div className='line2' />
            <div className='icons-wine'>
              <img src='' alt='cépages' />
              <p>Cépages : </p>
            </div>
            <div className='line2' />
            <div className='icons-wine'>
              <img src='' alt='Région' />
              <p>Région : </p>
            </div>
            <div className='line2' />
            <div className='icons-wine'>
              <img src='' alt='style' />
              <p>Style de vin : </p>
            </div>
            <div className='line2' />
            <div className='icons-wine'>
              <img src='' alt='alcool' />
              <p>Teneur en alcool : </p>
            </div>
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
