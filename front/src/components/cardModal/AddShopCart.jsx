import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/product.actions';
import { addCard } from '../../actions/user.actions';
import { UidContext } from '../../AppContext';

const AddShopCart = ({ gallery, comfirmAdd, emptyShop, hide, remove }) => {
  const [product, setProduct] = useState(1);
  const [localData, setLocalData] = useState([]);
  const localStoreData = window.localStorage.Vins;
  const userData = useSelector((state) => state.userReducer);
  const shopcartData = useSelector((state) => state.userReducer.shopCart);
  const dispatch = useDispatch();
  const uid = useContext(UidContext);

  useEffect(() => {
    if (localStoreData) {
      let storeLocal = window.localStorage.Vins.split([',']);
      for (let i = 0; i < storeLocal.length; i++) {
        setLocalData(storeLocal);
      }
    } else {
      if (shopcartData) {
        if (localStoreData === undefined) {
          for (let i = 0; i < shopcartData.length; i++) {
            setLocalData(shopcartData);
          }
        }
      }
    }
  }, [localStoreData]);

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
    let storeLocal = window.localStorage.Vins ? window.localStorage.Vins.split([',']) : [];
    storeLocal.push(gallery._id);
    window.localStorage.Vins = storeLocal;
    dispatch(getProduct(gallery._id));
    setProduct(product);
  };
  // cardData.includes(gallery._id.toString())

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
            return res;
          })
          .catch((err) => console.log(err));
      }
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
            addStore();
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
