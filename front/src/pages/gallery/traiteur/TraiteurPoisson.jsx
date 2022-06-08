import React, { useContext } from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Poissons from '../../../components/gallery/traiteur/Poissons';
import TopArrow from '../../../components/TopArrow';
import UserBar from '../../../components/userConnectBar/UserBar';
import { UidContext } from '../../../AppContext';
import UserNoconnectBar from '../../../components/userNoConnectBar/UserNoConnectBar';

const TraiteurPoisson = () => {
  const uid = useContext(UidContext);
  return (
    <>
      {uid ? (
        <div>
          <UserBar />
          <NavBar />
          <HeadBand />
          <MenuDrop />
          <Poissons />
          <Footer />
          <TopArrow />
        </div>
      ) : (
        <div>
          <UserNoconnectBar />
          <NavBar />
          <HeadBand />
          <MenuDrop />
          <Poissons />
          <Footer />
          <TopArrow />
        </div>
      )}
    </>
  );
};

export default TraiteurPoisson;
