import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteCard } from '../../actions/user.actions';
import { useDispatch } from 'react-redux';
import { UidContext } from '../../AppContext';

const ShoppingCartCard = ({ gallery }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(1);
  const dispatch = useDispatch();
  const uid = useContext(UidContext);

  useEffect(() => {
    setLoading(false);
  }, []);

  const deleteStore = () => {
    let removeItemsStore = window.localStorage.Vins ? window.localStorage.Vins.split([',']) : [];
    let newArray = removeItemsStore.filter((id) => id !== gallery._id);
    window.localStorage.Vins = newArray;

    axios({
      method: 'delete',
      url: `api/user/deleteCard/` + uid,
      data: { shopCart: gallery._id },
    })
      .then((res) => {
        dispatch(deleteCard(gallery._id));
        return res;
      })
      .catch((err) => console.log(err));

    return newArray;
  };

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

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div className='articles'>
          <div className='grid-article'>
            <div className='picture-article'>
              <img src={gallery.pictureUrl} alt='produit' />
            </div>
            <div className='article'>
              <p> {gallery.name} </p>
              <p>Bouteille 75cl</p>
              <DeleteIcon className='delete-icon' onClick={() => deleteStore()} />
            </div>
            <div className='price-more-less'>
              <h3> € {gallery.price + " l'unité"} </h3>
              <div className='more-less-button'>
                <div className='less'>
                  <p onClick={lessProduct} className={product === 1 ? 'allowed' : 'pointer'}>
                    -
                  </p>
                </div>
                <p>{product}</p>
                <div className='more'>
                  <p onClick={moreProduct} className='pointer'>
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCartCard;
