import React, { useContext, useState } from 'react';
import axios from 'axios';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../actions/user.actions';
import { UidContext } from '../../AppContext';

const Card = ({ gallery }) => {
  const [confirm, setConfirm] = useState('confirm-before');
  const [add, setAdd] = useState('add-before');
  const [connect, setConnect] = useState('connect-before');
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const uid = useContext(UidContext);

  const addStore = () => {
    const data = {
      shopCart: gallery._id,
    };

    if (uid) {
      if (!userData.shopCart.includes(gallery._id.toString())) {
        dispatch(addCard(gallery._id));
        axios
          .patch(`/api/user/addCard/${uid}`, data)
          .then((res) => {
            setConfirm('confirm');
            setTimeout(() => {
              setConfirm('confirm-before');
            }, 1500);
          })
          .catch((err) => console.log(err));
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
