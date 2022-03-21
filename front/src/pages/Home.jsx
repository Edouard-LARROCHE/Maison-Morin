import React from 'react';
import NavBar from '../components/home/NavBar';
import MenuDrop from '../components/dropDown/MenuDrop';
// import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import Infos from '../components/home/Infos';
import NewsLetter from '../components/newsletter/NewsLetter';
import HeadBand from '../components/HeadBand';
import Band from '../components/home/Band';
// import DisplayScroll from '../components/home/DisplayScrollFirst';
// import DisplayScrollSecond from '../components/home/DisplayScrollSecond';
// import DisplayScrollThird from '../components/home/DisplayScrollThird';
import Avis from '../components/Avis';
import TopArrow from '../components/TopArrow';
import Selection from '../components/Selection';
import Menu from '../components/menu/Menu';
import BottomCard from '../components/home/BottomCard';

const Home = () => {
  return (
    <>
      <div>
        <NavBar />
        <HeadBand />
        <MenuDrop />
        <Band />
        <Selection />
        <Menu />
        <BottomCard />
        {/* <Header />
        <DisplayScroll />
        <DisplayScrollSecond />
        <DisplayScrollThird /> */}
        <Infos />
        <Avis />
        <NewsLetter />
        <Footer />
        <TopArrow />
      </div>
    </>
  );
};

export default Home;
