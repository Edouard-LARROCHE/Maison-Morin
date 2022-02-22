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

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <Carou />
      <Header />
      <Second />
      <Infos />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
