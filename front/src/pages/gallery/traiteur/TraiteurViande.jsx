import React, { useContext } from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Viandes from '../../../components/gallery/traiteur/Viandes';
import TopArrow from '../../../components/TopArrow';
import UserBar from '../../../components/userConnectBar/UserBar';
import { UidContext } from '../../../AppContext';

const TraiteurViande = () => {
  const uid = useContext(UidContext);
  return (
    <>
      {uid ? (
        <div>
          <UserBar />
          <NavBar />
          <HeadBand />
          <MenuDrop />
          <Viandes />
          <Footer />
          <TopArrow />
        </div>
      ) : (
        <div>
          <NavBar />
          <HeadBand />
          <MenuDrop />
          <Viandes />
          <Footer />
          <TopArrow />
        </div>
      )}
    </>
  );
};

export default TraiteurViande;
