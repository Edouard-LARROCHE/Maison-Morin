import React from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Cakes from '../../../components/gallery/patisserie/Cakes';
import TopArrow from '../../../components/TopArrow';

const PatisserieCake = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <Cakes />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default PatisserieCake;
