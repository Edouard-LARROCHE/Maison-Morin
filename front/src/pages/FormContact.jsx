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
        <h1>Contactez-nous</h1>
      </div>
      <div className='page-contact'>
        <div className="heures-ouverture">
          <h1>Du Lundi au Vendredi</h1>
          <h3>De 09h00 à 20h00</h3>
          <h3>Le Samedi</h3>
          <h3>De 09h00 à 14h00</h3>
        </div>
        <div className='left-content'>
          <ContentForm />
        </div>
        <Form />
        <div className="social-media">
          <div className="global-media">
            <div className="icon insta">
              <div className="tooltip">Instagram</div>
              <span><i class="fab fa-instagram"></i></span>
              {/* <a className="insta" href='https://www.instagram.com/maison_morin/?hl=fr' target='_blank' rel='noopener noreferrer'>
                <InstagramIcon
                  style={{ height: "1.20em", width: "1.20em" }}
                />
              </a> */}
            </div>
            <div className="icon fb">
              <div className="tooltip">Facebook</div>
              <span><i class="fab fa-facebook-f"></i></span>
              {/* <a className="fb" href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                <FacebookIcon
                  style={{ height: "1.20em", width: "1.20em" }}
                />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="banner-news">
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default FormContact;
