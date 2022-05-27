import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../actions/card.actions';
import ProductInfo from './ProductInfo';
import AddShopCart from './AddShopCart';

const Card = ({ hide, gallery }) => {
  const [comfirm, setComfirm] = useState('comfirm-add');
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeCard(gallery._id));
  };

  const comfirmAdd = () => {
    setComfirm('comfirm-add-after');
    setTimeout(() => {
      setComfirm(comfirm);
    }, 2500);
  };

  return (
    <div className='card-modal-overlay'>
      <div className='card-modal-wrapper'>
        <div className='card-modal'>
          <div className='card-modal-left'>
            <img src={gallery.pictureUrl} alt='Maison-Morin' />
          </div>
          <div className='card-modal-right'>
            <div className='card-right-header'>
              <h1> {gallery.name} </h1>
              <div className={comfirm}>
                <p>L'article à bien été ajouté à votre panier</p>
              </div>
              <CloseIcon
                onClick={() => {
                  hide();
                  remove();
                }}
                style={{ cursor: 'pointer', color: '#012f6b' }}
              />
            </div>
            <div className='card-right-content'>
              <div className='point-info'>
                <p> {gallery.country} </p>
                <span>&#8228;</span>
                <p> {gallery.styleOfWine} </p>
                <span>&#8228;</span>
                <p> {gallery.winery} </p>
                <span>&#8228;</span>
                <p> {gallery.grapeVarieties} </p>
              </div>
              <h3> {gallery.desc} </h3>
              <AddShopCart gallery={gallery} comfirmAdd={comfirmAdd} />
            </div>
          </div>
          <div className='product-info'>
            <ProductInfo gallery={gallery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
