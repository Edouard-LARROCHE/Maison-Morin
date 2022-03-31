import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IndexModal from '../LoginModal/indexModal';
import ButtonSwitch from '../darkMode/ButtonSwitch';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
                <p onClick={handleOpenGallery}>GALLERIE</p>
              </li>
            </div>
            <div className='menu-gallery-open'>
              <ul className={openGallery ? 'resp-nav-gallery active-gallery' : 'resp-nav-gallery'}>
                <ArrowBackIcon style={{ cursor: 'pointer', color: '#fff', marginBottom: '1rem', fontSize: '2rem' }} onClick={handleCloseGallery} />
                <Link to='/traiteur-charcuterie'>
                  <li onClick={handleClose}>
                    <p>CHARCUTERIES</p>
                  </li>
                </Link>
                <Link to='/traiteur-viandes'>
                  <li onClick={handleClose}>
                    <p>VIANDES</p>
                  </li>
                </Link>
                <Link to='/traiteur-poissons'>
                  <li onClick={handleClose}>
                    <p>POISSONS</p>
                  </li>
                </Link>
                <Link to='/patisseries'>
                  <li onClick={handleClose}>
                    <p>PÂTISSERIES</p>
                  </li>
                </Link>
                <Link to='/patisseries-macarons'>
                  <li onClick={handleClose}>
                    <p>MACARONS</p>
                  </li>
                </Link>
                <Link to='/cave-a-vins'>
                  <li onClick={handleClose}>
                    <p>CAVE À VINS</p>
                  </li>
                </Link>
                <Link to='/cocktails'>
                  <li onClick={handleClose}>
                    <p>COCKTAILS</p>
                  </li>
                </Link>
                <Link to="/produits-d'exception">
                  <li onClick={handleClose}>
                    <p>PRODUITS D'EXCEPTION</p>
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
        <div className='auth-nav'>
          <ul>
            <Link to='/login'>
              <li> Se connecter </li>
            </Link>
            <Link to='/signup'>
              <li> Créer un compte </li>
            </Link>
          </ul>
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
          {open ? <CloseIcon className='icon-menu' /> : <MenuIcon className='icon-menu' />}
        </div>
      </div>
    </>
  );
};

export default NavBar;
