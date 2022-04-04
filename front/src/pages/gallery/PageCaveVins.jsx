import React from 'react';
import Footer from '../../components/home/Footer';
import NavBar from '../../components/home/NavBar';
import HeadBand from '../../components/HeadBand';
import MenuDrop from '../../components/dropDown/MenuDrop';
import CaveVins from '../../components/gallery/CaveVins';
import TopArrow from '../../components/TopArrow';

const PageCaveVins = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <CaveVins />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default PageCaveVins;
