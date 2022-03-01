import React from 'react';

const Loader = () => {
  return (
    <div className='spinner'>
      <img className='V-spinner' src='/logo/V.png' alt='V' style={{ width: '2.5rem' }} />
      <div className='loader'></div>
    </div>
  );
};

export default Loader;
