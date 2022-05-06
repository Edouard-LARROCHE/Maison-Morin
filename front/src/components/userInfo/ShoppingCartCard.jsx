import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteCard } from '../../actions/user.actions';
import { useDispatch } from 'react-redux';
import { UidContext } from '../../AppContext';

const ShoppingCartCard = ({ gallery }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const uid = useContext(UidContext);

  useEffect(() => {
    setLoading(false);
  }, []);

  const deleteStore = () => {
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
  };

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div className='photos'>
          <img className='img-gallerie' src={gallery.pictureUrl} alt='MAISON-MORIN' />
          <div className='icones'></div>
          <div className='info-card'>
            <p> {gallery.name} </p>
            <p> {gallery.price} </p>
            <div className='add-shopping-cart' onClick={() => deleteStore()}>
              <p style={{ marginRight: '0.5rem' }}>SUPPRIMER AU PANIER</p>
              <DeleteIcon style={{ transform: 'translateY(15px)' }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCartCard;
