import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DisplayScroll = () => {
  const [headText, setHeadText] = useState('head-text-before');
  const [picture, setPicture] = useState('picture-first-before');
  const [title, setTitle] = useState('title-header-before');
  const [text, setText] = useState('text-content-before');
  const [linkTo, setLinkTo] = useState('link-to-first-before');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setHeadText('head-text');
        setPicture('picture-first');
      }
      if (window.scrollY >= 700) {
        setTitle('title-header');
      }
      if (window.scrollY >= 800) {
        setText('text-content');
      }
      if (window.scrollY >= 1000) {
        setLinkTo('link-to-first');
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, [setHeadText, setPicture, setTitle, setText, setLinkTo]);

  return (
    <div className='display-first'>
      <div className={picture}>
        <img src='/assets/patisserie5.jpeg' alt='picure1' />
      </div>
      <div className='text-first'>
        <div className={headText}>Une Passion au Quotidien </div>
        <div className={title}>
          <h1>NOS PÂTISSERIE</h1>
          <div className='V-position'>
            {/* <img className='V' src='/logo/V.png' alt='V' style={{ width: '2rem' }} /> */}
            <div className="V-line"></div>
          </div>
        </div>
        <div className={text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos amet corrupti molestias accusamus eligendi praesentium similique architecto,
            porro, eius perspiciatis libero tempore deleniti ad. Odio placeat rem veritatis totam excepturi!
          </p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolores accusantium? Nostrum sit quasi labore!</p>
        </div>
      </div>
      <div className={linkTo}>
        <Link to='/'>
          <p>NOS RÉALISATIONS »</p>
        </Link>
      </div>
    </div>
  );
};

export default DisplayScroll;
