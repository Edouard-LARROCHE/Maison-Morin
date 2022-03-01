import React from 'react';
import Footer from '../components/home/Footer';
import NavBar from '../components/home/NavBar';
import HeadBand from '../components/HeadBand';
import Traiteur from '../components/gallery/Traiteur';

const Gallery = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <Traiteur />
      <Footer />
    </div>
  );
};

export default Gallery;
