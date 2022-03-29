import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IndexModal from '../LoginModal/indexModal';
import ButtonSwitch from '../darkMode/ButtonSwitch';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import CloseIcon from '@material-ui/icons/Close';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpenGallery = () => {
    setOpenGallery(!openGallery);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseGallery = () => {
    setOpenGallery(false);
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
              <li>
                <p onClick={handleOpenGallery}>Gallerie</p>
              </li>
            </div>
            <div className='menu-gallery-open'>
              <ul className={openGallery ? 'resp-nav-gallery active-gallery' : 'resp-nav-gallery'}>
                <li>
                  <p onClick={handleCloseGallery}>RETOUR</p>
                </li>
                <Link to='/traiteur-charcuterie'>
                  <li onClick={handleClose}>
                    <p>test menu drop 1</p>
                  </li>
                </Link>
                <Link to='/traiteur-viandes'>
                  <li onClick={handleClose}>
                    <p>test menu drop 2</p>
                  </li>
                </Link>
                <Link to='/traiteur-poissons'>
                  <li onClick={handleClose}>
                    <p>test menu drop 3</p>
                  </li>
                </Link>
                <Link to='/patisseries'>
                  <li onClick={handleClose}>
                    <p>test menu drop 4</p>
                  </li>
                </Link>
              </ul>
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
