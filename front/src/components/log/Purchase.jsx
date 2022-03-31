import React, { useState } from 'react';

const Purchase = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location = '/';
  };

  return (
    <div>
      <h1>Votre panier</h1>
      <button onClick={handleLogout}> DECONNEXION </button>
    </div>
  );
};

export default Purchase;
