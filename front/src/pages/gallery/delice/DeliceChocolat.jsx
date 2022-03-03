import React from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Chocolat from '../../../components/gallery/delice/Chocolat';
import TopArrow from '../../../components/TopArrow';

const DeliceChocolat = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <Chocolat />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default DeliceChocolat;
