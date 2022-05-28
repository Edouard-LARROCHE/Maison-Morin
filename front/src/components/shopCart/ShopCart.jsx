import React, { useState, useEffect } from 'react';
import Articles from './Articles';

const ShopCart = () => {
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    let cardData = window.localStorage.Vins ? window.localStorage.Vins.split(',') : [];
    for (let i = 0; i < cardData.length; i++) {
      setLocalData(cardData);
    }
  }, []);

  return (
    <div className='shopCart'>
      <h2>
        Votre panier contient {localData.length} article{localData.length > 1 ? 's' : ''}
      </h2>
      <div className='grid-list'>
        <div className='article-list'>
          <p>Produits vendus par Maison-Morin</p>
          <Articles />
        </div>
        <div className='total-list'></div>
      </div>
    </div>
  );
};

export default ShopCart;
