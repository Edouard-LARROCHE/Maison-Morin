import React, { useContext, useState } from 'react';
import axios from 'axios';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../actions/user.actions';
import { UidContext } from '../../AppContext';

const AddShopCart = ({ gallery }) => {
  const [confirm, setConfirm] = useState('confirm-before');
  const [add, setAdd] = useState('add-before');
  const [connect, setConnect] = useState('connect-before');
  const [product, setProduct] = useState(1);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const uid = useContext(UidContext);

  const moreProduct = () => {
    if (product >= 6) {
      setProduct(product);
    } else setProduct(product + 1);
  };

  const lessProduct = () => {
    if (product === 1) {
      setProduct(product);
    } else setProduct(product - 1);
  };

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
    <div className='add-shop-cart'>
      <div className='product-choise'>
        <div className='price'>
          <h1> € {gallery.price} </h1>
          <p>Prix à l'unité</p>
        </div>
        <div className='more-less-product'>
          <div className='less-button'>
            <p onClick={lessProduct} className={product === 1 ? 'allowed' : 'pointer'}>
              -
            </p>
          </div>
          {product}
          <div className='more-button'>
            <p onClick={moreProduct} className='pointer'>
              +
            </p>
          </div>
        </div>
      </div>
      {/* 
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
      </div> */}
    </div>
  );
};

export default AddShopCart;
