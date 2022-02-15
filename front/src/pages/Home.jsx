import React from 'react';
import NavBar from '../components/home/NavBar';
import MenuDrop from '../components/dropDown/MenuDrop';
import Header from '../components/home/Header';
import Middle from '../components/home/Middle';
import Footer from '../components/home/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <MenuDrop />
      <Header />
      <Middle />
      <Footer />
    </div>
  );
};

export default Home;
