import React from 'react';
import Footer from '../../components/home/Footer';
import NavBar from '../../components/home/NavBar';
import HeadBand from '../../components/HeadBand';
import MenuDrop from '../../components/dropDown/MenuDrop';
import Cocktails from '../../components/gallery/Cocktails';
import TopArrow from '../../components/TopArrow';

const PageCocktails = () => {
    return (
        <div>
        <NavBar />
        <HeadBand />
        <MenuDrop />
        <Cocktails />
        <Footer />
        <TopArrow />
        </div>
    );
};

export default PageCocktails;
