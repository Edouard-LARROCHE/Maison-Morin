import React from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Rouge from '../../../components/gallery/cave/Rouge';
import TopArrow from '../../../components/TopArrow';

const CaveRouge = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <Rouge />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default CaveRouge;
