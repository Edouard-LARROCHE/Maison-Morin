import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShoppingCartCard from './ShoppingCartCard';
import { useSelector } from 'react-redux';

const ShoppingCartData = () => {
  const [listData, setListData] = useState([]);
  const cardId = useSelector((state) => state.userReducer.shopCart);

  useEffect(() => {
    let urls = [
      '/picture/cave/vins/',
      '/picture/traiteur/viande/',
      '/picture/traiteur/poisson/',
      '/picture/traiteur/charcuterie/',
      '/picture/patisserie/macaron/',
      '/picture/patisserie/patisseries/',
      '/picture/cocktails/',
      '/picture/produitsExcep/',
    ];

    for (let i = 0; i < cardId.length; i++) {
      Promise.all(urls.map((url) => axios.get(url + cardId[i]))).then(
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
  }, [cardId]);

  return (
    <div className='shopping'>
      <h1>Mon panier</h1>
      <div className='shopping-cart'>
        {listData.length > 0 ? (
          listData.map((gallery) => <ShoppingCartCard gallery={gallery} key={gallery._id} />)
        ) : (
          <h2>PANIER VIDE POUR LE MOMENT</h2>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartData;
