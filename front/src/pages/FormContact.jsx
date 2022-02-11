import React from 'react';
import NavBar from '../components/home/NavBar';
import Footer from '../components/home/Footer';
import ContentForm from '../components/contact/ContentForm';
import Form from '../components/contact/Form';
import NewsLetter from '../components/newsletter/NewsLetter';

const FormContact = () => {
  return (
    <>
      <NavBar />
      <div className="texte">
        <h2>Contactez-nous</h2>
        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h3>
      </div>
      <div className='page-contact'>
        <div className='left-content'>
          <ContentForm />
        </div>
          <Form />
      </div>
      <div className="banner-news">
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default FormContact;
