import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-home'>
      <div className='text-head'>
        <p> BONJOUR & BIENVENUE</p>
        <h1>Traiteur traditionnel français Maison-Morin</h1>
        <div className='vertical-line' />
        <div className='text-content'>
          <p>
            Notre boutique traîteur en Seine et Marne est spécialisé en cuisine traditionnelle française. Nous vous proposons de nombreux plats
            régionaux et plats du terroir variés. Nous utilisons des produits frais et de saison.
          </p>
          <div className='vertical-line2' />
          <p>
            Nous les sélectionnons minutieusement chez nos fournisseurs français et locaux. Au Grand Vertois nous cultivons la culture du goût. Pour
            nous, le plus important est la qualité de nos matières premières, qui révèlent des saveurs spectaculaires.
          </p>
          <div className='vertical-line2' />
          <p>Nous changeons régulièrement la carte pour renouveler continuellement vos expériences et vous surprendre.</p>
        </div>
      </div>
      <div className='picture-head'>
        <div className='picture-1'>
          <Link to='/'>
            <img src='/assets/cake-3.png' alt='cake3' style={{ width: '15rem' }} />
          </Link>
        </div>
        <div className='diagonal-border'>
          <div className='diag-line' />
          <div className='diag-line-neg' />
        </div>
        <div className='picture-bottom'>
          <div className='picture-2'>
            <Link to='/'>
              <img src='/assets/cake9.png' alt='cake9' style={{ width: '15rem' }} />
            </Link>
          </div>
          <div className='horizontal-line'>
            <div className='hori-line' />
          </div>
          <div className='picture-3'>
            <Link to='/'>
              <img src='/assets/cake-10.png' alt='cake10' style={{ width: '15rem' }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
