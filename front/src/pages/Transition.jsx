import React from 'react';
import Loader from '../components/Loader';

const Transition = () => {
  return (
    <>
      <div className='transition-pages'>
        <div className='img-position'>
          <img src='/logo/Maison Morin Or.png' alt='logo' style={{ width: '13rem' }} />
        </div>
        <div className='transition-position-spinner'>
          <Loader />
        </div>
      </div>
    </>
  );
};

export default Transition;
