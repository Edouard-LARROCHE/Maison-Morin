import React from 'react';

const Header = () => {
  return (
    <div className='header-home'>
      <div className='text-head'>
        <h3> BONJOUR & BIENVENUE</h3>
        <div className='color-text'>
          <h1 style={{ color: '#ddb355' }}>Traiteur</h1>
          <h1> traditionnel français</h1>
          <h1 style={{ color: '#ddb355' }}> Maison-Morin</h1>
        </div>
        <div className='vertical-line' />
        <div className='text-content'>
          <p>Notre boutique traîteur en Seine et Marne est spécialisée en cuisine traditionnelle française.</p>
          <p>Nous vous proposons de nombreux plats régionaux et plats du terroir variés. Nous utilisons des produits frais et de saison.</p>
          <br />
          <p>
            Nous les sélectionnons minutieusement chez nos fournisseurs français et locaux. Chez la Maison Morin nous cultivons la culture du goût.
            Pour nous, le plus important est la qualité de nos matières premières, qui révèlent des saveurs spectaculaires.
          </p>
          <br />
          <br />
          <p>Nous changeons régulièrement la carte pour renouveler continuellement vos expériences et vous surprendre.</p>
        </div>
        <div className='vertical-line' />
      </div>
      {/* <div className='picture-head'>
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
      </div> */}
    </div>
  );
};

export default Header;
