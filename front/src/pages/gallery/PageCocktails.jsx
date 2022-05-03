import React, { useContext } from 'react';
import Footer from '../../components/home/Footer';
import NavBar from '../../components/home/NavBar';
import HeadBand from '../../components/HeadBand';
import MenuDrop from '../../components/dropDown/MenuDrop';
import Cocktails from '../../components/gallery/Cocktails';
import TopArrow from '../../components/TopArrow';
import UserBar from '../../components/UserBar';
import { UidContext } from '../../AppContext';

const PageCocktails = () => {
  const uid = useContext(UidContext);
  return (
    <>
      {uid ? (
        <div>
          <UserBar />
          <NavBar />
          <HeadBand />
          <MenuDrop />
          <Cocktails />
          <Footer />
          <TopArrow />
        </div>
      ) : (
        <div>
          <NavBar />
          <HeadBand />
          <MenuDrop />
          <Cocktails />
          <Footer />
          <TopArrow />
        </div>
      )}
    </>
  );
};

export default PageCocktails;
