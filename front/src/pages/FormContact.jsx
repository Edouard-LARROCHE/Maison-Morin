import React from 'react';
import NavBar from '../components/home/NavBar';
import Footer from '../components/home/Footer';
import ContentForm from '../components/contact/ContentForm';
import Contact from '../components/contact/Contact';
import Form from '../components/contact/Form';

const FormContact = () => {
  return (
    <>
      <NavBar />
      <div>
        <div>
          <ContentForm />
          <Contact />
        </div>
        <div>
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormContact;
