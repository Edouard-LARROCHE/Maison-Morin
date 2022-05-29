import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Articles = ({ gallery }) => {
  let cardData = window.localStorage.Vins ? window.localStorage.Vins.split(',') : [];

  const deleteItemsStore = () => {
    cardData.filter((id) => id !== gallery._id);
    console.log(cardData);
  };

  return (
    <div className='articles'>
      <div className='grid-article'>
        <div className='picture-article'>
          <img src={gallery.pictureUrl} alt='produit' />
        </div>
        <div className='article'>
          <p> {gallery.name} </p>
          <p>Bouteille 75cl</p>
          <DeleteIcon className='delete-icon' onClick={deleteItemsStore} />
        </div>
        <div className='price-more-less'></div>
      </div>
    </div>
  );
};

export default Articles;
