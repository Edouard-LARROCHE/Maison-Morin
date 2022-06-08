import React, { useContext } from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Macarons from '../../../components/gallery/patisserie/Macarons';
import TopArrow from '../../../components/TopArrow';
import UserBar from '../../../components/userConnectBar/UserBar';
import { UidContext } from '../../../AppContext';
import UserNoconnectBar from '../../../components/userNoConnectBar/UserNoConnectBar';

const PatisserieMacaron = () => {
  const uid = useContext(UidContext);
  return (
    <>
      {uid ? (
        <div>
          <UserBar />
          <NavBar />
          <HeadBand />
          <MenuDrop />
          <Macarons />
          <Footer />
          <TopArrow />
        </div>
      ) : (
        <div>
          <UserNoconnectBar />
          <NavBar />
          <HeadBand />
          <MenuDrop />
          <Macarons />
          <Footer />
          <TopArrow />
        </div>
      )}
    </>
  );
};

export default PatisserieMacaron;
