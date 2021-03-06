import React from 'react';
import NavBar from '../components/home/NavBar';
import Footer from '../components/home/Footer';
import HeadBand from '../components/HeadBand';
import TopArrow from '../components/TopArrow';
import Content1 from '../components/maisonMorin/Content1';
import Content2 from '../components/maisonMorin/Content2';
import Content3 from '../components/maisonMorin/Content3';
import Content4 from '../components/maisonMorin/Content4';
import Content5 from '../components/maisonMorin/Content5';
import NewsLetter from '../components/newsletter/NewsLetter';
import DropWithoutMenu from '../components/dropDown/DropWithoutMenu';
import Content from '../components/maisonMorin/Content';

const MaisonMorin = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <DropWithoutMenu />
      <Content />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <div className='line'></div>
      <NewsLetter />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default MaisonMorin;
