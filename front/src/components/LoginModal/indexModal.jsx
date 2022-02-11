import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import useModal from './useModal';
import Modal from './modal';

const IndexModal = () => {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();

  return (
    <div>
      <PersonIcon className='modal-toggle' onClick={toggleLoginForm} style={{ cursor: 'pointer', color: '#012f6b' }} />
      <Modal isShowing={isLoginFormShowed} hide={toggleLoginForm} title='Login'>
        <form>
          <div className='form-group'>
            <input type='text' placeholder='Username' />
          </div>
          <div className='form-group'>
            <input type='text' placeholder='Password' />
          </div>
          <div className='form-group'>
            <input type='submit' value='Login' />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default IndexModal;
