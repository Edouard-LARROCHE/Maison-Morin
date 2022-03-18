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
          <h1>NOS PÂTISSERIES</h1>
          <div className='V-position'>
            <div className="V-line"></div>
          </div>
        </div>
        <div className={text}>
          <p>
            Venez découvrir des douceurs qui vont enjoliver votre journée, Maison Morin vous propose des pâtisseries variées afin que vous trouviez votre bonheur.
          </p>
          <br />
          <p> Du gâteau au chocolat à la tarte aux fruits, pour vous, votre famille ou un évènement vous trouverez ce qu'il vous faut chez Maison Morin.</p>
          <br />
          <br />
          <p>Venez découvrir nos réalisations qui, nous en sommes sûr, vous donneront envie!</p>
        </div>
      </div>
      <div className={linkTo}>
        <Link to='/patisseries'>
          <p>NOS RÉALISATIONS »</p>
        </Link>
      </div>
    </div>
  );
};

export default DisplayScroll;
