import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

const modal = ({ isShowing, hide, title, ...props }) => {
  return (
    <div>
      {isShowing ? (
        <>
          <div className='modal-overlay'>
            <div className='modal-wrapper'>
              <div className='modal'>
                <div className='modal-header'>
                  <h4>{title}</h4>

                  <CloseIcon className='modal-close-button' onClick={hide} style={{ cursor: 'pointer', color: '#012f6b', fontSize: 'small' }} />
                </div>
                <div className='modal-body'>{props.children}</div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default modal;
