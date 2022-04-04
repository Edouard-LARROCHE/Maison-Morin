import React from 'react';
import DataMenu from './DataMenu';

const Menu = () => {
  return (
    <div className='menu'>
      <h1>NOTRE CARTE</h1>
      <div className='text-selection-menu'>
        <p>NOTRE CARTE ACTUELLE</p>
        <p style={{ fontSize: '10px', marginTop: '0.5rem' }}>POUR EN SAVOIR PLUS SUR NOTRE CARTE, RENDEZ-VOUS SUR LA GALERIE</p>
        <br />
        <div className='line2' />
      </div>
      <DataMenu />
    </div>
  );
};

export default Menu;
