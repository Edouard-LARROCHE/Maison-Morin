import React, { useState } from 'react';
import UseModalCard from '../cardModal/UseModalCard';
import ModalCard from '../cardModal/ModalCard';
import { useDispatch } from 'react-redux';
import { getCard } from '../../actions/card.actions';

const Card = ({ gallery }) => {
  const { isShowing: isShowed, toggle: toggleCard } = UseModalCard();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const showCard = () => {
    dispatch(getCard(gallery._id));
    setLoading(false);
  };

  return (
    <div>
      <div className='photos'>
        <img
          className='img-gallerie'
          src={gallery.pictureUrl}
          alt='MAISON-MORIN'
          onClick={() => {
            toggleCard();
            showCard();
          }}
        />
        <div className='info-card'>
          <p> {gallery.name} </p>
          <p> {gallery.desc} </p>
        </div>
      </div>
      {loading ? null : <ModalCard isShowing={isShowed} hide={toggleCard} />}
    </div>
  );
};

export default Card;
