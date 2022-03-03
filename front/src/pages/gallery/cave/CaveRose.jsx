import React from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Rose from '../../../components/gallery/cave/Rose';
import TopArrow from '../../../components/TopArrow';

const CaveRose = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <Rose />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default CaveRose;
