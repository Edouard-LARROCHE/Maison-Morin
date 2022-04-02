import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShoppingCartCard from './ShoppingCartCard';

const ShoppingCartData = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let cardDataId = window.localStorage.card ? window.localStorage.card.split(',') : [];
    let urls = [
      'http://localhost:5500/picture/cave/vins/',
      'http://localhost:5500/picture/traiteur/viande/',
      'http://localhost:5500/picture/traiteur/poisson',
      'http://localhost:5500/picture/traiteur/charcuterie',
      'http://localhost:5500/picture/patisserie/macaron',
      'http://localhost:5500/picture/patisserie/patisseries',
      'http://localhost:5500/picture/cocktails',
      'http://localhost:5500/picture/produitsExcep',
    ];

    for (let i = 0; i < cardDataId.length; i++) {
      Promise.all(urls.map((url) => axios.get(url + cardDataId[i]))).then(
        ([
          { data: vins },
          { data: viandes },
          { data: poisson },
          { data: charcuterie },
          { data: macaron },
          { data: patisserie },
          { data: cocktails },
          { data: produitsexcep },
        ]) => {
          setListData((listData) => [...listData, vins || viandes || poisson || charcuterie || macaron || patisserie || cocktails || produitsexcep]);
        },
      );
    }
  }, []);

  return (
    <div>
      <h1>Shopping cart</h1>
      {listData.length > 0 ? (
        listData.map((gallery) => <ShoppingCartCard gallery={gallery} key={gallery._id} />)
      ) : (
        <h2>PANIER VIDE POUR LE MOMENT</h2>
      )}
    </div>
  );
};

export default ShoppingCartData;
