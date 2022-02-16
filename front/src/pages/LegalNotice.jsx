import React from 'react';
import NavBar from '../components/home/NavBar';
import Footer from '../components/home/Footer';
import Notice from '../components/legalNotice/Notice';
import Copyright from '../components/legalNotice/Copyright';
import UserTraces from '../components/legalNotice/UserTraces';
import HeadBand from '../components/HeadBand';

const LegalNotice = () => {
  return (
    <div>
      <NavBar />
      <HeadBand />
      <div className='all-notice'>
        <Notice />
        <Copyright />
        <UserTraces />
      </div>
      <Footer />
    </div>
  );
};

export default LegalNotice;
