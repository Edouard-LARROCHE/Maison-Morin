import React from 'react';
import MenuDrop from '../components/dropDown/MenuDrop';
import HeadBand from '../components/HeadBand';
import Footer from '../components/home/Footer';
import NavBar from '../components/home/NavBar';
import NewsLetter from '../components/newsletter/NewsLetter';
import ShopCart from '../components/shopCart/ShopCart';
import TopArrow from '../components/TopArrow';

const ShopCartIndex = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <ShopCart />
      <div className='line'></div>
      <NewsLetter />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default ShopCartIndex;
