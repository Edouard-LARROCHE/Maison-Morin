import React from 'react';
import NavBar from '../components/home/NavBar';
import Footer from '../components/home/Footer';
import HeadBand from '../components/HeadBand';
import BottomCard from '../components/maisonMorin/BottomCard';
import TopArrow from '../components/TopArrow';
import Content1 from '../components/maisonMorin/Content1';
import Content2 from '../components/maisonMorin/Content2';
import Content3 from '../components/maisonMorin/Content3';
import Content4 from '../components/maisonMorin/Content4';

const MaisonMorin = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <BottomCard />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default MaisonMorin;
