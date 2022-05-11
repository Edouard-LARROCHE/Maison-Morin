import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import NavBar from '../home/NavBar';
import Login from './Login';

const Register = () => {
  const [formConnect, setFormConnect] = useState(false);
  const [error, setError] = useState('');
  const [controlPassword, setControlPassword] = useState('');
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const terms = document.getElementById('terms');
    const termsError = document.querySelector('.terms-error');
    const controlPasswordError = document.querySelector('.password-error');
    controlPasswordError.innerHTML = '';
    termsError.innerHTML = '';

    if (data.password !== controlPassword) {
      controlPasswordError.innerHTML = 'Les mots de passe ne correspondent pas.';
    } else if (!terms.checked) {
      termsError.innerHTML = 'Veuillez valider les conditions générales';
    } else {
      await axios
        .post('api/user/register', data)
        .then((res) => {
          if (res.data.errors) {
            setError(res.data.errors.password || res.data.errors.email || res.data.errors.name);
          } else {
            setFormConnect(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      {formConnect ? (
        <>
          <Login trueConnect='Votre compte est bien enregistré, veuillez vous connecter.' />
        </>
      ) : (
        <>
          <NavBar />
          <div className='signup-container'>
            <div className='signup-form-container'>
              <div className='left-register'>
                <img src='/logo/logo-morin.png' alt='logo' />
                <Link to='/login'>
                  <button type='button' className='log-button'>
                    <p>SE CONNECTER</p>
                  </button>
                </Link>
              </div>
              <div className='right-register'>
                <form className='form-container-register' onSubmit={handleSubmit}>
                  <h1>CRÉER UN COMPTE</h1>
                  <TextField
                    style={{ margin: '0 0 1rem 0' }}
                    className='input-login'
                    type='text'
                    placeholder='Prénom'
                    name='firstName'
                    onChange={handleChange}
                    value={data.firstName}
                    required
                  />
                  <TextField
                    style={{ margin: '0 0 1rem 0' }}
                    className='input-login'
                    type='text'
                    placeholder='Nom'
                    name='lastName'
                    onChange={handleChange}
                    value={data.lastName}
                    required
                  />
                  <TextField
                    style={{ margin: '0 0 1rem 0' }}
                    className='input-login'
                    type='email'
                    placeholder='Adresse mail'
                    name='email'
                    onChange={handleChange}
                    value={data.email}
                    required
                  />
                  <TextField
                    style={{ margin: ' 0 0 1rem 0' }}
                    className='input-login'
                    type='password'
                    placeholder='Mot de passe'
                    name='password'
                    onChange={handleChange}
                    value={data.password}
                    required
                  />
                  <TextField
                    style={{ margin: ' 0 0 2rem 0' }}
                    className='input-login'
                    type='password'
                    placeholder='Confirmer le mot de passe'
                    name='password'
                    onChange={(e) => setControlPassword(e.target.value)}
                    value={controlPassword}
                    required
                  />
                  <div className='error-register'>
                    {error && <p>{error}</p>}
                    <p className='password-error' />
                    <p className='terms-error' />
                  </div>
                  <div style={{ display: 'flex', marginTop: '2rem' }}>
                    <input style={{ marginRight: '0.5rem' }} type='checkbox' id='terms' />
                    <p style={{ marginRight: '0.4rem' }}>J'accepte les</p>
                    <Link to='/mentions-legales'>
                      <p style={{ textDecoration: 'underline' }}>conditions générales</p>
                    </Link>
                  </div>
                  <button style={{ marginTop: '0.5rem' }} className='log-button' type='submit'>
                    <p>S'ENREGISTRER</p>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Register;
