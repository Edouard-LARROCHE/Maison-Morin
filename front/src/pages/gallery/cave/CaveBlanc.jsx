import React from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Blanc from '../../../components/gallery/cave/Blanc';
import TopArrow from '../../../components/TopArrow';

const CaveBlanc = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <Blanc />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default CaveBlanc;
