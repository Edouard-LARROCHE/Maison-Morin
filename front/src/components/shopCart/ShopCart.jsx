import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Articles from './Articles';
import TotalShopCart from './TotalShopCart';
import { useSelector } from 'react-redux';

const ShopCart = () => {
  const [localData, setLocalData] = useState([]);
  const shopCartData = useSelector((state) => state.userReducer.shopCart);

  useEffect(() => {
    let cardData = window.localStorage.Vins ? window.localStorage.Vins.split(',') : [];
    let storeData = shopCartData;
    let switchLocationData = shopCartData ? storeData : cardData;
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

    for (let i = 0; i < switchLocationData.length; i++) {
      Promise.all(urls.map((url) => axios.get(url + switchLocationData[i]))).then(
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
          setLocalData((localData) => [
            ...localData,
            vins || viandes || poisson || charcuterie || macaron || patisserie || cocktails || produitsexcep,
          ]);
        },
      );
    }
  }, [shopCartData]);

  return (
    <div className='shopCart'>
      {shopCartData ? (
        shopCartData.length === 0 ? (
          <h2>Votre panier est vide</h2>
        ) : (
          <>
            <h2>
              Votre panier contient {shopCartData ? shopCartData.length : localData.length} article
              {shopCartData ? (shopCartData.length > 1 ? 's' : '') : localData.length > 1 ? 's' : ''}
            </h2>
            <div className='grid-list'>
              <div className='article-list'>
                <p className='send-product'>Produits vendus par Maison-Morin</p>
                {localData.map((gallery) => (
                  <Articles gallery={gallery} key={gallery._id} />
                ))}
                <p>Vider le panier</p>
              </div>
              {localData.map((gallery) => (
                <TotalShopCart gallery={gallery} key={gallery._id} />
              ))}
            </div>
          </>
        )
      ) : localData.length === 0 ? (
        <h2>Votre panier est vide</h2>
      ) : (
        <>
          <h2>
            Votre panier contient {shopCartData ? shopCartData.length : localData.length} article
            {shopCartData ? (shopCartData.length > 1 ? 's' : '') : localData.length > 1 ? 's' : ''}
          </h2>
          <div className='grid-list'>
            <div className='article-list'>
              <p className='send-product'>Produits vendus par Maison-Morin</p>
              {localData.map((gallery) => (
                <Articles gallery={gallery} key={gallery._id} />
              ))}
              <p>Vider le panier</p>
            </div>
            {localData.map((gallery) => (
              <TotalShopCart gallery={gallery} key={gallery._id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ShopCart;
