import React, { useState } from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import NavBar from '../home/NavBar';
import Footer from '../home/Footer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartData from './ShoppingCartData';
import Account from './Account';
import { useSelector } from 'react-redux';

const Purchase = () => {
  const userData = useSelector((state) => state.userReducer);
  const lengthArticle = useSelector((state) => state.userReducer.shopCart);
  const [account, setAccount] = useState(true);
  const [shop, setShop] = useState(false);

  const handleChange = (e) => {
    if (e.target.id === 'account') {
      setAccount(true);
      setShop(false);
    } else if (e.target.id === 'shop') {
      setShop(true);
      setAccount(false);
    }
  };

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
          <div className='toggle-button'>
            <p onClick={handleChange} id='account'>
              MON COMPTE
            </p>
            <div className='article-length'>
              <p onClick={handleChange} id='shop'>
                MON PANIER
                <ShoppingCartIcon style={{ transform: 'translate(5px, 5px)' }} />
              </p>
              <h3>{lengthArticle.length}</h3>
            </div>
          </div>
          <button style={{ margin: '1rem' }} className='log-button ' onClick={handleLogout}>
            <p>DECONNEXION </p>
          </button>
        </div>
        <div className='conditionnal-display'>
          {account && <Account handleLogout={handleLogout} />}
          {shop && <ShoppingCartData />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Purchase;
