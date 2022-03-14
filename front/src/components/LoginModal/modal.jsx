import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

const modal = ({ isShowing, hide, ...props }) => {
  return (
    <div>
      {isShowing ? (
        <div className='modal-overlay'>
          <div className='modal-wrapper'>
            <div className='modal'>
              <div className='modal-header'>
                <h3>ADMIN MAISON MORIN</h3>
                <CloseIcon className='modal-close-button' onClick={hide} style={{ cursor: 'pointer', color: '#012f6b' }} />
              </div>
              <div>{props.children}</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default modal;
