import React from 'react';
import NavBar from '../components/home/NavBar';
import Footer from '../components/home/Footer';
import ContentForm from '../components/contact/ContentForm';
import Form from '../components/contact/Form';
import NewsLetter from '../components/newsletter/NewsLetter';
import HeadBand from '../components/HeadBand';

const FormContact = () => {
  return (
    <>
      <NavBar />
      <HeadBand />
      <div className='texte'>
        <div className='para1'>
          <p>N'HÉSITEZ PAS À NOUS CONTACTER</p>
          <br />
          <div className='line2' />
        </div>
        <div className='para2'>
          <br />
          <p>
            Si vous rencontrez le moindre problème, ou si vous avez une suggestion, n'hésitez pas à remplir le formulaire ci-dessous. Nos équipes sont
            à votre écoute, et ferons le maximum pour répondre à vos attentes.
          </p>
        </div>
      </div>
      <ContentForm />
      <div className='page-contact'>
        <Form />
        <div className='social-media'>
          <div className='global-media'>
            <div className='icon insta'>
              <div className='tooltip'>Instagram</div>
              <a className='fab fa-instagram' href='https://www.instagram.com/maison_morin/?hl=fr' target='_blank' rel='noopener noreferrer'>
                {''}
              </a>
            </div>
            <div className='icon fb'>
              <div className='tooltip'>Facebook</div>
              <a className='fab fa-facebook-f' href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                {''}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='line'></div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default FormContact;
