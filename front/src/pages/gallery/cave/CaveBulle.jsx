import React from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Bulle from '../../../components/gallery/cave/Bulle';
import TopArrow from '../../../components/TopArrow';

const CaveBulle = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <Bulle />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default CaveBulle;
