import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top-footer'>
        <img src='/logo/logo-morin.png' alt='logo-morin' />
      </div>
      <div className='bottom-footer'>
        <ul>
          <li>
            <h2>NOUS TROUVEZ</h2>
          </li>
          <li>
            <p>Notre boutique</p>
          </li>
          <li>
            <p> Contactez-nous</p>
          </li>
        </ul>
        <ul>
          <li>
            <h2>EN SAVOIR PLUS</h2>
          </li>
          <li>
            <p>La maison Morin</p>
          </li>
          <li>
            <p>Entreprise engagée</p>
          </li>
          <li>
            <p>Nos valeurs</p>
          </li>
        </ul>
        <ul>
          <li>
            <h2>NOS CONDITIONS</h2>
          </li>
          <li>
            <p>Mentions légales</p>
          </li>
          <li>
            <p>Cookies</p>
          </li>
        </ul>
        <ul className='copy'>
          <li>
            <h3>MAISON MORIN</h3>
          </li>
          <li>
            <span>
              <CopyrightIcon className='copy-icon' style={{ fontSize: 'small' }} /> Copyright Maison Morin
            </span>
          </li>
          <li> {new Date().getFullYear()} </li>
        </ul>
      </div>
      <div className='social'>
        <h2>RETROUVEZ L'UNIVERS MAISON MORIN</h2>
        <ul>
          <li>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/maison_morin/?hl=fr' target='_blank' rel='noopener noreferrer'>
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
