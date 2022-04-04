import React from 'react';
import NavBar from '../home/NavBar';
import ShoppingCartData from './ShoppingCartData';

const Purchase = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location = '/';
  };

  return (
    <div className='purchase'>
      <NavBar />
      <button style={{ margin: '1rem' }} className='log-button ' onClick={handleLogout}>
        <p>DECONNEXION </p>
      </button>
      <h1>Votre panier</h1>
      <ShoppingCartData />
    </div>
  );
};

export default Purchase;
