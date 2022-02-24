import React from 'react';
import NavBar from '../components/home/NavBar';
import MenuDrop from '../components/dropDown/MenuDrop';
import Header from '../components/home/Header';
import Second from '../components/home/Middle';
import Footer from '../components/home/Footer';
import Infos from '../components/home/Infos';
import NewsLetter from '../components/newsletter/NewsLetter';
import HeadBand from '../components/HeadBand';
import Band from '../components/home/Band';
import Avis from '../components/Avis';
import DisplayScroll from '../components/home/DisplayScroll';
import DisplayScrollSecond from '../components/home/DisplayScrollSecond';

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <Header />
      <DisplayScroll />
      <DisplayScrollSecond />
      <Band />
      <Second />
      <Infos />
      <Avis />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
