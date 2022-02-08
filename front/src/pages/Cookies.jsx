import React from 'react';
import Cookie from '../components/cookie/Cookie';
import Footer from '../components/home/Footer';
import NavBar from '../components/home/NavBar';

const Cookies = () => {
  return (
    <div>
      <NavBar />
      <div className='cookies'>
        <Cookie />
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
