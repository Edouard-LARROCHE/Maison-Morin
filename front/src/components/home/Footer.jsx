import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top-footer'>
        <img src='/logo/Or.png' alt='logo-morin' />
      </div>
      <div className='bottom-footer'>
        <ul>
          <li>
            <h2>NOUS TROUVER</h2>
          </li>
          <li>
            <Link to='/boutique'>
              <p>Notre boutique</p>
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              <p> Contactez-nous</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <h2>EN SAVOIR PLUS</h2>
          </li>
          <li>
            <Link to='/maison-morin'>
              <p>La maison Morin</p>
            </Link>
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
            <Link to='/mentions-legales'>
              <p>Mentions légales</p>
            </Link>
          </li>
          <li>
            <Link to='/cookie'>
              <p>Cookies</p>
            </Link>
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
          <li style={{ color: '#012f6b' }}> {new Date().getFullYear()} </li>
        </ul>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
