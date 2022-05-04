import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const UserBar = () => {
  const userFirstName = useSelector((state) => state.userReducer.firstName[0].toUpperCase());
  const userLastName = useSelector((state) => state.userReducer.lastName[0].toUpperCase());
  const lengthArticle = useSelector((state) => state.userReducer.shopCart);

  const [bar, setBar] = useState('user-bar-before');

  const user = userFirstName + '.' + userLastName;

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
        <Link to='/mon-compte'>
          <p>
            MON PANIER
            <span>
              <ShoppingCartIcon style={{ color: '#fff', fontSize: '15px', marginLeft: '0.2rem' }} />
            </span>
          </p>
        </Link>
      </div>
      <div className='lenght-article'>
        <h3>{lengthArticle.length}</h3>
        <p>articles</p>
      </div>
      <div className='user-connect-bar'>
        <p> {user} </p>
      </div>
    </div>
  );
};

export default UserBar;
