import React from 'react';
import CookieConsent from 'react-cookie-consent';

const Cookie = () => {
  return (
    <div>
      <CookieConsent
        location='bottom'
        buttonText="J'accepte"
        cookieName='myAwesomeCookieName2'
        style={{ background: '#032953' }}
        buttonStyle={{ background: '#ddb355', color: '#012f6b', fontSize: '12px' }}
        expires={0}>
        Ce site utilise des cookies pour améliorer l'expérience utilisateur.{' '}
        <span style={{ fontSize: '12px', marginLeft: '1rem', color: 'white' }}>Maison Morin respecte votre vie privée</span>
      </CookieConsent>
    </div>
  );
};

export default Cookie;
