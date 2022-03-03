import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ContentForm = () => {
  return (
    <div className='content-form'>
      <div className='content1'>
        <p>MAISON MORIN</p>
        <br />
        <div className='line2' />
      </div>
      <div className='content2'>
        <p>57 Grande Rue, 77630 Barbizon</p>
        <p>01.60.66.40.26</p>
        <p>06.09.04.59.85</p>
        <CopyToClipboard text='contact@maison-morin.com' style={{ cursor: 'pointer', color: '#032953' }}>
          <p
            onClick={() => {
              alert('Adresse mail copié !');
            }}>
            contact@maison-morin.com
          </p>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ContentForm;
