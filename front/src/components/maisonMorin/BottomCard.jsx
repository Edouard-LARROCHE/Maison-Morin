import React from 'react';

const BottomCard = () => {
  return (
    <div className='traiteur-card'>
      <h2>
        Comme tout traiteur qui se respecte, nous proposons des produits « maison » fait à base de productions majoritairement locales. Et surtout, il
        a innové en rajoutant la pâtisserie, une véritable passion pour lui, et se spécialise également sur le poisson. « Faire perdurer en local,
        tout en gardant l’esprit de famille, un commerce de plus de 30 ans, c’est un véritable challenge que je veux gagner ! »
      </h2>
      <div className='card'>
        <h3>
          Bien évidement, la Maison Morin peut également organiser vos soirées et afin de répondre à toutes les attentes de ses clients, le jeune
          patron cherche à embaucher 4 personnes en cuisine et en boutique.
        </h3>
        <img src='/assets/index10.jpeg' alt='traiteur' />
        <div className='btn-card'>
          <p>Je m'inscris</p>
        </div>
      </div>
    </div>
  );
};

export default BottomCard;
