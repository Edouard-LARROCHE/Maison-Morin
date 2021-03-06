import React, { useContext } from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Charcuterie from '../../../components/gallery/traiteur/Charcuterie';
import TopArrow from '../../../components/TopArrow';
import UserBar from '../../../components/userConnectBar/UserBar';
import { UidContext } from '../../../AppContext';
import UserNoconnectBar from '../../../components/userNoConnectBar/UserNoConnectBar';

const TraiteurCharcuterie = () => {
  const uid = useContext(UidContext);
  return (
    <>
      {uid ? (
        <div>
          <UserBar />
          <NavBar />
          <HeadBand />
          <MenuDrop />
          <Charcuterie />
          <Footer />
          <TopArrow />
        </div>
      ) : (
        <div>
          <UserNoconnectBar />
          <NavBar />
          <HeadBand />
          <MenuDrop />
          <Charcuterie />
          <Footer />
          <TopArrow />
        </div>
      )}
    </>
  );
};

export default TraiteurCharcuterie;
