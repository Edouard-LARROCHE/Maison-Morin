import React from 'react';
import { TextField } from '@material-ui/core';

const NewsLetter = () => {
  return (
    <>
      <div className='line'></div>
      <div className='banner-nl'>
        <div className='titre-nl'>
          <h1>Newsletter</h1>
        </div>
        <div className='text-info-nl'>
          <h3>Soyez les premiers à être informés de nos actualités !</h3>
        </div>
        <div className='email-nl'>
          <TextField
            className='textfield-email'
            style={{ paddingBottom: '2rem' }}
            type='text'
            id='email'
            name='email'
            placeholder='Votre adresse mail'
          />
        </div>
        <div className='btn-nl'>
          <p>Je m'inscris</p>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
