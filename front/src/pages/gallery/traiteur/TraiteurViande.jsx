import React from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Viandes from '../../../components/gallery/traiteur/Viandes';
import TopArrow from '../../../components/TopArrow';

const TraiteurViande = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <Viandes />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default TraiteurViande;
