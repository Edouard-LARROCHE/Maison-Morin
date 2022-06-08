import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const UserNoconnectBar = () => {
  const [bar, setBar] = useState('user-bar-before');
  const localStoreData = window.localStorage.Vins ? window.localStorage.Vins.split(',') : [];

  const displayBar = () => {
    if (window.scrollY >= 500) {
      setBar('user-bar');
    } else {
      setBar('user-bar-before');
    }
  };

  window.addEventListener('scroll', displayBar);

  return (
    <div className={bar}>
      <div className='shopCart-bar'>
        <Link to='/mon-panier'>
          <p>
            MON PANIER
            <span>
              <ShoppingCartIcon style={{ color: '#fff', fontSize: '15px', marginLeft: '0.2rem' }} />
            </span>
          </p>
        </Link>
      </div>
      <div className='lenght-article'>
        <h3>{localStoreData.length}</h3>
        <p>ARTICLE{localStoreData.length > 1 ? 'S' : ''}</p>
      </div>
      <div className='user-connect-bar'>
        <img src='./logo/Or.png' alt='Maison-Morin' style={{ width: '1.5rem' }} />
      </div>
    </div>
  );
};

export default UserNoconnectBar;
