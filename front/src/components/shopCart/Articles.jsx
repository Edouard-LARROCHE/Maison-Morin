import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Articles = ({ gallery }) => {
  const [product, setProduct] = useState(1);
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
            <div className='price-more-less'>
              <h3> € {gallery.price + " l'unité"} </h3>
              <div className='more-less-button'>
                <div className='less'>
                  <p onClick={() => setProduct(product - 1)} className={product === 1 ? 'allowed' : 'pointer'}>
                    -
                  </p>
                </div>
                <p>{product}</p>
                <div className='more'>
                  <p onClick={() => setProduct(product + 1)} className='pointer'>
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

export default Articles;
