import React, { useEffect, useState } from 'react';
import NavBar from '../components/home/NavBar';
import MenuDrop from '../components/dropDown/MenuDrop';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import Infos from '../components/home/Infos';
import NewsLetter from '../components/newsletter/NewsLetter';
import HeadBand from '../components/HeadBand';
import Band from '../components/home/Band';
import DisplayScroll from '../components/home/DisplayScrollFirst';
import DisplayScrollSecond from '../components/home/DisplayScrollSecond';
import DisplayScrollThird from '../components/home/DisplayScrollThird';
import Avis from '../components/Avis';
import Transition from './Transition';
import TopArrow from '../components/TopArrow';
import Selection from '../components/Selection';

const Home = () => {
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const trans = () => {
      setTransition(true);
    };
    setTimeout(() => {
      trans();
      setTransition(false);
    }, 2500);
  }, []);

  return (
    <>
      {transition ? (
        <div>
          <Transition />
        </div>
      ) : (
        <div>
          <NavBar />
          <HeadBand />
          <MenuDrop />
          <Band />
          <Selection />
          <Header />
          <DisplayScroll />
          <DisplayScrollSecond />
          <DisplayScrollThird />
          <Infos />
          <Avis />
          <NewsLetter />
          <Footer />
          <TopArrow />
        </div>
      )}
    </>
  );
};

export default Home;
