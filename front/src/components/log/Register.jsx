import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import NavBar from '../home/NavBar';

const Register = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post('http://localhost:5500/register', data);
      navigate('/login');
      console.log(res.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
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
                <p>S'ENREGISTRER</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
