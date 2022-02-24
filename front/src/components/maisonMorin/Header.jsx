import React from 'react';

const Header = () => {
  return (
    <div className='head-text'>
      <h1>LA MAISON MORIN À BARBIZON</h1>
      <div className='V-position'>
        <img className='V' src='/logo/V.png' alt='V' style={{ width: '2rem' }} />
      </div>
      <br />
      <p>
        C’est un véritable passage de témoins père-fils qui a eu lieu autour de la Maison Morin à Barbizon (Seine-et-Marne), très prisée des habitants
        et des touristes. Laurent Morin a ouvert sa charcuterie en 1989.
      </p>
      <br />
      <p className='bottom-text'>
        Un commerce de bouche comme il en existe tant et qui au fur et mesure des années, a su se diversifier et devenir une boutique prisée dans la
        région. Mais voilà l’heure de la retraite a sonné pour le propriétaire et il s’agissait de trouver un successeur.
      </p>
      <br />
      <p>
        Et c’est donc son fils Victorien qui a pris le relais. Un choix étonnant pour celui dont les études ne le destinait pas à un métier de bouche.
      </p>
    </div>
  );
};

export default Header;
