import React from 'react';

const ModalCard = ({ isShowing, hide, ...props }) => {
  return (
    <div>
      {isShowing ? (
        <div className='modal-overlay'>
          <div className='modal-wrapper'>
            <div className='modal'>
              <div className='modal-header'>
                <h3>Card</h3>
              </div>
              <div>{props.children}</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ModalCard;
