import React from 'react';
import NavBar from '../components/home/NavBar';
import MenuDrop from '../components/dropDown/MenuDrop';
import Header from '../components/home/Header';
import Second from '../components/home/Middle';
import Footer from '../components/home/Footer';
import Infos from '../components/home/Infos';
import Carou from '../components/Carousel';
import NewsLetter from '../components/newsletter/NewsLetter';
import HeadBand from '../components/HeadBand';
import Band from '../components/home/Band';
import Avis from '../components/Avis';

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <Carou />
      <Header />
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
