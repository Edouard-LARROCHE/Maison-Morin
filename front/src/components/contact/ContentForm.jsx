import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ContentForm = () => {
  return (
    <div className='content-form'>
      <h1>MAISON MORIN</h1>
      <h3>57 Grande Rue, 77630 Barbizon</h3>
      <h3>01.60.66.40.26</h3>
      <h3>06.09.04.59.85</h3>
      <CopyToClipboard text='contact@maison-morin.com' style={{ cursor: 'pointer', color: '#032953' }}> 
        <h3
          onClick={() => {
            alert('Adresse mail copié !');
          }}>
          contact@maison-morin.com
        </h3>
      </CopyToClipboard>
      {/* <img src='/assets/logo-gold.png' alt='logo-morin' /> */}
    </div>
  );
};

export default ContentForm;
