import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import IndexModal from '../LoginModal/indexModal';
import ButtonSwitch from '../darkMode/ButtonSwitch';

const NavBar = () => {
  const [name, setName] = useState('');

  return (
    <>
      <div className='all-nav'>
        <div className='nav-bar'>
          <ul>
            <li className='underline'>
              <Link to='/'>
                <p>Acceuil</p>
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
            <img src='/logo/Maison Morin Or.png' alt='logo-morin' />
          </Link>
        </div>
        <div className='other-nav'>
          <ul>
            <li>
              <TextField
                className='text-field'
                type='text'
                onChange={(e) => setName(e.target.value)}
                placeholder='Rechercher'
                value={name}
                style={{ color: '#f6fbf8' }}
              />
              <SearchIcon style={{ cursor: 'pointer', color: '#f6fbf8' }} />
            </li>
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
