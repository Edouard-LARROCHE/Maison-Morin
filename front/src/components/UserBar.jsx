import React, { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const UserBar = () => {
  const [bar, setBar] = useState('user-bar-before');

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
      <p>
        MON PANIER
        <span>
          <ShoppingCartIcon style={{ color: '#fff', fontSize: '15px', marginLeft: '0.2rem' }} />
        </span>
      </p>
    </div>
  );
};

export default UserBar;
