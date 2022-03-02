import React from 'react';
import Footer from '../components/home/Footer';
import NavBar from '../components/home/NavBar';
import HeadBand from '../components/HeadBand';
import MenuDrop from '../components/dropDown/MenuDrop';
import Traiteur from '../components/gallery/Traiteur';
import TopArrow from '../components/TopArrow';

const Gallery = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <Traiteur />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default Gallery;
