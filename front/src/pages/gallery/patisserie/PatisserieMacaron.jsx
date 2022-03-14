import React from 'react';
import Footer from '../../../components/home/Footer';
import NavBar from '../../../components/home/NavBar';
import HeadBand from '../../../components/HeadBand';
import MenuDrop from '../../../components/dropDown/MenuDrop';
import Macarons from '../../../components/gallery/patisserie/Macarons';
import TopArrow from '../../../components/TopArrow';

const PatisserieMacaron = () => {
    return (
        <div>
        <NavBar />
        <HeadBand />
        <MenuDrop />
        <Macarons />
        <Footer />
        <TopArrow />
        </div>
    );
};

export default PatisserieMacaron;
