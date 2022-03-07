import React from 'react';

const Content1 = () => {
  return (
    <div className='head-content'>
      <div className='left-content'>
        <div className='back-text'>
          <p>LA MAISON MORIN À BARBIZON</p>
          <br />
          <div className='line2' />
          <br />
          <p>
            C’est un véritable passage de témoins père-fils qui a eu lieu autour de la Maison Morin à Barbizon (Seine-et-Marne), très prisée des
            habitants et des touristes. Laurent Morin a ouvert sa charcuterie en 1989.
          </p>
          <br />
          <p>
            Un commerce de bouche comme il en existe tant et qui au fur et mesure des années, a su se diversifier et devenir une boutique prisée dans
            la région. Mais voilà l’heure de la retraite a sonné pour le propriétaire et il s’agissait de trouver un successeur.
          </p>
          <br />
          <p>
            Et c’est donc son fils Victorien qui a pris le relais. Un choix étonnant pour celui dont les études ne le destinait pas à un métier de
            bouche.
          </p>
        </div>
      </div>
      <div className='right-content'>
        <img src='/assets/welcome.jpeg' alt='comptoir' />
      </div>
    </div>
  );
};

export default Content1;
