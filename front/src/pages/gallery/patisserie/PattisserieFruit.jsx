import React from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Fruits from '../../../components/gallery/patisserie/Fruits';
import TopArrow from '../../../components/TopArrow';

const PatisserieFruit = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <Fruits />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default PatisserieFruit;
