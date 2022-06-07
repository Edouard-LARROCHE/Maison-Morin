import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loader';
import ShoppingCartCard from './ShoppingCartCard';
import { useSelector } from 'react-redux';

const ShoppingCartData = () => {
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);
  const cardId = useSelector((state) => state.userReducer.shopCart);

  useEffect(() => {
    setLoading(false);
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
    // eslint-disable-next-line
  }, []);

  return (
    <div className='shopCart-connect'>
      {listData.length === 0 ? (
        <h2>Votre panier est vide</h2>
      ) : loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <h2>
            Votre panier contient {listData.length} article
            {listData.length > 1 ? 's' : ''}
          </h2>
          <div className='grid-list'>
            <div className='article-list'>
              <p className='send-product'>Produits vendus par Maison-Morin</p>
              {listData.map((gallery) => (
                <ShoppingCartCard gallery={gallery} key={gallery._id} />
              ))}
              <p>Vider le panier</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCartData;
