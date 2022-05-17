import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';
// import { useDispatch, useSelector } from 'react-redux';
// import { addCard } from '../../actions/user.actions';
// import { UidContext } from '../../AppContext';

const AddShopCart = ({ gallery }) => {
  //   const [confirm, setConfirm] = useState('confirm-before');
  //   const [add, setAdd] = useState('add-before');
  //   const [connect, setConnect] = useState('connect-before');
  const [product, setProduct] = useState(1);
  const [localData, setLocalData] = useState([]);
  //   const dispatch = useDispatch();
  //   const userData = useSelector((state) => state.userReducer);
  //   const uid = useContext(UidContext);

  const moreProduct = () => {
    if (product >= 6) {
      alert("Si vous souhaitez commander plus de 6 bouteilles d'une même référence, veuillez nous contacter.");
      setProduct(product);
    } else setProduct(product + 1);
  };

  const lessProduct = () => {
    if (product === 1) {
      setProduct(product);
    } else setProduct(product - 1);
  };

  const localStore = () => {
    let cardData = window.localStorage.Vins ? window.localStorage.Vins.split(',') : [];
    if (!cardData.includes(gallery._id.toString())) {
      cardData.push(gallery._id);
      window.localStorage.Vins = cardData;
      setLocalData(cardData);
    }
  };

  useEffect(() => {
    let cardData = window.localStorage.Vins ? window.localStorage.Vins.split(',') : [];
    for (let i = 0; i < cardData.length; i++) {
      setLocalData(cardData);
    }
  }, []);

  //   const addStore = () => {
  //     const data = {
  //       shopCart: gallery._id,
  //     };

  //     if (uid) {
  //       if (!userData.shopCart.includes(gallery._id.toString())) {
  //         dispatch(addCard(gallery._id));
  //         axios
  //           .patch(`/api/user/addCard/${uid}`, data)
  //           .then((res) => {
  //             setConfirm('confirm');
  //             setTimeout(() => {
  //               setConfirm('confirm-before');
  //             }, 1500);
  //           })
  //           .catch((err) => console.log(err));
  //       } else {
  //         setAdd('add');
  //         setTimeout(() => {
  //           setAdd('add-before');
  //         }, 1500);
  //       }
  //     } else {
  //       setConnect('connect');
  //       setTimeout(() => {
  //         setConnect('connect-before');
  //       }, 1500);
  //     }
  //   };

  return (
    <div className='add-shop-cart'>
      <div className='product-choise'>
        <div className='price'>
          <h1> € {gallery.price} </h1>
          <p>Prix à l'unité</p>
        </div>
        <div className='more-less-product'>
          <div className='less-button'>
            <button onClick={lessProduct} className={product === 1 ? 'allowed' : 'pointer'}>
              -
            </button>
          </div>
          {product}
          <div className='more-button'>
            <button onClick={moreProduct} className='pointer'>
              +
            </button>
          </div>
        </div>
      </div>
      <div className='add-button'>
        <button onClick={() => localStore()}>Ajouter</button>
      </div>
      <div className='shopCart-option'>
        <ShoppingCartIcon style={{ color: '#012f6b' }} />
        <p> {localData.length} </p>
        <p style={{ marginLeft: '1rem' }}>VOIR LE PANIER</p>
      </div>
      <div className='store-option'>
        <StorefrontIcon style={{ color: '#012f6b' }} />
        <p style={{ marginLeft: '1.5rem' }}>VENDU PAR MAISON-MORIN</p>
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
