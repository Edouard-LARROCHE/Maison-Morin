import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';

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
          <form className='form-container' onSubmit={handleSubmit}>
            <h1>CONNEXION</h1>
            <TextField
              className='input-login'
              type='email'
              placeholder='Adresse mail'
              name='email'
              onChange={handleChange}
              value={data.email}
              required
            />
            <TextField
              className='input-login'
              type='password'
              placeholder='Mot de passe'
              name='password'
              onChange={handleChange}
              value={data.password}
              required
            />
            {error && <div>{error}</div>}
            <button type='submit'>Se connecter</button>
          </form>
        </div>
        <div className='right'>
          <img src='/logo/logo-morin.png' alt='logo' />
          <Link to='/signup'>
            <button className='right-button' type='button'>
              CREER UN COMPTE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
