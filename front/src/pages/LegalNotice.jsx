import React from 'react';
import NavBar from '../components/home/NavBar';
import HeadBand from '../components/HeadBand';
import Notice from '../components/legalNotice/Notice';
import Copyright from '../components/legalNotice/Copyright';
import UserTraces from '../components/legalNotice/UserTraces';
import Footer from '../components/home/Footer';

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
