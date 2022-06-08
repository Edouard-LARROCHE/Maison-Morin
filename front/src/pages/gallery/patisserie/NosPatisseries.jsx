import React, { useContext } from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Patisseries from '../../../components/gallery/patisserie/Patisseries';
import TopArrow from '../../../components/TopArrow';
import UserBar from '../../../components/userConnectBar/UserBar';
import { UidContext } from '../../../AppContext';
import UserNoconnectBar from '../../../components/userNoConnectBar/UserNoConnectBar';

const NosPatisseries = () => {
  const uid = useContext(UidContext);
  return (
    <>
      {uid ? (
        <div>
          <UserBar />
          <NavBar />
          <HeadBand />
          <MenuDrop />
          <Patisseries />
          <Footer />
          <TopArrow />
        </div>
      ) : (
        <div>
          <UserNoconnectBar />
          <NavBar />
          <HeadBand />
          <MenuDrop />
          <Patisseries />
          <Footer />
          <TopArrow />
        </div>
      )}
    </>
  );
};

export default NosPatisseries;
