import React from 'react';
import NavBar from '../components/home/NavBar';
import Footer from '../components/home/Footer';
import HeadBand from '../components/HeadBand';
import BottomCard from '../components/maisonMorin/BottomCard';
import TopArrow from '../components/TopArrow';
import Content1 from '../components/maisonMorin/Content1';
import Content2 from '../components/maisonMorin/Content2';

const MaisonMorin = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <Content1 />
      <Content2 />
      <BottomCard />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default MaisonMorin;
