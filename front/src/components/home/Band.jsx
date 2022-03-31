import React from 'react';
import { Link } from 'react-router-dom';

const Band = () => {
  return (
    <div className='Band-enter'>
      <div className='band-txt'>
        <h1>MAISON MORIN</h1>
        <p className='txt-in'>Nous sélectionnons avec soin nos fournisseurs et privilégions dans la mesure du possible des productions locales.</p>
        <p className='txt-in'>
          Nous favorisons quotidiennement des produits frais pour valoriser une offre de saison. Fraicheur et naturalité sont conjuguées pour exhaler
          davantage la qualité gustative de nos recettes.
        </p>
        <div className='btn-band'>
          <Link to='/maison-morin'>
            <p>Découvrir</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Band;
