import React from 'react';
import NavBar from '../components/home/NavBar';
import Header from '../components/maisonMorin/Header';
import Footer from '../components/home/Footer';
import Middle from '../components/maisonMorin/Middle';
import HeadBand from '../components/HeadBand';
import BottomCard from '../components/maisonMorin/BottomCard';
import TopArrow from '../components/TopArrow';

const MaisonMorin = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <Header />
      <Middle />
      <BottomCard />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default MaisonMorin;
