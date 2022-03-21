import React from 'react';

const Cookie = () => {
  return (
    <>
      <div className='cook-use'>
        <h1>1. Que sont les cookies ? Comment sont-ils utilisés ?</h1>
        <div className='line-all'></div>
        <p>
          Un cookie est un fichier texte déposé sur l’appareil que vous utilisez pour accéder à Internet (ordinateur, téléphone mobile, tablette…)
          lorsque vous visitez un site via votre logiciel de navigation.
        </p>
        <br />
        <p>
          Nous plaçons un identifiant unique dans le cookie et utilisons le cookie pour relier votre ordinateur aux informations que nous stockons
          dans notre base de données.
        </p>
        <br />
        <p>
          Il contient plusieurs données permettant de vous reconnaître :
          <br /> - le nom du serveur qui l'a déposé ;
          <br /> - un identifiant sous forme de numéro unique ;
          <br /> - éventuellement une date d'expiration.
        </p>
        <br />
        <p>
          Les cookies peuvent être utilisés sur votre ordinateur ou votre appareil mobile pour des durées différentes. Certains cookies sont des
          "cookies de session", ce qui signifie qu'ils n'existent que lorsque votre navigateur est ouvert et sont automatiquement supprimés lorsque
          vous fermez votre navigateur ou que vous quittez l'application. D'autres cookies sont des "cookies permanents", impliquant qu'ils survivent
          après la fermeture de votre navigateur ou de votre application et peuvent être utilisés par des sites internet et des applications pour
          reconnaitre votre ordinateur lorsque, plus tard, vous ré-ouvrez votre navigateur ou votre application.
        </p>
        <br />
        <p>
          Certains cookies que nous utilisons sont des cookies permanents. Lorsque votre consentement est requis quant à leur utilisation, le délai de
          validité du consentement au dépôt des Cookies varie de 2 jours à 2 ans. A l'expiration de ce délai, nous solliciterons de nouveau votre
          consentement.
        </p>
      </div>
      <div className='cook-control'>
        <h1>2. Comment contrôler les cookies ?</h1>
        <div className='line-all'></div>
        <p>
          Lors de votre première visite sur notre Site, une bannière d’information s’affichera en bas de page. Après avoir cliqué sur « J’accepte »,
          vous consentez à ce que la Maison Morin puisse déposer des cookies sur votre ordinateur ou appareil.
        </p>
        <br />
        <p>
          Le bandeau restera affiché tant que vous n'avez pas cliqué sur « J’accepte ». Vous avez la possibilité de modifier à tout moment les
          paramètres de votre navigateur internet afin d’accepter, paramétrer ou, au contraire, refuser les cookies.
        </p>
        <br />
        <p>
          Plusieurs options s’offrent à vous : accepter tous les cookies, être averti lorsqu’un cookie est enregistré, ou refuser systématiquement
          tous les cookies. Chaque navigateur internet propose des modalités de configuration différentes pour gérer les cookies. De manière générale,
          elles sont décrites dans le menu d’aide de chaque navigateur. Si vous utilisez un type ou une version de navigateur différent de ceux
          figurant sur la liste ci-dessous, nous vous invitons à consulter le menu « Aide » de votre navigateur : Firefox, Chrome, Internet Explorer,
          Safari et Opera.
        </p>
      </div>
    </>
  );
};

export default Cookie;
