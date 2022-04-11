import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import NavBar from '../home/NavBar';
import ShoppingCartData from './ShoppingCartData';
import { UidContext } from '../../AppContext';

const Purchase = () => {
  const [userConnect, setUserConnect] = useState([]);
  const id = useContext(UidContext);

  useEffect(() => {
    const fetchUserConnect = async () => {
      await axios
        .get(`/api/user/${id}`)
        .then((res) => {
          console.log(res.data);
          setUserConnect(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchUserConnect();
  }, []);

  const removeCookie = (key) => {
    if (window !== 'undefined') {
      cookie.remove(key, { expires: 1 });
    }
  };

  const handleLogout = async () => {
    await axios('/api/user/logout')
      .then(() => {
        removeCookie('jwt');
        window.location = '/';
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='purchase'>
      <NavBar />
      <p>
        Bonjour {userConnect.firstName} {userConnect.lastName}
      </p>
      <button style={{ margin: '1rem' }} className='log-button ' onClick={handleLogout}>
        <p>DECONNEXION </p>
      </button>
      <h1>Votre panier</h1>
      <ShoppingCartData />
    </div>
  );
};

export default Purchase;
