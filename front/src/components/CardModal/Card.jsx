import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../actions/card.actions';

const Card = ({ hide, gallery }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeCard(gallery._id));
  };

  return (
    <div>
      <div className='modal-overlay'>
        <div className='modal-wrapper'>
          <div className='modal'>
            <div className='modal-header'>
              <h3>Card</h3>
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
    </div>
  );
};

export default Card;
