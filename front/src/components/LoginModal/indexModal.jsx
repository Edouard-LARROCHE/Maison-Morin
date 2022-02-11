import React, { useState } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { TextField } from '@material-ui/core';
import useModal from './useModal';
import Modal from './modal';

const IndexModal = () => {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const logErr = () => {
    const err = document.querySelector('.err-login');
    err.innerHTML = 'Nom ou mot de passe invalide';
    if (name && password) {
      err.style.display = 'none';
    } else {
      err.style.display = 'block';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logErr();
    setName('');
    setPassword('');
  };

  return (
    <div className='login-component'>
      <PersonIcon className='modal-toggle' onClick={toggleLoginForm} style={{ cursor: 'pointer', color: '#012f6b' }} />
      <Modal isShowing={isLoginFormShowed} hide={toggleLoginForm}>
        <form>
          <TextField onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Nom' style={{ paddingBottom: '1rem' }} />

          <TextField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='text'
            placeholder='Mot de passe'
            style={{ paddingBottom: '1rem' }}
          />
          <div className='err-login' />
          <div className='button' onClick={handleSubmit}>
            <p>Connexion</p>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default IndexModal;
