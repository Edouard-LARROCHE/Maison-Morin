import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import DropDown from '../../pages/DropDown';

const NavBar = () => {
  const [name, setName] = useState('');

  return (
    <>
      <div className='all-nav'>
        <div className='nav-bar'>
          <ul>
            <li className='underline'>
              <Link to='/'>
                <p>La Maison Morin</p>
              </Link>
            </li>
            <li className='underline'>
              <Link to='/'>
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
            <img src='/logo/logo-morin.png' alt='logo-morin' />
          </Link>
          <h2>MAISON MORIN</h2>
        </div>
        <div className='other-nav'>
          <ul>
            <li>
              <TextField className='text-field' type='text' onChange={(e) => setName(e.target.value)} placeholder='Rechercher' value={name} />
              <SearchIcon style={{ cursor: 'pointer' }} />
            </li>
            <li>
              <PersonIcon style={{ cursor: 'pointer' }} />
            </li>
          </ul>
        </div>
      </div>
      <DropDown />
    </>
  );
};

export default NavBar;
