import React from 'react';
import { Link } from 'react-router-dom';

const BottomCard = () => {
  return (
    <div className='traiteur-card'>
      <h1>TRAITEUR INCONTOURNABLE</h1>
      <p>TRAITEUR DEPUIS 1989</p>
      <br />
      <div className='line2' />
      <br />
      <p className='traiteur-txt'>
        Comme tout traiteur qui se respecte, nous proposons des produits « maison » faits à base de productions majoritairement locales. Et surtout, il
        a innové en rajoutant la pâtisserie, une véritable passion pour lui, et se spécialise également sur le poisson. « Faire perdurer en local,
        tout en gardant l’esprit de famille, un commerce de plus de 30 ans, c’est un véritable challenge que je veux gagner ! »
      </p>
      <br />
      <div className='card-traiteur'>
        <h3>Bien évidement, la Maison Morin peut également organiser vos soirées pour répondre à toutes vos attentes.</h3>
        <div className='btn-position'>
          <div className='btn-card'>
            <Link to='/contact'>
              <p>NOUS CONTACTER</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCard;
