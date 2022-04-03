import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../home/NavBar';
import ShoppingCartData from './ShoppingCartData';

const Purchase = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      await axios
        .get('http://localhost:5500/login')
        .then((res) => {
          setUserData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location = '/';
  };

  return (
    <div>
      <NavBar />
      {userData.map((index) => (
        <div key={index._id}>
          <h3>Bonjour {index.firstName} </h3>
          <h3> Vous êtes connecté avec : {index.email} </h3>
        </div>
      ))}
      <h1>Votre panier</h1>
      <button onClick={handleLogout}> DECONNEXION </button>
      <Link to='/'>
        <button>
          <p>RETOUR MAISON MORIN</p>
        </button>
      </Link>
      <ShoppingCartData />
    </div>
  );
};

export default Purchase;
