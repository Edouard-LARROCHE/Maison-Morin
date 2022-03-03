import React from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Poissons from '../../../components/gallery/traiteur/Poissons';
import TopArrow from '../../../components/TopArrow';

const TraiteurPoisson = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <Poissons />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default TraiteurPoisson;
