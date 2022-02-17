import React from 'react';
import NavBar from '../components/home/NavBar';
import MenuDrop from '../components/dropDown/MenuDrop';
import Header from '../components/home/Header';
import Second from '../components/home/Middle';
import Footer from '../components/home/Footer';
import Infos from '../components/home/Infos';
import Carou from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <NavBar />
      <MenuDrop />
      <Carou />
      <Header />
      <Second />
      <Infos />
      <Footer />
    </div>
  );
};

export default Home;
