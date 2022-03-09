import React from 'react';
import NavBar from '../components/home/NavBar';
import Footer from '../components/home/Footer';
import Notice from '../components/legalNotice/Notice';
import Copyright from '../components/legalNotice/Copyright';
import UserTraces from '../components/legalNotice/UserTraces';
import HeadBand from '../components/HeadBand';
import TopArrow from '../components/TopArrow';
import DropWithoutMenu from '../components/dropDown/DropWithoutMenu';

const LegalNotice = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <DropWithoutMenu />
      <div className='all-notice'>
        <Notice />
        <Copyright />
        <UserTraces />
      </div>
      <Footer />
      <TopArrow />
    </div>
  );
};

export default LegalNotice;
