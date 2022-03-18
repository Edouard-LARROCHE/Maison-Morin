import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DisplayScrollSecond = () => {
  const [headText, setHeadText] = useState('head-text-before');
  const [picture, setPicture] = useState('picture-second-before');
  const [title, setTitle] = useState('title-header-before');
  const [text, setText] = useState('text-content-before');
  const [linkTo, setLinkTo] = useState('link-to-second-before');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1150) {
        setHeadText('head-text');
        setPicture('picture-second');
        setTimeout(() => {
          setTitle('title-header');
        }, 500);
      }
      if (window.scrollY >= 1300) {
        setText('text-content');
      }
      if (window.scrollY >= 1500) {
        setLinkTo('link-to-second');
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='display-second'>
      <div className={picture}>
        <img src='/assets/baron.png' alt='picute2' />
      </div>
      <div className='text-second'>
        <div className={headText}>Une Gamme Préstigieuse</div>
        <div className={title}>
          <h1>LA CAVE À VIN</h1>
          <div className='V-position'>
            <div className="V-line"></div>
          </div>
        </div>
        <div className={text}>
          <p>
            Découvrez une variété de vins, du blanc au rouge en passant par le rosé, Maison Morin sélectionne des produits de qualités.
          </p>
          <br />
          <p>Pour une occasion, un repas, un apéro ou pour votre plaisir personnel, goûtez nos vins qui raviveront vos papilles.</p>
        </div>
      </div>
      <div className={linkTo}>
        <Link to='/cave-a-vins'>
          <p>DECOUVRIR NOTRE GAMME »</p>
        </Link>
      </div>
    </div>
  );
};

export default DisplayScrollSecond;
