import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShoppingCartData = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    axios.get('/picture/cave/vins/6234ab8dc89b7a55519e0e10').then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Shopping cart</h1>
    </div>
  );
};

export default ShoppingCartData;
