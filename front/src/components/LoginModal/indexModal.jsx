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

  // const logErr = () => {
  //   const err = document.querySelector('.err-login');
  //   err.innerHTML = 'Nom ou mot de passe invalide';
  //   if (name && password) {
  //     err.style.display = 'none';
  //   } else {
  //     err.style.display = 'block';
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameError = document.querySelector('.name-err');
    const passwordError = document.querySelector('.pass-err');

    axios({
      method: 'get',
      url: 'http://localhost:5500/login',
      withCredentials: true,
      data: {
        name,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          nameError.innerHTML = res.data.errors.name;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = '/contact';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='login-component'>
      <PersonIcon className='modal-toggle' onClick={toggleLoginForm} style={{ cursor: 'pointer', color: '#012f6b' }} />
      <Modal isShowing={isLoginFormShowed} hide={toggleLoginForm}>
        <form onSubmit={handleSubmit}>
          <TextField onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Nom' style={{ paddingBottom: '1rem' }} />

          <TextField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
            placeholder='Mot de passe'
            style={{ paddingBottom: '1rem' }}
          />
          <div className='name-err' />
          <div className='pass-err' />
          <button className='button' type='submit'>
            <p>Connexion</p>
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default IndexModal;
