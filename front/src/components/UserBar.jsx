import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const UserBar = () => {
  const userFirstName = useSelector((state) => state.userReducer.firstName[0].toUpperCase());
  const userLastName = useSelector((state) => state.userReducer.lastName[0].toUpperCase());
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
        <p>
          MON PANIER
          <span>
            <ShoppingCartIcon style={{ color: '#fff', fontSize: '15px', marginLeft: '0.2rem' }} />
          </span>
        </p>
      </div>
      <div className='user-connect-bar'>
        <p> {user} </p>
      </div>
    </div>
  );
};

export default UserBar;
