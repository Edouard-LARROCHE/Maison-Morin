import React from 'react';

const Header = () => {
  return (
    <div className='header-home'>
      <div className='picture-header'>
        <img src='/assets/index9.jpeg' alt='picute1' />
      </div>
      <div className='text-header'>
        <div className='satisfaction'>Votre satisfaction avant tout</div>
        <div className='title-header'>
          <h1>TRAITEUR TRADITIONNEL</h1>
        </div>
        <div className='vertical-line' />
        <div className='text-content'>
          <p>Notre boutique traîteur en Seine et Marne est spécialisée en cuisine traditionnelle française.</p>
          <p>Nous vous proposons de nombreux plats régionaux et plats du terroir variés. Nous utilisons des produits frais et de saison.</p>
        </div>
        <div className='vertical-line' />
      </div>
      <div className='link-to'>
        <p>Découvrir la Maison</p>
      </div>
    </div>
  );
};

export default Header;
