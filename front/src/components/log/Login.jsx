import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post('http://localhost:5500/login', data);
      localStorage.setItem('token', res.data);
      window.location = '/mon-panier';
    } catch (err) {
      if (err.response && err.response.status >= 400 && err.response.status <= 500) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <div className='login-container'>
      <div className='login-form-container'>
        <div className='left'>
          <div className='back'>
            <Link to='/'>
              <p>
                MAISON-MORIN <ArrowBackIcon />
              </p>
            </Link>
          </div>
          <form className='form-container' onSubmit={handleSubmit}>
            <h1>SE CONNECTER</h1>
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
              style={{ margin: ' 0 0 2rem 0' }}
              className='input-login'
              type='password'
              placeholder='Mot de passe'
              name='password'
              onChange={handleChange}
              value={data.password}
              required
            />
            {error && <p>{error}</p>}
            <button style={{ marginTop: '2rem' }} className='log-button' type='submit'>
              <p>CONNEXION</p>
            </button>
          </form>
        </div>
        <div className='right'>
          <img src='/logo/logo-morin.png' alt='logo' />
          <Link to='/signup'>
            <button className='log-button' type='button'>
              <p> CRÉER UN COMPTE</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
