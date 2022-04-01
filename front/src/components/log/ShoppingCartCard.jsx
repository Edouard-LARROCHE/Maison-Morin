import React from 'react';

const ShoppingCartCard = ({ gallery }) => {
  const deleteStorage = () => {
    let storedData = window.localStorage.card.split(',');
    let newData = storedData.filter((id) => id !== gallery._id);
    window.localStorage.card = newData;
  };

  return (
    <div className='photos'>
      <img className='img-gallerie' src={gallery.pictureUrl} alt='MAISON-MORIN' />
      <div className='icones'></div>
      <div className='info-card'>
        <p> {gallery.name} </p>
        <p> {gallery.price} </p>
        <button
          onClick={() => {
            deleteStorage();
            window.location.reload();
          }}>
          <p>SUPPRIMER AU PANIER</p>
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartCard;
