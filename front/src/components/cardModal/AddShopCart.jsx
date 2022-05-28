import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';

const AddShopCart = ({ gallery, comfirmAdd, emptyShop, hide, remove }) => {
  const [product, setProduct] = useState(1);
  const [localData, setLocalData] = useState([]);

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
    if (cardData.length >= 6) {
      alert("Si vous souhaitez commander plus de 6 bouteilles d'une même référence, veuillez nous contacter.");
    } else {
      cardData.push(gallery._id);
      window.localStorage.Vins = cardData;
      setLocalData(cardData);
      setProduct(product);
    }
  };
  // cardData.includes(gallery._id.toString())

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
        <button
          onClick={() => {
            localStore();
            comfirmAdd();
          }}>
          Ajouter
        </button>
      </div>
      <div className='shopCart-option'>
        <ShoppingCartIcon style={{ color: '#012f6b' }} />
        <p> {localData.length} </p>
        {localData.length > 0 ? (
          <Link to='/mon-panier'>
            <p
              onClick={() => {
                hide();
                remove();
              }}
              style={{ marginLeft: '1rem' }}>
              VOIR LE PANIER
            </p>
          </Link>
        ) : (
          <p onClick={emptyShop} style={{ marginLeft: '1rem' }}>
            VOIR LE PANIER
          </p>
        )}
      </div>
      <div className='store-option'>
        <StorefrontIcon style={{ color: '#012f6b' }} />
        <p style={{ marginLeft: '1.5rem' }}>VENDU PAR MAISON-MORIN</p>
      </div>
    </div>
  );
};

export default AddShopCart;
