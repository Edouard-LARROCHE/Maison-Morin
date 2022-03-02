import React, { useState } from 'react';
import axios from 'axios';
import PersonIcon from '@material-ui/icons/Person';
import { TextField } from '@material-ui/core';
import useModal from './useModal';
import Modal from './modal';

const IndexModal = () => {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = document.querySelector('.fail-login');
    err.innerHTML = 'Nom ou mot de passe invalide *';

    await axios({
      method: 'get',
      url: 'http://localhost:5500/login',
      withCredentials: true,
      data: {
        name,
        password,
      },
    })
      .then((res) => {
        if (res.data[0].name === name && res.data[0].password === password) {
          window.location = '/update';
          err.style.display = 'none';
        } else {
          err.style.display = 'block';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='login-component'>
      <PersonIcon className='modal-toggle' onClick={toggleLoginForm} style={{ cursor: 'pointer', color: '#f6fbf8' }} />
      <Modal isShowing={isLoginFormShowed} hide={toggleLoginForm}>
        <form onSubmit={handleSubmit}>
          <TextField onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Nom *' style={{ paddingBottom: '1rem' }} />

          <TextField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
            placeholder='Mot de passe *'
            style={{ paddingBottom: '1rem' }}
          />
          <div className='fail-login' style={{ color: 'red', fontSize: '0.7rem' }} />

          <button type='submit'>
            <p>Connexion</p>
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default IndexModal;
