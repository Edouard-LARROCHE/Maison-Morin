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
                {/* <div className='less'>
                  <p onClick={lessProduct} className={product === 1 ? 'allowed' : 'pointer'}>
                    -
                  </p>
                </div>
                <p>{product}</p>
                <div className='more'>
                  <p onClick={moreProduct} className='pointer'>
                    +
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCartCard;
