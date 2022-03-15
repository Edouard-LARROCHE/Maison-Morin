import React from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Patisseries from '../../../components/gallery/patisserie/Patisseries';
import TopArrow from '../../../components/TopArrow';

const NosPatisseries = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <Patisseries />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default NosPatisseries;
