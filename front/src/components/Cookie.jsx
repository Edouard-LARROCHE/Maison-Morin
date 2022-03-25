import React from 'react';
import CookieConsent from 'react-cookie-consent';

const Cookie = () => {
  return (
    <div>
      <CookieConsent
        setDeclineCookie={true}
        location='bottom'
        declineButtonText='Refuser'
        buttonText='Accepter'
        enableDeclineButton={true}
        cookieName='myCookiesName'
        style={{ background: '#032953' }}
        declineButtonStyle={{ background: '#ddb355', color: '#012f6b', fontSize: '12px' }}
        buttonStyle={{ background: '#ddb355', color: '#012f6b', fontSize: '12px' }}
        expires={150}>
        Ce site utilise des cookies pour améliorer l'expérience utilisateur.{' '}
        <span style={{ fontSize: '12px', marginLeft: '1rem', color: 'white' }}>Maison Morin respecte votre vie privée</span>
      </CookieConsent>
    </div>
  );
};

export default Cookie;
