import React from 'react';

const Card = ({ gallery }) => {
  const addStorage = () => {
    if (localStorage.getItem('token')) {
      let storeData = window.localStorage.card ? window.localStorage.card.split(',') : [];

      if (!storeData.includes(gallery._id.toString())) {
        storeData.push(gallery._id);
        window.localStorage.card = storeData;
      }
    } else {
      alert('connexion requise');
    }
  };

  return (
    <div className='photos'>
      <img className='img-gallerie' src={gallery.pictureUrl} alt='MAISON-MORIN' />
      <div className='icones'>
        <div className='instagram'>
          <a className='fab fa-instagram' target='_blank' rel='noreferrer' href='https://www.instagram.com/maison_morin/?hl=fr'>
            {''}
          </a>
        </div>
      </div>
      <div className='info-card'>
        <p> {gallery.name} </p>
        <p> {gallery.price} </p>
        <button onClick={() => addStorage()}>
          <p>AJOUTER AU PANIER</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
