import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import NavBar from '../home/NavBar';
import ShoppingCartData from './ShoppingCartData';
import Account from './Account';
import { useSelector } from 'react-redux';

const Purchase = () => {
  const userData = useSelector((state) => state.userReducer);

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
        Bienvenue {userData.firstName} {userData.lastName}
      </p>
      <button style={{ margin: '1rem' }} className='log-button ' onClick={handleLogout}>
        <p>DECONNEXION </p>
      </button>
      <h1>Mon panier</h1>
      <ShoppingCartData />
      <Account />
    </div>
  );
};

export default Purchase;
