import React from 'react';

const DisplayScrollThird = () => {
  return (
    <>
      <div className='display-third'>
        <div className='head-text-third'>TRAITEUR MAISON-MORIN</div>
        <div className='head-title-third'>
          <h1>PRESTATAIRE INCONTOURNABLE</h1>
          <div className='V-position'>
            <img className='V' src='/logo/V.png' alt='V' style={{ width: '2rem' }} />
          </div>
        </div>
      </div>
      <div className='presta-list'>
        <ul>
          <li>Buffet</li>
          <li>Séminaire</li>
          <li>Mariage</li>
          <li>Naissance</li>
          <li>Pot de départ</li>
          <li>Baptême</li>
          <li>Anniversaire</li>
          <li>Cocktail</li>
          <li>Repas assis</li>
        </ul>
      </div>
    </>
  );
};

export default DisplayScrollThird;
