import React from 'react';
import MenuDrop from '../components/dropDown/MenuDrop';
import Footer from '../components/home/Footer';
import NavBar from '../components/home/NavBar';

const Home = () => {
  return (
    <div>
      <NavBar />
      <MenuDrop />
      <Footer />
    </div>
  );
};

export default Home;
