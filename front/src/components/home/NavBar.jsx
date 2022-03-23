import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IndexModal from '../LoginModal/indexModal';
import ButtonSwitch from '../darkMode/ButtonSwitch';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import CloseIcon from '@material-ui/icons/Close';

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
            <div className='resp-menu' onClick={handleOpen}>
              {open ? <MenuOpenIcon className='icon-menu' /> : <CloseIcon className='icon-menu' />}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
