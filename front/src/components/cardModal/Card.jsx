import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../actions/card.actions';

const Card = ({ hide, gallery }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeCard(gallery._id));
  };

  return (
    <div className='card-modal-overlay'>
      <div className='card-modal-wrapper'>
        <div className='card-modal'>
          <div className='card-modal-header'>
            <p> {gallery.name} </p>
            <h3
              onClick={() => {
                hide();
                remove();
              }}>
              X
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
