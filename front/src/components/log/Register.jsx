import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
    <div className='signup-container'>
      <div className='signup-form-container'>
        <div className='left'>
          <div className='back'>
            <Link to='/'>
              <p>
                MAISON-MORIN <ArrowBackIcon />
              </p>
            </Link>
          </div>
          <h1>S'enregistrer</h1>
          <Link to='/login'>
            <button type='button' className=''>
              Se connecter
            </button>
          </Link>
        </div>
        <div className='right'>
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <h1>Créer un compte</h1>
              <input
                className='input-login'
                type='text'
                placeholder='Prénom'
                name='firstName'
                onChange={handleChange}
                value={data.firstName}
                required
              />
              <input className='input-login' type='text' placeholder='Nom' name='lastName' onChange={handleChange} value={data.lastName} required />
              <input
                className='input-login'
                type='email'
                placeholder='Adresse mail'
                name='email'
                onChange={handleChange}
                value={data.email}
                required
              />
              <input
                className='input-login'
                type='password'
                placeholder='Mot de passe'
                name='password'
                onChange={handleChange}
                value={data.password}
                required
              />
              {error && <p>{error}</p>}
              <button type='submit'>S'enregistrer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
