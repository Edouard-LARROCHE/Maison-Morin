import React from 'react';
import Footer from '../../components/home/Footer';
import NavBar from '../../components/home/NavBar';
import HeadBand from '../../components/HeadBand';
import MenuDrop from '../../components/dropDown/MenuDrop';
import ProduitsDexception from '../../components/gallery/ProduitsDexception';
import TopArrow from '../../components/TopArrow';

const PageProduitsDexception = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <MenuDrop />
      <ProduitsDexception />
      <Footer />
      <TopArrow />
    </div>
  );
};

export default PageProduitsDexception;
