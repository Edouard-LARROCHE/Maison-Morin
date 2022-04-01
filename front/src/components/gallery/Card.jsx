import React, { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Card = ({ gallery }) => {
  const [confirm, setConfirm] = useState('confirm-before');
  const [add, setAdd] = useState('add-before');
  const [connect, setConnect] = useState('connect-before');

  const addStorage = () => {
    if (localStorage.getItem('token')) {
      let storeData = window.localStorage.card ? window.localStorage.card.split(',') : [];
      if (!storeData.includes(gallery._id.toString())) {
        storeData.push(gallery._id);
        window.localStorage.card = storeData;
        setConfirm('confirm');
        setTimeout(() => {
          setConfirm('confirm-before');
        }, 1500);
      } else {
        setAdd('add');
        setTimeout(() => {
          setAdd('add-before');
        }, 1500);
      }
    } else {
      setConnect('connect');
      setTimeout(() => {
        setConnect('connect-before');
      }, 1500);
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
        <div className='add-shopping-cart' onClick={() => addStorage()}>
          <p style={{ marginRight: '0.5rem' }}>AJOUTER AU PANIER</p>
          <ShoppingCartIcon style={{ transform: 'translateY(15px)' }} />
        </div>
        <div className={confirm}>
          <p>BIEN AJOUTER</p>
        </div>
        <div className={add}>
          <p>DÉJÀ AJOUTER</p>
        </div>
        <div className={connect}>
          <p>MERCI DE VOUS CONNECTER</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
