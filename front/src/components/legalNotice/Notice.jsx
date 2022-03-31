import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Notice = () => {
  return (
    <>
      <div className='legal-notice'>
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
          <p>www.heroku.com</p>
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
            <a href='https://portfolio-c12b7.firebaseapp.com/' target='_blank' rel='noopener noreferrer'>
              <div className='portfolio'>
                <i className='fa fa-address-card' style={{ width: '1rem' }} />
              </div>
            </a>
            <p>Région Île De France</p>
          </div>
        </div>
        <div className='dev-al'>
        <img src='/upload/avatar-al.webp' alt='avatar' />
          <div className='name'>
            <p>Alan DUBOSQ</p>
            <p>Developer web Front-end</p>
            <div className='social-contact'>
              <ul>
                <li>
                  <a href='https://github.com/AlanDbq' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-github' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='adress'>
            <a href='http://dubosqalan.fr' target='_blank' rel='noopener noreferrer'>
              <div className='portfolio'>
                <i className='fa fa-address-card' style={{ width: '1rem' }} />
              </div>
            </a>
            <p>Région Île De France</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notice;
