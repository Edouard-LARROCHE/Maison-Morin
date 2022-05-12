import React from 'react';
import UseModalCard from './UseModalCard';
import ModalCard from './ModalCard';

const IndexModal = () => {
  const { isShowing: isShowed, toggle: toggleCard } = UseModalCard();
  return (
    <div>
      <h2 onClick={toggleCard}>X</h2>
      <ModalCard isShowing={isShowed} hide={toggleCard}>
        <h2> CARD ON THE ROCK </h2>
      </ModalCard>
    </div>
  );
};

export default IndexModal;
