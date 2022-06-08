import React, { useContext } from 'react';
import NavBar from '../components/home/NavBar';
import MenuDrop from '../components/dropDown/MenuDrop';
import Footer from '../components/home/Footer';
import Infos from '../components/home/Infos';
import NewsLetter from '../components/newsletter/NewsLetter';
import HeadBand from '../components/HeadBand';
import Band from '../components/home/Band';
import Avis from '../components/Avis';
import TopArrow from '../components/TopArrow';
import Selection from '../components/Selection';
import Menu from '../components/menu/Menu';
import BottomCard from '../components/home/BottomCard';
import { UidContext } from '../AppContext';
import UserBar from '../components/userConnectBar/UserBar';
import UserNoconnectBar from '../components/userNoConnectBar/UserNoConnectBar';

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <>
      {uid ? (
        <div>
          <UserBar />
          <NavBar />
          <HeadBand />
          <MenuDrop />
          <Band />
          <Selection />
          <Menu />
          <BottomCard />
          <Infos />
          <Avis />
          <NewsLetter />
          <Footer />
          <TopArrow />
        </div>
      ) : (
        <div>
          <UserNoconnectBar />
          <NavBar />
          <HeadBand />
          <MenuDrop />
          <Band />
          <Selection />
          <Menu />
          <BottomCard />
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
