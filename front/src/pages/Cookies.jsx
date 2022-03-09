import React from 'react';
import Cookie from '../components/cookie/Cookie';
import Footer from '../components/home/Footer';
import NavBar from '../components/home/NavBar';
import HeadBand from '../components/HeadBand';
import DropWithoutMenu from '../components/dropDown/DropWithoutMenu';

const Cookies = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <DropWithoutMenu />
      <div className='cookies'>
        <Cookie />
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
