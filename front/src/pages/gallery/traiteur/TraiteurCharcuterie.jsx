import React from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Charcuterie from '../../../components/gallery/traiteur/Charcuterie';
import TopArrow from '../../../components/TopArrow';

const TraiteurCharcuterie = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <Charcuterie />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default TraiteurCharcuterie;
