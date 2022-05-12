import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import UseModalCard from '../CardModal/UseModalCard';
import ModalCard from '../CardModal/ModalCard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../actions/user.actions';
import { getCard } from '../../actions/card.actions';
import { UidContext } from '../../AppContext';

const Card = ({ gallery }) => {
  const { isShowing: isShowed, toggle: toggleCard } = UseModalCard();
  const [loading, setLoading] = useState(true);
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

  const showCard = () => {
    dispatch(getCard(gallery._id));
    setLoading(false);
  };

  return (
    <div>
      <div className='photos'>
        <img
          className='img-gallerie'
          src={gallery.pictureUrl}
          alt='MAISON-MORIN'
          onClick={() => {
            toggleCard();
            showCard();
          }}
        />
        <div className='info-card'>
          <p> {gallery.name} </p>
          <p> {gallery.price} </p>
        </div>
        <div className='add-shopping-cart' onClick={() => addStore()}>
          <p style={{ marginRight: '0.5rem' }}>AJOUTER AU PANIER</p>
          <ShoppingCartIcon />
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
      {loading ? null : <ModalCard isShowing={isShowed} hide={toggleCard} />}
    </div>
  );
};

export default Card;
