import React from 'react';
import NavBar from '../components/home/NavBar';
import Header from '../components/maisonMorin/Header';
import Footer from '../components/home/Footer';
import Middle from '../components/maisonMorin/Middle';
import HeadBand from '../components/HeadBand';

const MaisonMorin = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <Header />
      <Middle />
      <Footer />
    </div>
  );
};

export default MaisonMorin;
