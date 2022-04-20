import React, { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { getCard } from '../../actions/card.actions';

const Card = ({ gallery }) => {
  const [confirm, setConfirm] = useState('confirm-before');
  const [add, setAdd] = useState('add-before');
  const [connect, setConnect] = useState('connect-before');
  const userData = useSelector((state) => state.userReducer);
  const card = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();

  const addStore = () => {
    if (userData._id) {
      if (!card.includes(gallery._id.toString())) {
        card.push(gallery._id);
        dispatch(getCard);
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
        <div className='add-shopping-cart' onClick={() => addStore()}>
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
          <p>CONNEXION REQUISE</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
