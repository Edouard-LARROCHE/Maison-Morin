import React from 'react';
import { TextField } from '@material-ui/core';

const NewsLetter = () => {
    return (
        <div className="banner-nl">
            <div className="content-nl">
                <div className="bg-logo-nl">
                    <div className="logo-nl">
                        <img src='/assets/morin_solo_blanc.png' alt='logo-morin' height='120em' width='120em' />
                    </div>
                </div>
                <div className="text-nl">
                    <div className="titre-nl">
                        <h1>News Letter</h1>
                    </div>
                    <div className="text-info-nl">
                        <h3>Soyez les premiers à être informés de nos actualités !</h3>
                    </div>
                </div>
                <div className="email-nl">
                    <TextField
                        className='textfield-email'
                        style={{ paddingBottom: '2rem' }}
                        type='text'
                        id='email'
                        name='email'
                        placeholder='Votre adresse mail'
                    />
                </div>
                <div className="button-nl">
                    <p>Je m'inscris!</p>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;