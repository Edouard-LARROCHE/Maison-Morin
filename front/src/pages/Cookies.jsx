import React from 'react';
import Cookie from '../components/cookie/Cookie';
import Footer from '../components/home/Footer';
import NavBar from '../components/home/NavBar';
import HeadBand from '../components/HeadBand';

const Cookies = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <div className='cookies'>
        <Cookie />
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
