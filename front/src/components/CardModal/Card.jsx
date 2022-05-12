import React from 'react';

const Card = ({ hide, gallery }) => {
  return (
    <div>
      <div className='modal-overlay'>
        <div className='modal-wrapper'>
          <div className='modal'>
            <div className='modal-header'>
              <h3>Card</h3>
              <p> {gallery.name} </p>
              <h3 onClick={hide}>X</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
