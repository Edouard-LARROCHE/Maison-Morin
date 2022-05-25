import React from 'react';

const ProductInfo = ({ gallery }) => {
  return (
    <div className='list-card'>
      <h2> CARACTÉRISTIQUES DU VIN : </h2>
      <div className='wine-info'>
        <div className='info-left'>
          <ul>
            <p>Domaine viticole : </p>
            <p>Cépages : </p>
            <p>Région : </p>
            <p>Style de vin : </p>
            <p>Teneur en alcool : </p>
          </ul>
        </div>
        <div className='info-right'>
          <ul>
            <p>{gallery.winery}</p>
            <p> {gallery.grapeVarieties}</p>
            <p> {gallery.region}</p>
            <p> {gallery.styleOfWine}</p>
            <p> {gallery.alcoholContent}%</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
