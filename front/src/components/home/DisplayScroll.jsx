import React from 'react';
import { Link } from 'react-router-dom';

const DisplayScroll = () => {
  return (
    <div className='display-first'>
      <div className='picture-first'>
        <img src='/assets/macaron.png' alt='picute1' />
      </div>
      <div className='text-first'>
        <div className=''>Une Passion au Quotidien </div>
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
      <div className=''>
        <Link to='/'>
          <p>DECOUVRIR LA MAISON »</p>
        </Link>
      </div>
    </div>
  );
};

export default DisplayScroll;
