import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../gallery/Card';

const ShoppingCartData = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let cardDataId = window.localStorage.card ? window.localStorage.card.split(',') : [];

    for (let i = 0; i < cardDataId.length; i++) {
      axios.get(`/picture/cave/vins/${cardDataId[i]}`).then((res) => {
        setListData((listData) => [...listData, res.data]);
      });
    }
  }, []);

  return (
    <div>
      <h1>Shopping cart</h1>
      {listData.length > 0 ? listData.map((gallery) => <Card gallery={gallery} key={gallery._id} />) : <h2>PANIER VIDE POUR LE MOMENT</h2>}
    </div>
  );
};

export default ShoppingCartData;
