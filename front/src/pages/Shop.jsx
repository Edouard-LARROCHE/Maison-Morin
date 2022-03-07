import React from 'react';
import NavBar from '../components/home/NavBar';
import Map from '../components/Shop/Map';
import HeadBand from '../components/HeadBand';
import Footer from '../components/home/Footer';
import NewsLetter from '../components/newsletter/NewsLetter';
import TopArrow from '../components/TopArrow';

const Shop = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <Map />
      <div className='line'></div>
      <NewsLetter />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default Shop;
