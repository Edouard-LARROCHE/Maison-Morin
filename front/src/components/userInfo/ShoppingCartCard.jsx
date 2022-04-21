import React, { useEffect, useState } from 'react';
import Loader from '../Loader';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteCard } from '../../actions/card.actions';
import { useDispatch } from 'react-redux';

const ShoppingCartCard = ({ gallery }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
  }, []);

  const deleteStore = () => {
    dispatch(deleteCard(gallery._id));
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
