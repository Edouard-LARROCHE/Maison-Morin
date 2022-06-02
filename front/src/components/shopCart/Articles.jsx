import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Articles = ({ gallery }) => {
  const [newLocalArray, setNewLocalArray] = useState(window.localStorage.Vins.split([',']));

  const deleteItemsStore = () => {
    let removeItemsStore = window.localStorage.Vins ? window.localStorage.Vins.split([',']) : [];
    let newArray = removeItemsStore.filter((id) => id !== gallery._id);
    window.localStorage.Vins = newArray;
    setNewLocalArray(newArray);
  };

  console.log(newLocalArray);
  return (
    <>
      {newLocalArray && (
        <div className='articles'>
          <div className='grid-article'>
            <div className='picture-article'>
              <img src={gallery.pictureUrl} alt='produit' />
            </div>
            <div className='article'>
              <p> {gallery.name} </p>
              <p>Bouteille 75cl</p>
              <DeleteIcon className='delete-icon' onClick={() => deleteItemsStore()} />
            </div>
            <div className='price-more-less'></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Articles;
