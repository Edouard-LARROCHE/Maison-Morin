import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Notice = () => {
  return (
    <>
      <div className='legal-notice'>
        <h2>1. Mentions légales</h2>
        <ul>
          <li>
            <h3>CHARCUTERIE</h3>
          </li>
          <li>
            <h3>NOM COMMERCIAL MAISON MORIN</h3>
          </li>
          <li>
            <p>Capital social de 5000,00 euros</p>
          </li>
          <li>
            <p>RCS MELUN B 900 016 700</p>
          </li>
          <li>
            <p>57 GRANDE RUE 77630 BARBIZON</p>
          </li>
        </ul>
        <div className='hosted'>
          <h3>Hébergement : </h3>
          <p>Firebase (GOOGLE)</p>
        </div>
      </div>
      <div className='dev'>
        <h3>Conception / Design / Développement : </h3>
        <p>Edouard LARROCHE</p>
        <p>Allée RAVEL</p>
        <p>92320 Châtillon</p>
        <span>CONTACT : </span>
        <a href='https://portfolio-c12b7.firebaseapp.com/' target='_blank' rel='noopener noreferrer'>
          <div style={{ color: '#032953' }}>https://portfolio-c12b7.firebaseapp.com/</div>
        </a>

        <span>
          <CopyrightIcon className='copy-icon' style={{ fontSize: 'small' }} /> Copyright Maison Morin {new Date().getFullYear()}
        </span>
      </div>
    </>
  );
};

export default Notice;
