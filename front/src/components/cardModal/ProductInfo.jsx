import React from 'react';

const ProductInfo = ({ gallery }) => {
  return (
    <div className='list-card'>
      <h2> INFORMATIONS SUR LE VIN : </h2>
      <ul>
        <p>Domaine viticole : {gallery.winery} </p>
        <p>Cépages : {gallery.grapeVarieties} </p>
        <p>Région : {gallery.region} </p>
        <p>Style de vin : {gallery.styleOfWine} </p>
        <p>Teneur en alcool : {gallery.alcoholContent}% </p>
      </ul>
    </div>
  );
};

export default ProductInfo;
