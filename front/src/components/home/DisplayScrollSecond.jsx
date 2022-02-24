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
  });

  return (
    <div className='display-second'>
      <div className={picture}>
        <img src='/assets/baron-champagne.png' alt='picute2' />
      </div>
      <div className='text-second'>
        <div className={headText}>Une Gamme Préstigieuse</div>
        <div className={title}>
          <h1>LA CAVE À VIN</h1>
          <div className='V-position'>
            <img className='V' src='/logo/V.png' alt='V' style={{ width: '2rem' }} />
          </div>
        </div>
        <div className={text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae, error laborum facere laudantium, fugiat sapiente molestiae a
            in vero consequuntur.
          </p>
          <br />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus et quas cum natus, nostrum quam.</p>
        </div>
      </div>
      <div className={linkTo}>
        <Link to='/'>
          <p>DECOUVRIR NOTRE GAMME »</p>
        </Link>
      </div>
    </div>
  );
};

export default DisplayScrollSecond;
