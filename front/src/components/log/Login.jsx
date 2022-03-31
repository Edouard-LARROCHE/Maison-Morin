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
      window.location = '/';
    } catch (err) {
      if (err.response && err.response.status >= 400 && err.response.status <= 500) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <div>
      <div className=''>
        <div className=''>
          <div className=''>
            <form className='' onSubmit={handleSubmit}>
              <h1>CONNEXION</h1>
              <TextField type='email' placeholder='Adresse mail' name='email' onChange={handleChange} value={data.email} required />
              <TextField type='password' placeholder='Mot de passe' name='password' onChange={handleChange} value={data.password} required />
              {error && <div>{error}</div>}
              <button type='submit'>Se connecter</button>
            </form>
          </div>
          <div className=''>
            <h1>Créer un compte ?</h1>
            <Link to='/signup'>
              <button type='button'>S'enregistrer</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
