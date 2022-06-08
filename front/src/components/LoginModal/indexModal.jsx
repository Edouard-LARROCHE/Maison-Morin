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
      url: '/admin',
      withCredentials: true,
      data: {
        name,
        password,
      },
    })
      .then((res) => {
        if (res.data[0].name === name && res.data[0].password === password) {
          window.location = process.env.REACT_APP_UPDATE;
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
    <>
      <PersonIcon className='modal-toggle' onClick={toggleLoginForm} style={{ cursor: 'pointer', color: '#012f6b' }} />

      <Modal isShowing={isLoginFormShowed} hide={toggleLoginForm}>
        <form onSubmit={handleSubmit}>
          <div className='textfield'>
            <TextField onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Nom *' style={{ paddingBottom: '1rem' }} />

            <TextField onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Mot de passe *' />
          </div>
          <div className='fail-login' style={{ color: 'red', fontSize: '0.8rem' }} />
          <div className='btn-position-admin'>
            <button className='btn-admin' type='submit'>
              <p>Connexion</p>
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default IndexModal;
