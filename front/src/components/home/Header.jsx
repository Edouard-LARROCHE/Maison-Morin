import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [display, setDisplay] = useState('link-to-before');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 118) {
        return setDisplay('link-to');
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='header-home'>
      <div className='picture-header'>
        <img src='/assets/index9.jpeg' alt='picute1' />
      </div>
      <div className='text-header'>
        <div className='head-text'>Votre satisfaction avant tout</div>
        <div className='title-header'>
          <h1>TRAITEUR TRADITIONNEL</h1>
        </div>
        <div className='V-position'>
          <img className='V' src='/logo/V.png' alt='V' style={{ width: '2rem' }} />
        </div>
        <div className='text-content'>
          <p>Notre boutique traîteur en Seine et Marne est spécialisée en cuisine traditionnelle française.</p>
          <br />
          <p>Nous vous proposons de nombreux plats régionaux et plats du terroir variés. Nous utilisons des produits frais et de saison.</p>
        </div>
      </div>
      <div className={display}>
        <Link to='/maison-morin'>
          <p>DECOUVRIR LA MAISON »</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
