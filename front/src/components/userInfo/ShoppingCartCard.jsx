import React, { useEffect, useState } from 'react';
import Loader from '../Loader';
import DeleteIcon from '@material-ui/icons/Delete';

const ShoppingCartCard = ({ gallery }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const deleteStorage = () => {
    let storedData = window.localStorage.card.split(',');
    let newData = storedData.filter((id) => id !== gallery._id);
    window.localStorage.card = newData;
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
            <div
              className='add-shopping-cart'
              onClick={() => {
                deleteStorage();
                window.location.reload();
              }}>
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
