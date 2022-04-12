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
    <>
      <NavBar />
      <div className='purchase-page'>
        <div className='purchase'>
          <h2>
            Bienvenue {userData.firstName} {userData.lastName}
          </h2>
          <button style={{ margin: '1rem' }} className='log-button ' onClick={handleLogout}>
            <p>DECONNEXION </p>
          </button>
        </div>
        <div className='conditionnal-display'>
          <ShoppingCartData />
          <Account />
        </div>
      </div>
    </>
  );
};

export default Purchase;
