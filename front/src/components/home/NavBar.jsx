import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IndexModal from '../LoginModal/indexModal';
import ButtonSwitch from '../darkMode/ButtonSwitch';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='all-nav'>
        <div className='nav-bar'>
          <ul>
            <li className='underline'>
              <Link to='/'>
                <p>Accueil</p>
              </Link>
            </li>
            <li className='underline'>
              <Link to='/maison-morin'>
                <p>La Maison Morin</p>
              </Link>
            </li>
            <li className='underline'>
              <Link to='/boutique'>
                <p>Notre boutique</p>
              </Link>
            </li>
            <li className='underline'>
              <Link to='/contact'>
                <p>Nous contacter</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className='logo-home'>
          <Link to='/'>
            <img src='/logo/Maison-Morin-Or.png' alt='logo-morin' />
          </Link>
        </div>
        <div className='other-nav'>
          <ul>
            <li className='switch-mode'>
              <ButtonSwitch />
            </li>
            <li>
              <IndexModal />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
