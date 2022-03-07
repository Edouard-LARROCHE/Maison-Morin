import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Notice = () => {
  return (
    <>
      <div className='legal-notice'>
        <div className='V-position'>
          <img className='V' src='/logo/V.png' alt='V' style={{ width: '3rem' }} />
        </div>
        <h1>1. Mentions légales</h1>
        <div className='line-all'></div>
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
          <h2>Hébergement du site www.maison-morin.com : </h2>
          <p>Firebase (GOOGLE)</p>
        </div>
      </div>
      <h2>Conception / Design / Développement : </h2>
      <span>
        <CopyrightIcon style={{ fontSize: 'small' }} /> Copyright Maison Morin {new Date().getFullYear()}
      </span>
      <div className='dev'>
        <div className='dev-ed'>
          <img src='/upload/avatar1.jpg' alt='avatar' />
          <div className='name'>
            <p>Edouard LARROCHE</p>
            <p>Developer web Full-Stack</p>
            <div className='social-contact'>
              <ul>
                <li>
                  <a href='https://www.linkedin.com/in/edouard-larroche-9099a6163/' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-linkedin' />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/Edouard-LARROCHE' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-github' />
                  </a>
                </li>
                <li>
                  <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-twitter' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='adress'>
            <p>Allée RAVEL</p>
            <p>92320 Châtillon</p>
            <span>CONTACT : </span>
            <a href='https://portfolio-c12b7.firebaseapp.com/' target='_blank' rel='noopener noreferrer'>
              <div className='portfolio'>https://portfolio-c12b7.firebaseapp.com/</div>
            </a>
          </div>
        </div>
        <div className='dev-al'>
          <p>Alan DUBOSQ</p>
        </div>
      </div>
    </>
  );
};

export default Notice;
