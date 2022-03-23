import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IndexModal from '../LoginModal/indexModal';
import ButtonSwitch from '../darkMode/ButtonSwitch';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import CloseIcon from '@material-ui/icons/Close';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState('items-gallery');
  const [gallery, setGallery] = useState('items-gallery-after');

  const handleOpen = () => {
    setOpen(!open);
    setItems('items-gallery');
  };

  const handleClose = () => {
    setOpen(false);
    setGallery();
  };

  const handleClick = () => {
    if (gallery) {
      setItems();
    }
  };

  return (
    <>
      <div className='all-nav'>
        <div className='nav-bar'>
          <ul className={open ? 'resp-nav active' : 'resp-nav'}>
            <li onClick={handleClose}>
              <Link to='/'>
                <p>Accueil</p>
              </Link>
            </li>
            <li onClick={handleClose}>
              <Link to='/maison-morin'>
                <p>La Maison Morin</p>
              </Link>
            </li>
            <li onClick={handleClose}>
              <Link to='/boutique'>
                <p>Notre boutique</p>
              </Link>
            </li>
            <li onClick={handleClose}>
              <Link to='/contact'>
                <p>Nous contacter</p>
              </Link>
            </li>
            <div className='menu-drop-open'>
              <li onClick={handleClick}>
                <p className={gallery}>Gallerie</p>
              </li>
              <div className={items}>
                <p>test menu drop</p>
                <p>test menu drop</p>
                <p>test menu drop</p>
                <p>test menu drop</p>
              </div>
            </div>
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
        <div className='resp-menu' onClick={handleOpen}>
          {open ? <CloseIcon className='icon-menu' /> : <MenuOpenIcon className='icon-menu' />}
        </div>
      </div>
    </>
  );
};

export default NavBar;
